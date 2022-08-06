import Vue from "vue";
import Posts from "@/views/Pages/Posts/PostsPage";
import SinglePost from "@/views/Pages/Posts/SinglePostPage";
import LayoutError from "@/views/Layouts/LayoutError";
import Layout from "@/views/Layouts/LayoutPosts";
import routeTypes from "@/constants/routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: routeTypes.default.path,
    name: routeTypes.default.name,
    redirect: routeTypes.default.redirect,
  },
  {
    path: routeTypes.posts.path,
    name: routeTypes.posts.name,
    component: Posts,
    meta: { layout: Layout },
  },
  {
    path: routeTypes.singlePost.path,
    name: routeTypes.singlePost.name,
    component: SinglePost,
    meta: { layout: Layout },
  },
  {
    path: routeTypes.error.path,
    name: routeTypes.error.name,
    meta: { layout: LayoutError },
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
