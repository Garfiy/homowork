import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from "../views/2021/0323";
import MyMenu from "../views/myMenu.vue";


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
        path: '2021/0329',
        component: () =>
            import ('../views/2021/0329/index.vue')
    }, {
        path: '2021/0328',
        component: () =>
            import ('../views/2021/0328/index.vue')
    }, {
        path: '2021/0325',
        component: () =>
            import ('../views/2021/0325/index.vue')
    }, {
        path: '2021/0324',
        //懒加载,需要显示模式,在需要显示的时候才加载
        component: () =>
            import ("../views/2021/0324/index.vue")
    }, {
        //子路由路径可以写相对路径
        path: '2021/0323',
        component: H0323
    }]
}, {
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0329/s02',
        component: () =>
            import ('../views/2021/0329/s02.vue')
    }, {
        path: '2021/0329/s01',
        component: () =>
            import ('../views/2021/0329/s01.vue')
    }, {
        path: '2021/0326/s01',

        //组件内部前置路由守卫
        beforeEnter: (to, from, next) => {
            console.log(to);
            console.log(from);
            // console.log(next);
            next();
        },
        meta: {
            title: 'msg',
        },
        component: () =>
            import ('../views/2021/0326/s01.vue')
    }, {
        path: '2021/0325/s03',
        //将路由上的参数传到组件的props属性中
        props: route => {
            return {
                id: route.query.id
            }
        },
        component: () =>
            import ('../views/2021/0325/s03.vue')
    }, {
        path: '2021/0325/s03/:id',
        //将路由上的参数传到组件的props属性中
        props: true,
        component: () =>
            import ('../views/2021/0325/s03.vue')
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
        //重新向可以传达对象值
        redirect: {
            // name: '编程导航',
            //   /开头 那么就从根路由开启导航
            path: '/homework/2021/0324',
            params: {
                name: '123'
            }
        }
    }, {
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/2021/0324/dynamic.vue')
    }, {
        path: '2021/0324',
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