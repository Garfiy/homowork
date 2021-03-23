import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/2021-03-23";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '../views/2021-03-23',
  }, {
    path: '/views/2021-03-23',
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
