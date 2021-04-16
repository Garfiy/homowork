// import { format } from "core-js/core/date";
import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from '../views/2021/0323';
import MyMenu from '../views/myMenu.vue';

Vue.use(VueRouter);


const routes = [{
    // 根路由
    path: '/',
    redirect: '/homework',
}, {
    // 作业路由
    // 路由地址
    path: '/homework',
    component: MyMenu,
    children: [{
        // 子路由的路径可以写相对路径
        path: '2021/0323',
        component: H0323,
    }, {
        // 子路由的路径可以写相对路径
        path: '2021/0324',
        // 懒加载模式 在需要显示的时候才加载
        // 普通函数
        // component: function() {
        //     return import ('../views/2021/0324');
        // },

        // 箭头函数
        component: () =>
            import ('../views/2021/0324'),

    }, {
        path: '2021/0325',
        component: () =>
            import ('../views/2021/0325'),
    }, {
        path: '2021/0326',
        component: () =>
            import ('../views/2021/0326'),
    }, {
        path: '2021/0329',
        component: () =>
            import ('../views/2021/0329'),
    }, {
        path: '2021/0331',
        component: () =>
            import ('../views/2021/0331'),
    }, {
        path: '2021/0402',
        component: () =>
            import ('../views/2021/0402/index2.vue'),
    }, {
        path: '2021/0416',
        component: () =>
            import ('../views/2021/0416/index.vue'),
    }]
}, {
    // 学习路由
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
            path: '2021/0331/02',
            // 组件内部前置路由守卫
            component: () =>
                import ('../views/2021/0331/S02.vue'),
        }, {
            path: '2021/0331/01',
            // 组件内部前置路由守卫
            component: () =>
                import ('../views/2021/0331/S01.vue'),
        }, {
            path: '2021/0329/01',
            // 组件内部前置路由守卫
            component: () =>
                import ('../views/2021/0329/S02.vue'),
        }, {
            path: '2021/0329/02',
            // 组件内部前置路由守卫
            component: () =>
                import ('../views/2021/0329/S03.vue'),
        }, {
            path: '2021/0326/01',
            // 组件内部前置路由守卫
            component: () =>
                import ('../views/2021/0329/S03.vue'),
            beforeEnter(to, from, next) {
                // console.log(to, from, next);
                next();
            },
            meta: {
                title: 'msg',
            },
        }, {
            path: '2021/0326/01',
            // 组件内部前置路由守卫
            component: () =>
                import ('../views/2021/0329/S02.vue'),
            beforeEnter(to, from, next) {
                // console.log(to, from, next);
                next();
            },
            meta: {
                title: 'msg',
            },
        }, {
            path: '2021/0326/01',
            // 组件内部前置路由守卫
            component: () =>
                import ('../views/2021/0326/S01.vue'),
            beforeEnter(to, from, next) {
                // console.log(to, from, next);
                next();
            },
            meta: {
                title: 'msg',
            },
        }, {
            path: '2021/0325/03',
            props: route => {
                return {
                    id: route.query.id,
                }
            },

            component: () =>
                import ('../views/2021/0325/S03.vue'),

        }, {
            path: '2021/0325/03/:id',
            // 将路由上的参数传到组件的props属性中
            props: true,
            component: () =>
                import ('../views/2021/0325/S03.vue'),

        }, {
            path: '2021/0325/02',
            alias: '/liebiao',
            // component: MyMenu,
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
            // 重定向可以传递对象值
            redirect: {
                // name: '编程式导航',
                //  / 开头 那么就从根路由开启导航
                path: '/homework/2021/0324',
                params: {
                    name: '123',
                }
            }
        },
        {
            path: '2021/0324/:name',
            name: '编程式导航',
            component: () =>
                import ('../views/2021/0324/Dynamic.vue'),
        },
        {
            path: '2021/0324',
            component: () =>
                import ('../views/2021/0324/Dynamic.vue'),
        },
        {
            path: '2021/0324class',
            components: {
                // 命名视图为多个时 component + s 
                default: () =>
                    import ('../views/2021/0324/index.vue'),
                header: () =>
                    import ('../views/2021/0324/index.vue'),
                footer: () =>
                    import ('../views/2021/0324/index.vue'),
            },
        }
    ]
}];

const router = new VueRouter({
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 记录了当前浏览器的滚动位置
        // savedPosition, 
        // x 横向滚动
        // y 竖向滚动
        to,
        from,
        savedPosition;
        return {
            x: 0,
            y: 0,
        }
    }
});

const flag = true;

// 全局前置守卫
// 使用守卫时，需要先实例化
router.beforeEach((to, from, next) => {
    // 这个方法是路由继续执行的方法 
    // 如果不执行这个方法 路由定向就会停止 就不会显示页面
    // next();

    if (flag) {
        next();
    } else {
        if (to.path == '/homework') {
            // 去的路由和来的路由相同时
            next();
        } else {
            next(from.path);
        }
    }
});

// router.afterEach((to, from) => {
//     // console.log(to);
//     // console.log(from);
// })

export default router;