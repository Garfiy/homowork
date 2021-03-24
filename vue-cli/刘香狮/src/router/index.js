import Vue from "vue";
import VueRouter from "vue-router";
import h323 from "../views/homework/March/No23";

import myMenu from "../views/homework/myMenu.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/homework',
  },
  {
    path: '/homework',
    component: myMenu,
    children: [
      {
        // 子路由的路径可以写相对路径
        path: '3/23',
        component: h323,
      }
    ]
  }

];

const router = new VueRouter({
  routes,
});

export default router;
