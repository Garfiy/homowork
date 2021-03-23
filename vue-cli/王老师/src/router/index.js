import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from '../views/2021/0323';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '../views/2021/0323',
    },
    {
        path: '/views/2021/0323',
        component: H0323,
    }
];

const router = new VueRouter({
    routes,
});

export default router;