import Vue from "vue";
import VueRouter from "vue-router";
import H123 from "../views/2021-03-23";
import MyMenu from '../views/2021/myMenu.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/', //根路由
    redirect: '/homework', //路由重定向

<<<<<<< HEAD
}, {
    //路由地址
    path: '/homework',
    component: MyMenu,
    children: [{
        path: '2021/0325',
        component: function() { //普通函数
            return import ('../views/2021/0325/index.vue');
        }
    }, {
        //子路由的路径可以写相对路径
        path: '2021-03-23',
        component: H123,
    }, {
        //子路由的路径可以写相对路径
        path: '2021/0324',
        //懒加载的模式,在需要显示的时候才加载
        component: function() { //普通函数
                return import ('../views/2021/0324/index.vue');
=======
    },
    {
        //路由地址
        path: '/homework',
        component: MyMenu,
        children: [{
            path: '2021/0329',
            component: function() { //普通函数
                return import ('../views/2021/0329/index.vue');
            }
        }, {
            path: '2021/0326',
            component: function() { //普通函数
                return import ('../views/2021/0326/index.vue');
            }
        }, {
            path: '2021/0325',
            component: function() { //普通函数
                return import ('../views/2021/0325/index.vue');
>>>>>>> f4ac7c1ad6c6d22a64d95c3468a17e7ec2b9a858
            }
            //箭头函数
            // component:()=>import ('../views/2021/0324/index.vue'),

    }]
}, {
    //学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path: '2021/0325/03',
        //将路由上参数传到组件的props属性中
        props: route => {
            return {
                id: route.query.id,
            }
        },
        component: () =>
            import ('../views/2021/0325/c03.vue'),
    }, {
<<<<<<< HEAD
        path: '2021/0325/03/:id',
        //将路由上参数传到组件的props属性中
        props: true,
        component: () =>
            import ('../views/2021/0325/c03.vue'),
    }, {
        path: '2021/0325/02',
        alias: '/liebiao',
        redirect: () => {
            let flag = true;
            if (flag) {
                return '/homework/2021/0324';
            } else {
                return '2021/0324class';
=======
        //学习的内容
        path: '/study',
        component: MyMenu,
        children: [{
            path: '2021/0329/01',
            component: () =>
                import ('../views/2021/0329/c1.vue'),
        }, {
            path: '2021/0329/02',
            component: () =>
                import ('../views/2021/0329/c2.vue'),
        }, {
            path: '2021/0326/01',
            component: () =>
                import ('../views/2021/0326/c1.vue'),
            //组建内部前置路由守卫
            beforeEnter(to, from, next) {
                // console.log(to);
                // console.log(from);
                // console.log(next);
                next();
            },
            meta: {
                title: 'cc',
            },
        }, {
            path: '2021/0325/03',
            //将路由上参数传到组件的props属性中
            props: route => {
                return {
                    id: route.query.id,
                }
            },
            component: () =>
                import ('../views/2021/0325/c03.vue'),
        }, {
            path: '2021/0325/03/:id',
            //将路由上参数传到组件的props属性中
            props: true,
            component: () =>
                import ('../views/2021/0325/c03.vue'),
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
>>>>>>> f4ac7c1ad6c6d22a64d95c3468a17e7ec2b9a858
            }
        }
    }, {
        path: '2021/0325/01',
        //重定向可以传递对象值
        redirect: {
            // name: '编程导航',
            //   斜杠(/)开头 那么就从根路由开启导航
            path: '/homework/2021/0324',
            params: {
                name: '123'
            }
        }
    }, {
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/2021/0324/dynamic.vue'),
    }, {
        path: '2021/0324',
        component: () =>
            import ('../views/2021/0324/dynamic.vue'),
    }, {
        path: '2021/0324class',
        //命名视图为多个时,components要加s
        components: {
            default: () =>
                import ('../views/2021/0324/index.vue'),
            header: () =>
                import ('../views/2021/0324/index.vue'),
            footer: () =>
                import ('../views/2021/0324/index.vue'),
        },
    }]
}];

const router = new VueRouter({
    routes,
});

export default router;