import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import h0323 from '../views/2021/0323';
import MyMenu from '../views/myMenu.vue';

Vue.use(VueRouter);


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
    }, {
        path: '2021/0325',
        component: () =>
            import ('../views/2021/0325/index.vue'),
    }, {
        path: '2021/0326',
        component: () =>
            import ('../views/2021/0326/index.vue'),
    }, {
        path: '2021/0329',
        component: () =>
            import ('../views/2021/0329/index.vue'),
    }]
}, {
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0329/01',
        component: () =>
            import ('../views/2021/0329/s01.vue'),
    }, {
        path: '2021/0329/02',
        component: () =>
            import ('../views/2021/0329/s02.vue'),
    }, {
        path: '2021/0326/01',
        component: () =>
            import ('../views/2021/0326/s01.vue'),
        // 组件内部前置路由守卫
        beforeEnter(to, from, next) {
            // console.log(to);
            // console.log(from);
            // console.log(next);
            next();
        },

    }, {
        path: '2021/0325/03',
        //蒋路由上的参数传到组件的props属性中
        props: route => {
            return {
                id: route.query.id
            }
        },
        component: () =>
            import ('../views/2021/0325/s03.vue'),
    }, {
        path: '2021/0325/03/:id',
        //蒋路由上的参数传到组件的props属性中
        props: true,
        component: () =>
            import ('../views/2021/0325/s03.vue'),
    }, {
        path: '2021/0325/02',
        alias: '/liebiao',
        // component: MyMenu
        redirect: () => {
            let flag = false;
            if (flag) {
                return '2021/0324'
            } else {
                return '2021/0324class'
            }
        }
    }, {
        path: '2021/0325/01',
        redirect: {
            path: '/homework/2021/0324',
            // name: '编程导航',
            params: {
                name: '123'
            }
        }
    }, {
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
    // mode: 'history',
    routes,
});

//全局前置守卫
//使用守卫时需要先实例化

const flag = true
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next);
    //这个方法时路由继续执行的方法
    // 如果不执行这个方法，那么路由定向就会停止
    // next();
    if (flag) {
        next()
    } else {
        if (to.path == '/homework') {
            //去的路由和来的路由相同时
            next()
        } else {
            next(from.path)
        }
    }
})

// router.afterEach((to, from) => {
//     console.log(to);
//     console.log(from);
// })
export default router;