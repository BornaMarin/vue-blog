<template>
  <div>
    <post-page-header />
    <post-item :post="post" :user="user" />
    <template v-if="comments && comments.length">
      <comment-item
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </template>
    <loading-spinner v-else />
  </div>
</template>

<script>
import PostItem from "@/components/ListItems/PostItem";
import PostPageHeader from "@/components/Headers/PostsPageHeader";
import CommentItem from "@/components/ListItems/CommentItem";
import SessionStorageMixin from "@/mixins/SessionStorageMixin";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
export default {
  mixins: [SessionStorageMixin],
  components: {
    LoadingSpinner,
    PostItem,
    CommentItem,
    PostPageHeader,
  },
  data() {
    return {
      post: null,
      user: null,
      comments: [],
    };
  },
  methods: {
    async getComments() {
      try {
        const response = await this.$apiService.comments.get(
          this.$route.params.postId + "/comments"
        );
        this.comments = response.data;
      } catch (e) {
        console.log("handle error here");
      }
    },
    async getOwner() {
      try {
        const response = await this.$axios.get("users/" + this.post.userId);
        this.user = response.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getSinglePost() {
      try {
        const response = await this.$axios.get(
          "posts/" + this.$route.params.postId
        );
        this.post = response.data;
      } catch (e) {
        console.log("handle error here");
      }
    },
  },
  async created() {
    //we can choose to fetch and store single post in session storage or fetch it from the server
    this.user = this.fetchFromSessionStorage("user");
    this.post = this.fetchFromSessionStorage("post");

    // await this.getSinglePost();
    // await this.getOwner();

    await this.getComments();

    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>
