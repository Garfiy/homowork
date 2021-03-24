import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import h0323 from '../views/2021/0323';
import MyMenu from '../views/myMenu.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/homework'
}, {
    path: '/homework',
    component: MyMenu,
    children: [{
        //子路由的路径可以写相对路径
        path: '2021/0323',
        component: h0323,
    }, {
        //子路由的路径可以写相对路径
        path: '2021/0324',
        component: () =>
            import ('../views/2021/0324/index.vue'),
    }]
}, {
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue'),
    }, {
        path: '2021/0324/',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue'),
    }, {
        path: "2021/0324class",
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