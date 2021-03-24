import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/2021/0323";
import MyMenu from '../views/myMenu.vue';

Vue.use(VueRouter);

const routes = [
  {
    // 作业
    path: '/',
    redirect: '/homework',
  }, {
    path: '/homework',
    component: MyMenu,
    children: [{
      path: '2021/0323',
      component: Home,
    }, {
      path: '2021/0324',
      component: function () {
        return import('../views/2021/0324')
      }
    }],
  }, {
    // 学习
    path: '/study',
    component: MyMenu,
    children:[{
      path:'2021/0324',
      component:()=>import('../views/2021/0324/Dynamic.vue'),
    }]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
