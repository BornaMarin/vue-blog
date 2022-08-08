<template>
  <div class="posts">
    <post-page-header>
      <field-input
        class="search-bar"
        :class="{ focused: isSearchFocused }"
        id="posts-search"
        name="postsSearch"
        placeholder="Search creator"
        ariaLabel="Search post creator"
        type="search"
        :value="postsParams.search"
        @input="handleSearch"
        @focused="handleFocus"
      />
    </post-page-header>
    <div class="posts-container">
      <post-item
        class="posts-item"
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :post="post"
        :user="getPostOwner(post)"
        @click.native="storeAndRedirect(post)"
      />
    </div>
    <standard-pagination
      v-if="posts && posts.length && +postsParams._limit !== 100"
      :page="+this.postsParams._page"
      :last-page="10"
      class="posts-pagination"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import PostItem from "@/components/ListItems/PostItem";
import PostPageHeader from "@/components/Headers/PostsPageHeader";
import { groupById, isObjectEmpty } from "@/helpers/HelperFunctions";
import FieldInput from "@/components/FormInputs/FieldInput";
import debounce from "lodash/debounce";
import isEqual from "lodash/isEqual";
import SessionStorageMixin from "@/mixins/SessionStorageMixin";
import routeTypes from "@/constants/routes";
import StandardPagination from "@/components/UI/StandardPagination";

export default {
  components: {
    StandardPagination,
    FieldInput,
    PostItem,
    PostPageHeader,
  },
  mixins: [SessionStorageMixin],
  metaInfo: {
    title: "Q ",
    titleTemplate: "%s | posts",
  },
  data() {
    return {
      isSearchFocused: false,
      showPagination: false,
      posts: [],
      users: {},
      usersForSearch: [],
      postsParams: {
        _page: 1,
        _limit: 10,
        userId: null,
        search: "",
      },
    };
  },
  methods: {
    async handlePageChange(value) {
      this.postsParams._page = value;
      await this.getPosts();
      await this.$router.replace({
        query: { ...this.postsParams, _page: value },
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    async getPosts() {
      const response = await this.$apiService.posts.fetch(this.postsParams);
      this.posts = response?.data;
    },
    async getUsers() {
      const response = await this.$apiService.users.fetch();

      //Avoid looping users array every time we need a single user
      //When we need a specific user for a specific post -> this.users[post.userId]
      //Usually we get user object on a single post...

      this.users = groupById(response.data);

      //ignore this
      this.usersForSearch = response.data;
    },
    getPostOwner(post) {
      return this.users[post.userId.toString()];
    },
    storeAndRedirect(post) {
      this.storeInSessionStorage("post", post);
      this.storeInSessionStorage("user", this.getPostOwner(post));
      if (
        !isEqual(this.$route.query, {
          ...this.postsParams,
          postId: post.id.toString(),
        })
      ) {
        this.$router.replace({
          query: { ...this.postsParams, postId: post.id },
        });
      }
      this.$router.push(`${routeTypes.posts.path}/${post.id}`);
    },
    handleSearch: debounce(async function (searchValue) {
      //Docs had author query (/posts?author=typicode), but I think api has changed.. We only have userId query now
      //todo I will hack my way around.. dont do this at work!!!!
      this.postsParams.search = searchValue;
      if (!searchValue) {
        this.postsParams.userId = null;
        this.postsParams._limit = 10;
        await this.getPosts();
      } else {
        let foundUser = this.usersForSearch.find((user) =>
          user.name.toLowerCase().includes(searchValue)
        );
        if (foundUser) {
          this.postsParams.userId = foundUser.id;
          //sadly I have to reset pagination and set limit to 100, there is no good way to handle pagination when searching for user, api functionality is limited :(
          this.postsParams._page = 1;
          this.postsParams._limit = 100;
          this.$router.replace({ query: this.postsParams });
          await this.getPosts();
        }
      }
    }, 500),
    handleFocus() {
      this.isSearchFocused = !this.isSearchFocused;
    },
    setupQueryParams() {
      const query = this.$route.query;
      if (isObjectEmpty(query)) {
        this.$router.push({ query: this.postsParams });
      } else {
        Object.assign(this.postsParams, query);
      }
    },
    scrollToSpecificElement() {
      const target = document.getElementById(this.$route.query?.postId);
      const headerHeight = 80;
      const y = target?.getBoundingClientRect().top - headerHeight;
      window.scrollTo({ top: y ? y : 0, behavior: "smooth" });
    },
  },
  async created() {
    this.setupQueryParams();
    await this.getPosts();
    await this.getUsers();
    this.scrollToSpecificElement();
  },
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";

.posts {
  width: 100%;
  min-height: 600px;
  &-item {
    cursor: pointer;
  }
  //clumsy way to handle sticky pagination jumping :D
  &-container {
    min-height: 1200px;
  }
  &-pagination {
    bottom: 0;
    position: sticky;
    background-color: $color-bg;
  }
}
.search-bar {
  color: white;
  background-color: rgba($color: $color-dark-gray, $alpha: 0.3);
  padding: 1rem;
  border-radius: 999px;
  border: 1px solid rgba($color: $color-dark-gray, $alpha: 0);
  transition: border 150ms ease;
  &.focused {
    border: 1px solid rgba($color: $color-blue, $alpha: 1);
  }
}
</style>
