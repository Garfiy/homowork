import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import H0323 from "../views/2021-03-23";
import MyMenu from '../views/myMenu.vue';
Vue.use(VueRouter);

const routes = [{
    // 根路由
    path: '/',
    // 路由重定向
    redirect: '../homework',
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
    }]
}, {
    path: '/study',
    component: MyMenu,
    children: [{
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