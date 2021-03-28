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
    }]
}, {
    path: '/study',
    component: MyMenu,
    children: [{
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
});

export default router;