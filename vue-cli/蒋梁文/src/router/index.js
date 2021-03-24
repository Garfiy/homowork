import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from '../views/2021/0323';
import MyMenu from '../views/myMenu.vue';

Vue.use(VueRouter);

const routes = [{
    // 根路由
    path: '/',
    redirect: '/homework',
}, {
    path: '/homework',
    component: MyMenu,
    children: [{
        // 子路由的路径可以写成相对路径
        path: '2021/0323',
        component: H0323,
    }, {
        // 子路由的路径可以写成相对路径
        path: '2021/0324',
        // 需要显示的模式，在需要显示的时候才加载
        component: () =>
            import ('../views/2021/0324/index.vue'),
    }]
}, {
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue')
    }, {
        path: '2021/0324',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue')
    }, {
        path: '2021/0324class',
        // 命名视图未多个时
        // component
        components: {
            default: () =>
                import ('../views/2021/0324/index.vue'),
            header: () =>
                import ('../views/2021/0324/index.vue'),
            footer: () =>
                import ('../views/2021/0324/index.vue'),
        }
    }]
}];

const router = new VueRouter({
    routes,
});

export default router;