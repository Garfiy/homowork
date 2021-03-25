import Vue from "vue";
import VueRouter from "vue-router";
import h0323 from '../views/2021-03-23';
import MyMenu from '../views/my.vue'
Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      redirect: '/homework',
    },
    {
      path: '/homework',
      component: MyMenu,
      children: [{
        path: '2021/0323',
        component: h0323,
      },{
        path: '2021/0324',
        // component: h0324,
        component: () => import("../views/2021-03-24/index.vue")
        
      }],
    },{
      path: '/study',
      component: MyMenu,
      children: [{
        path:'2021/0324/:name',
        component:() => import("../views/2021-03-24/Dynamic.vue")
      },{
        path:'2021/0324',
        name: '深刻的健康',
        component:() => import("../views/2021-03-24/Dynamic.vue")
      },{
        path:'2021/0324/class',
        component: {
          default: () => import("../views/2021-03-24/index.vue"),
          header:() => import("../views/2021-03-24/index.vue"),
          footer:() => import("../views/2021-03-24/index.vue"),
        }
      }]
    }
];

const router = new VueRouter({
  routes,
});

export default router;
