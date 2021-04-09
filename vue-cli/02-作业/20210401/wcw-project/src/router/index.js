import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login',
}, {
    path: '/login',
    component: () =>
        import ('../views/login.vue'),
}, {
    path: '/main',
    redirect: {
        name: 'studyList',
    },
    component: () =>
        import ('../views/main.vue'),
    children: [{
        path: 'studyUser',
        name: 'studyUser',
        component: () =>
            import ('../views/StudyUser'),
    }, {
        path: 'studyInfo',
        name: 'studyInfo',
        component: () =>
            import ('../views/StudyInfo'),
    }, {
        path: 'studyList',
        name: 'studyList',
        component: () =>
            import ('../views/StudyList'),
    }]
}]

const router = new VueRouter({
    routes
})

//全局前置守卫
// 需要实例化后才能注册
// 全局前置首位不能获取到this对象
router.beforeEach((to, from, next) => {
    // 只要未登陆~那么就跳转到登陆页
    // if (this.$store.state.infoList.length > 0) {
    //     next('/');
    // }
    next();
})

export default router