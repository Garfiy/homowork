import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from "../views/2021-03-23";
import MyMenu from "../views/my.vue";


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/homework',

}, {
    path: '/homework',
    component: MyMenu,
    children: [{
        path: '2021/0324',
        //懒加载,需要显示模式,在需要显示的时候才加载
        component: () =>
            import("../views/2021-03-24/index.vue")
    }, {
        //子路由路径可以写相对路径
        path: '2021/0323',
        component: H0323
    }, {
        path: '2021/0325',
        component: () => import('../views/2021-03-25/Tab.vue')
    }, {
        path: '2021/0326',
        component: () => import('../views/2021-03-26/index.vue')
    }]
}, {
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0325/01',
        redirect: {
            name: '编程导航',
            params: {
                name: '123'
            }
        }
    }, {
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import('../views/2021-03-24/Dynamic.vue')
    }, {
        path: '2021/0324',
        component: () =>
            import('../views/2021-03-24/Dynamic.vue')
    }, {
        path: '2021/0324class',
        // 命名视图为多个时
        //components 注意 有最后 s 
        components: {
            default: () =>
                import('../views/2021-03-24/Dynamic.vue'),
            header: () =>
                import('../views/2021-03-24/Dynamic.vue'),
            footer: () =>
                import('../views/2021-03-24/Dynamic.vue')
        }
    }]
}];


const router = new VueRouter({
    // mode: 'hush',
    routes,

});
const flag = true;
router.beforeEach((to, from, next) => {
    if (flag) {
        next();
    } else {
        // console.log(to.path);
        // console.log(from.path);
        if (to.path == '/homework') {
            next();
        } else {
            next(from.path);
        }
    }
})


export default router;