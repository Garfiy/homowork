import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import h0323 from '../views/2021-03-23'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '../views/2021-03-23'
}, {
    path: '/views/2021-03-23',
    component: h0323,
}];

const router = new VueRouter({
    routes,
});

export default router;