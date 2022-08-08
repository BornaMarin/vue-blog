<template>
  <div>
    <post-page-header />
    <post-item :post="post" :user="user" hide-action-btn />
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
import PostItem from "@/components/Celltems/PostItem";
import PostPageHeader from "@/components/Headers/PostsPageHeader";
import CommentItem from "@/components/Celltems/CommentItem";
import SessionStorageMixin from "@/mixins/SessionStorageMixin";
import LoadingSpinner from "@/components/DumbComponents/LoadingSpinner";
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
  },
  async created() {
    //we can choose to fetch single post info from session storage or fetch it from the server
    this.user = this.fetchFromSessionStorage("user");
    this.post = this.fetchFromSessionStorage("post");

    // await this.getSinglePost();
    // await this.getOwner();

    await this.getComments();
  },
};
</script>
