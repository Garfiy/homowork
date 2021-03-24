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
        // 懒加载模式 在需要显示的时候才加载
        // 普通函数
        // component: function() {
        //     return import ('../views/2021/0324');
        // },

        // 箭头函数
        component: () =>
            import ('../views/2021/0324'),

    }]
}, {
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0324/:name',
        name: '编程式导航',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue'),
    }, {
        path: '2021/0324',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue'),
    }, {
        path: '2021/0324class',
        components: {
            // 命名视图为多个时 component + s 
            default: () =>
                import ('../views/2021/0324/index.vue'),
            header: () =>
                import ('../views/2021/0324/index.vue'),
            footer: () =>
                import ('../views/2021/0324/index.vue'),
        },
    }]
}];

const router = new VueRouter({
    routes,
});

export default router;