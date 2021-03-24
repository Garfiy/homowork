import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/2021/0323/vue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'../views/2021/0323/vue.vue',
  },{
    path:'/views/2021/0323/vue.vue',
    component:Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
