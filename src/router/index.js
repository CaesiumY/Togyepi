import Vue from "vue";
import VueRouter from "vue-router";
import CalcView from "../views/CalcView.vue";
import PhotoView from "../views/PhotoView.vue";
import PlanView from "../views/PlanView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "CalcView",
    component: CalcView,
  },
  {
    path: "/photo",
    name: "PhotoView",
    component: PhotoView,
  },
  {
    path: "/plan",
    name: "PlanView",
    component: PlanView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
