import Vue from "vue";
import VueRouter from "vue-router";
import h0323 from "../views/homework/03-23";
import myMenu from "../views/mymenu.vue";

Vue.use(VueRouter);

// 解决编程式导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    // 根路由
    path: "/",
    // 路由重定向
    redirect: "/homework",
}, {
    // 路由地址
    path: '/homework',
    component: myMenu,
    children: [{
        // 子路由的路径可以写相对路径
        path: "2021/0323",
        component: h0323,
    }, {
        path: "2021/0324",
        // 懒加载的模式 需要显示的时候才加载
        component: () =>
            import ('../views/homework/03-24'),
    }, {
        path: "2021/0325",
        // 懒加载的模式 需要显示的时候才加载
        component: () =>
            import ('../views/homework/03-25'),
    }, {
        path: "2021/0326",
        // 懒加载的模式 需要显示的时候才加载
        component: () =>
            import ('../views/homework/03-26'),
    }, {
        path: "2021/0329",
        // 懒加载的模式 需要显示的时候才加载
        component: () =>
            import ('../views/homework/03-29'),
    }]
}, {
    path: '/study',
    component: myMenu,
    children: [{
            path: "2021/0329/01",
            component: () =>
                import ('../views/study/03-29/s02.vue')
        }, {
            path: "2021/0329/02",
            component: () =>
                import ('../views/study/03-29/s03.vue')
        }, {
            path: "2021/0329",
            component: () =>
                import ('../views/study/03-29/s01.vue')
        }, {
            path: '2021/0326/01',
            // 组件内置前置路由守卫
            beforeEnter: (to, from, next) => {
                next();
            },
            component: () =>
                import ('../views/study/03-26/s01.vue'),
            meta: {
                title: 'msg',
            }
        }, {
            path: "2021/0326",
            component: () =>
                import ('../views/study/03-26/zy03-25.vue')
        }, {
            path: "2021/0325/03",
            props: route => {
                return {
                    id: route.query.id
                }
            },
            component: () =>
                import ('../views/study/03-25/s03.vue')

        }, {
            path: "2021/0325/03/:id",
            // 将路由上参数传给组件到props属性中
            props: true,
            component: () =>
                import ('../views/study/03-25/s03.vue')

        }, {
            path: '2021/0325/02',
            // alias 取路由的别名
            alias: '/liebiao',
            redirect: () => {
                let falg = true;
                if (!falg) {
                    return '/homework/2021/0324';
                } else {
                    return '2021/0324class';
                }
            }
        }, {
            path: '2021/0325/01',
            // 重定向可以传递对象值
            redirect: {
                // name 为其他路由的name可以跳转
                // name: '编程导航',

                // path 有斜杠会从根路由开始
                // 无斜杠是从父级开始
                path: '/homework/2021/0324',
                params: {
                    name: '123'
                }
            }
        }, {
            path: '2021/0324/:name',
            name: '编程导航',
            component: () =>
                import ('../views/study/03-24/Dynamic.vue')
        }, {
            path: '2021/0324',
            component: () =>
                import ('../views/study/03-24/Dynamic.vue')
        }, {
            path: '2021/0324class',
            // 命名视图为多个时
            // component要加s
            components: {
                default: () =>
                    import ('../views/homework/03-24'),
                header: () =>
                    import ('../views/homework/03-24'),
                footer: () =>
                    import ('../views/homework/03-24')
            }
        },
        {
            path: '2021/0325',
            component: () =>
                import ('../views/study/03-25/yesterdayZy.vue')
        }
    ]
}];

const router = new VueRouter({
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 记录了当前浏览器当前的滚动位置
        //    return savedPosition
        // x:横向   y:竖向
        to,
        from,
        savedPosition
        return {
            x: 0,
            y: 0
        }
    }
});

const flag = true;
// 全局前置守卫
// 使用守卫时,需要先实例化
router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    // console.log(next);
    // 这个方法是路由继续执行的方法
    // 如果不执行这个方法,路由定向就会停止
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

// 全局后置守卫
// router.afterEach((to, from) => {
//     console.log(to);
//     console.log(from);
// })
export default router;