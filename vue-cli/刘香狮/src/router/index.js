import Vue from "vue";
import VueRouter from "vue-router";
import h323 from "../views/homework/March/No23";

import myMenu from "../views/homework/myMenu.vue";

Vue.use(VueRouter);
const originalReplace = VueRouter.prototype.push;

// 解决编程式导航连点报错
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch(err => err);
};


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
      },
      {
        path: '2021/0325',
        component: () => import('../views/homework/March/No25')
      },
      {
        path :'2021/0327',
        component:()=>import ('../views/homework/March/N027'),
        children:[
          {
            path:'form',
            component:()=>import('../views/homework/March/N027/form.vue')
          }
        ]
      }
    ]
  },
   // 学习
  {
   
    path: '/study',
    component: myMenu,
    children: [
      {
        path:'03/26/01',
        // 路由内前置守卫
        beforeEnter: (to, from, next) => {
          // console.log(to);
          // console.log(from);
          // console.log(next);
          // 不加这个会进不来链接
          next()
        },
        
        component: () => import('../views/study/March/No26/s01.vue'),
        meta:{
          title:'msg',
        }
      },
      {
        path: '03/26yesterday',
        component: () => import('../views/study/March/No26/Homeworkyesterday.vue')
      },
      {
        path: '03/25/03',
        component: () => import('../views/study/March/No25/s03.vue'),
        props: route => {
          return {
            id: route.query.id,
          }
        }
      },
      {
        path: '03/25/03/:id',
        component: () => import('../views/study/March/No25/s03.vue'),
        // 将路由上的参数传到组件的props属性中
        props: true

      },
      {
        path: '03/25/02',
        // alias 表示为路由器的别名
        alias: '/liebiao',
        redirect: () => {
          let flag = true;
          if (flag) {
            return '/homework/2021/0324';
            // 默认是返回一个path  需要返回 指定name 就返回一个带name的对象
          } else {
            return '03/24class';
          }
        }
      },
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
      },
      {
        path: '03/25yesterday',
        component: () => import('../views/study/March/No25/Homeworkyesterday.vue')
      },
      {
        path: '03/25/01',
        // 重定向可以传递对象值
        redirect: {
          // name 为其他路由的别名 跳转到指定的路由
          // name: '编程导航',

          // path 有斜杠会从根路由开始
          //  无斜杠就是原本的父级
          path: '/homework/2021/0323',
          params: {
            name: '123',
          }
        }
      },
    ]
  }

];

const router = new VueRouter({
  routes,
  scrollBehavior(to,from,savedPosition){
    to,from,savedPosition
    // 记录了当前浏览器的滚动位置 // savedPosition
    // return savedPosition   只是返回开始的位置
    // x 横向滚动
    // y 竖向滚动
    return {
      x:0,
      y:0
    }
  }
});

export default router;
