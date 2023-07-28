import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/task/:id",
    name: "task",
    props: true,
    component: () => import("@/views/TaskItemView.vue"),
  },
  {
    path: "/new",
    name: "newTask",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/NewTaskView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
