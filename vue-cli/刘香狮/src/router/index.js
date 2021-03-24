import Vue from "vue";
import VueRouter from "vue-router";
import h323 from "../views/homework/March/No23";

import myMenu from "../views/homework/myMenu.vue";

Vue.use(VueRouter);

// 根路由
const routes = [
  // 路由重定向
  {
    path: '/',
    redirect: '/homework',
  },
  // 路由地址
  // 作业
  {
    path: '/homework',
    component: myMenu,
    children: [
      {
        // 子路由
        // 子路由的路径可以写相对路径
        path: '2021/0323',
        component: h323,
      }, {
        path: '2021/0324',
        // 懒加载的模式 在需要显示的时候 才加载
        // 箭头函数形式
        component: () => import('../views/homework/March/No24'),
        // 普通函数
        // component:function(){
        //   return import('../views/homework/March/No24');
        // }
      }
    ]
  }, {
    // 学习
    path: '/study',
    component: myMenu,
    children: [
      {
        path: '03/24/:name', //params 传参 地址后面/加参数
        // 只有index和app文件名 可以不用声明  其他的文件都要声明
        name: '编程导航',  // params编程导航的时候需要name
        component: () => import('../views/study/March/No24/dynamic'),
      },
      {
        path: '03/24', // query传参 在传参数地址用?号接属性名
        component: () => import('../views/study/March/No24/dynamic'),
      },
      {
        path: '03/24class',
        // 命名视图为多个时 components 要加s
        components: {
          // default  默认视图显示
          default: () => import('../views/homework/March/No24'),
          // 对面名的视图显示
          header: () => import('../views/homework/March/No24'),
          footer: () => import('../views/homework/March/No24'),
        }
      }
    ]
  }

];

const router = new VueRouter({
  routes,
});

export default router;
