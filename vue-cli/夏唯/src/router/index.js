import Vue from "vue";
import VueRouter from "vue-router";
import r0323 from "../views/2021/03.23";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '../views/2021/03.23',
}, {
    path: '/views/2021/03.23',
    component: r0323,
}];

const router = new VueRouter({
    routes,
});

export default router;