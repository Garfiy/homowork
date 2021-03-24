import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from "../views/2021/0323";
import MyMenu from "../views/myMenu.vue";
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/homework',

}, {
    path: '/homework',
    component: MyMenu,
    children: [{
        //子路由路径可以写相对路径
        path: '2021/0323',
        component: H0323
    }, {
        path: '2021/0324',
        //懒加载,需要显示模式,在需要显示的时候才加载
        component: () =>
            import ("../views/2021/0324/index.vue")
    }]
}, {
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0324/:name',
        component: () =>
            import ('../views/2021/0324/dynamic.vue')
    }, {
        path: '2021/0324',
        name: '编程导航',
        component: () =>
            import ('../views/2021/0324/dynamic.vue')
    }, {
        path: '2021/0324class',
        // 命名视图为多个时
        //components 注意 有最后 s
        components: {
            default: () =>
                import ('../views/2021/0324/dynamic.vue'),
            header: () =>
                import ('../views/2021/0324/dynamic.vue'),
            footer: () =>
                import ('../views/2021/0324/dynamic.vue')
        }
    }]
}];

const router = new VueRouter({
    routes,
});

export default router;