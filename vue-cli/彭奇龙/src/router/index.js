import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import H0323 from "../views/2021-03-23";
import MyMenu from '../views/myMenu.vue';
Vue.use(VueRouter);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
        // 二级路由
        // 子路由的路径可以写相对路径
        path: '2021/0323',
        component: H0323,
    }, {
        // 二级路由
        // 子路由的路径可以写相对路径
        path: '2021/0324',
        // 懒加载的模式  在需要显示的时候才加载
        // 普通函数
        component: () =>
            import ('../views/2021-03-24/index.vue'),
    }, {
        path: '2021/0325',
        component: () =>
            import ('../views/2021-03-25/index.vue')
    }, {
        path: '2021/0326',
        component: () =>
            import ('../views/2021-03-26/index.vue')
    }, {
        path: '2021/0329',
        component: () =>
            import ('../views/2021-03-29/formdata.vue')
    }, {
        path: '2021/0329/12',
        component: () =>
            import ('../views/2021-03-29/table.vue')
    }, {
        path: '2021/0331',
        component: () =>
            import ('../views/2021-03-31/index.vue')
    }]
}, {
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0331/02',
        component: () =>
            import ('../views/2021-03-31/S02.vue')
    }, {
        path: '2021/0331/01',
        component: () =>
            import ('../views/2021-03-31/S01.vue')
    }, {
        path: '2021/0329/01',
        component: () =>
            import ('../views/2021-03-29/S01.vue')
    }, {
        path: '2021/0329/02',
        component: () =>
            import ('../views/2021-03-29/S02.vue')
    }, {
        path: '2021/0326/01',
        component: () =>
            import ('../views/2021-03-26/S01.vue'),
        // 组件内部前置路由守卫
        beforeEnter(to, from, next) {
            // console.log(to);
            // console.log(from);
            // console.log(next);
            next();
        },
        meta: {
            title: 'msg',
        },
    }, {
        path: '2021-03-25/03',
        // 将路由上参数传到组件的props属性中
        props: router => {
            return {
                id: router.query.id
            }
        },
        component: () =>
            import ('../views/2021-03-25/S03.vue')
    }, {
        path: '2021-03-25/03/:id',
        // 将路由上参数传到组件的props属性中
        props: true,
        component: () =>
            import ('../views/2021-03-25/S03.vue')
    }, {
        path: '2021-03-25/02',
        alias: '/liebao',
        // 重定向可以传递对象值
        redirect: () => {
            let flag = false;
            if (flag) {
                return '2021/0324'
            } else {
                return '2021/0324'
            }
        },

    }, {
        path: '2021-03-25/01',
        // 重定向可以传递对象值
        redirect: {
            // name: '编程导航',
            path: '/homework/2021/0323',
            params: {
                name: '55555'
            }
        },

    }, {
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/2021-03-24/Dynamic.vue')
    }, {
        path: '2021/0324/',
        component: () =>
            import ('../views/2021-03-24/Dynamic.vue')
    }]
}];

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        to,
        from,
        savedPosition;
        // 记录了当前浏览器的滚动位置
        // return savedPosition
        // x 横向轮动
        // y 竖向滚动
        return { x: 0, y: 0, }
    }
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
        if (to.path == '/homework') {
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