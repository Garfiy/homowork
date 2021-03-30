import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from '../views/2021/0323';
import MyMenu from '../views/myMenu.vue';

Vue.use(VueRouter);

// 解决element导航栏中的vue-router在3.0版本上重复点报错的解决方案
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    // 根路由
    path: '/',
    redirect: '/homework',
}, {
    path: '/homework',
    component: MyMenu,
    children: [{
        // 子路由的路径可以写成相对路径
        path: '2021/0323',
        component: H0323,
    }, {
        // 子路由的路径可以写成相对路径
        path: '2021/0324',
        // 需要显示的模式，在需要显示的时候才加载
        component: () =>
            import ('../views/2021/0324/index.vue'),
    }, {
        // 子路由的路径可以写成相对路径
        path: '2021/0325',
        // 需要显示的模式，在需要显示的时候才加载
        component: () =>
            import ('../views/2021/0325/index.vue'),
    }, {
        // 子路由的路径可以写成相对路径
        path: '2021/0328',
        // 需要显示的模式，在需要显示的时候才加载
        component: () =>
            import ('../views/2021/0328/index.vue'),
    }, {
        path: '2021/0329',
        component: () =>
            import ('../views/2021/0329/index.vue'),
    }]
}, {
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0329/s01',
        component: () =>
            import ('../views/2021/0329/s01.vue'),
    }, {
        path: '2021/0329/s02',
        component: () =>
            import ('../views/2021/0329/s02.vue'),
    }, {
        path: '2021/0326/s01',
        component: () =>
            import ('../views/2021/0326/s01.vue'),
        // 组件内部前置路由守卫
        beforeEnter(to, from, next) {
            console.log(to);
            console.log(from);
            console.log(next());
        },
        meta: {
            title: 'msg',
        }
    }, {
        path: '2021/0325/S03',
        props: router => {
            return {
                id: router.query.id,
            }
        },
        component: () =>
            import ('../views/2021/0325/S03.vue')
    }, {
        path: '2021/0325/S03/:id',
        props: true,
        component: () =>
            import ('../views/2021/0325/S03.vue')
    }, {
        path: '2021/0325/02',
        alias: '/liebiao',
        redirect: () => {
            let flag = true;
            if (flag) {
                return '/homework/2021/0324';
            } else {
                return '2021/0324class';
            }
        }
    }, {
        path: '2021/0325/01',
        // 重定向科研传对象值
        redirect: {
            // name: '编程导航',
            // /开头 那就就从根目录开启导航
            path: '/homework/2021/0324',
            params: {
                name: '牛啊牛啊!',
            }
        }
    }, {
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue')
    }, {
        path: '2021/0324',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue')
    }, {
        path: '2021/0324class',
        // 命名视图未多个时
        // component
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