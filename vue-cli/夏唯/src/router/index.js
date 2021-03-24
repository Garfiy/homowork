import Vue from "vue";
import VueRouter from "vue-router";
import h0323 from "../views/homework/03-23";
import myMenu from "../views/mymenu.vue";

Vue.use(VueRouter);

const routes = [{
    // 根路由
    path: "/",
    // 路由重定向
    redirect: "/homework",
}, {
    // 路由地址
    path: '/homework',
    component: myMenu,
    children: [{
        // 子路由的路径可以写相对路径
        path: "2021/0323",
        component: h0323,
    }, {
        path: "2021/0324",
        // 懒加载的模式 需要显示的时候才加载
        component: () =>
            import ('../views/homework/03-24'),
    }]
}, {
    path: '/study',
    component: myMenu,
    children: [{
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/study/03-24/Dynamic.vue')
    }, {
        path: '2021/0324',
        component: () =>
            import ('../views/study/03-24/Dynamic.vue')
    }, {
        path: '2021/0324class',
        // 命名视图为多个时
        // component要加s
        components: {
            default: () =>
                import ('../views/homework/03-24'),
            header: () =>
                import ('../views/homework/03-24'),
            footer: () =>
                import ('../views/homework/03-24')
        }
    }]
}];

const router = new VueRouter({
    routes,
});

export default router;