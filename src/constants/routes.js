const routeTypes = {
  default: {
    name: "default",
    path: "/",
    redirect: "/posts",
  },
  error: {
    name: "error",
    path: "/*",
  },
  posts: {
    name: "posts",
    path: "/posts",
  },
  singlePost: {
    name: "single-post",
    path: "/posts/:postId",
    meta: { scrollToTop: true },
  },
};

export default routeTypes;
