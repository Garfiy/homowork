import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from "../views/2021/0323";
import MyMenu from "../views/myMenu.vue";

Vue.use(VueRouter);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of b32d113 (彭超群)
=======
>>>>>>> 94f09738bb71e4323f6c4049994c1e53529626bf
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    // 根路由
    path: "/",
    // 路由重定向
    redirect: "/homework",
  },
  // 作业路由
  {
    // 路由地址
    path: "/homework",
    component: MyMenu,
    children: [
      {
        // 子路由的路径可以写相对路径
        path: "2021/0323",
        component: H0323,
      },
      {
        // 子路由的路径可以写相对路径
        path: "2021/0324",
        // 懒加载的模式  在需要显示的时候才加载
        // 普通函数
        // component: function() {
        //     return import ('../views/2021/0324/index.vue');
        // },
        // 箭头函数
        component: () => import("../views/2021/0324/index.vue"),
<<<<<<< HEAD
      }, {
        path: "2021/0325",
        component: () => import("../views/2021/0325/index.vue"),
      }, {
        path: "2021/0326",
        component: () => import("../views/2021/0326/index.vue"),
      }, {
        path: "2021/0329",
        component: () => import("../views/2021/0329/index.vue"),
=======
      },
      {
        path: "2021/0325",
        component: () => import("../views/2021/0325/index.vue"),
>>>>>>> parent of b32d113 (彭超群)
      },
    ],
  },
  // 学习路由
  {
    // 学习的内容
    path: "/study",
    component: MyMenu,
    children: [
      {
<<<<<<< HEAD
        path: "2021/0329/01",
        component: () => import("../views/2021/0329/s01.vue"),
      }, {
        path: "2021/0329/02",
        component: () => import("../views/2021/0329/s02.vue"),
      },
      {
=======
>>>>>>> parent of b32d113 (彭超群)
        path: "2021/0326/01",
        component: () => import("../views/2021/0326/s01.vue"),
        // 组件内部前置路由守卫
        beforeEnter(to, from, next) {
          // console.log(to);
          // console.log(from);
          // console.log(next);
          next();
        },
        meta: {
          title: "msg",
        },
      },
      {
        path: "2021/0325/03",
        props: (route) => {
          return {
            id: route.query.id,
          };
        },
        component: () => import("../views/2021/0325/s03.vue"),
      },
      {
        path: "2021/0325/03/:id",
        // 将路由上参数传到组件的props属性中
        props: true,
        component: () => import("../views/2021/0325/s03.vue"),
      },
      {
        path: "2021/0325/02",
        alias: "/liebiao",
        redirect: () => {
          let flag = true;
          if (flag) {
            return "/homework/2021/0324";
          } else {
            return "2021/0324class";
          }
        },
      },
      {
        path: "2021/0325/01",
        // 重定向可以传递对象值
        redirect: {
          // name: '编程导航',
          //   / 开头 那么就从根路由开启导航
          path: "/homework/2021/0324",
          params: {
            name: "123",
          },
        },
      },
      {
        path: "2021/0324/:name",
        name: "编程导航",
        component: () => import("../views/2021/0324/Dynamic.vue"),
      },
      {
        path: "2021/0324",
        component: () => import("../views/2021/0324/Dynamic.vue"),
      },
      {
        path: "2021/0324class",
        // 命名视图为多个时，
        // components 要加 s
        components: {
          default: () => import("../views/2021/0324/index.vue"),
          header: () => import("../views/2021/0324/index.vue"),
          footer: () => import("../views/2021/0324/index.vue"),
        },
      },
    ],
  },
];
<<<<<<< HEAD
<<<<<<< HEAD
=======
const routes = [{
  // 根路由
  path: '/',
  // 路由重定向
  redirect: '/homework',
}, {
  // 路由地址
  path: '/homework',
  component: MyMenu,
  children: [{
    // 子路由的路径可以写相对路径
    path: '2021/0323',
    component: H0323,
  }, {
    // 子路由的路径可以写相对路径
    path: '2021/0324',
    // 懒加载的模式  在需要显示的时候才加载
    // 普通函数
    // component: function() {
    //     return import ('../views/2021/0324/index.vue');
    // },
    // 箭头函数
    component: () =>
      import('../views/2021/0324/index.vue'),
  }]
}, {
  // 学习的内容
  path: '/study',
  component: MyMenu,
  children: [{
    path: '2021/0324/:name',
    name: '编程导航',
    component: () =>
      import('../views/2021/0324/Dynamic.vue'),
  }, {
    path: '2021/0324',
    component: () =>
      import('../views/2021/0324/Dynamic.vue'),
  }, {
    path: '2021/0324class',
    // 命名视图为多个时，
    // components 要加 s
    components: {
      default: () =>
        import('../views/2021/0324/index.vue'),
      header: () =>
        import('../views/2021/0324/index.vue'),
      footer: () =>
        import('../views/2021/0324/index.vue'),
    }
  }]
}];
>>>>>>> b32d1135c695c90dfb40e1c55cd47ecaa286ff68
=======
>>>>>>> parent of b32d113 (彭超群)
=======
>>>>>>> 94f09738bb71e4323f6c4049994c1e53529626bf

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    to, from, savedPosition;
    // 记录了当前浏览器的滚动位置
    // return savedPosition
    // x 横向轮动
    // y 竖向滚动
    return { x: 0, y: 0 };
  },
});

const flag = true;
// 全局前置守卫
// 使用守卫时，需要先实例化
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // console.log(next);
  // 这个方法是路由继续执行的方法
  // 如果不执行这个方法~路由定向就会停止
  // next();

  if (flag) {
    next();
  } else {
    // console.log(to.path);
    // console.log(from.path);
    if (to.path == "/homework") {
      // 去的路由和来的路由相同时
      next();
    } else {
      next(from.path);
    }
  }
});

// 全局后置守卫
// router.afterEach((to, from) => {
// console.log(to);
// console.log(from);
// });

export default router;
