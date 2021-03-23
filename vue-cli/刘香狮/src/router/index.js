import Vue from "vue";
import VueRouter from "vue-router";
import l323 from "../views/3/23";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'../views/3/23',
  },
  {
    path:'/views/3/23',
    component:l323,
  }

];

const router = new VueRouter({
  routes,
});

export default router;
