import Vue from "vue";
import VueRouter from "vue-router";
import H0323 from '../views/2021/0323';
import MyMenu from '../views/myMenu.vue';

Vue.use(VueRouter);

const routes = [{
    // 根路由
    path: '/',
    // 路由重定向
    redirect: '/homework',
}, {
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
        // 懒加载的模式  在需要显示的时候才加载
        // 普通函数
        // component: function() {
        //     return import ('../views/2021/0324/index.vue');
        // },
        // 箭头函数
        component: () =>
            import ('../views/2021/0324/index.vue'),
    },{
        path:'2021/0325',
        component: () =>
            import ('../views/2021/0325/index.vue'),
    },{
        path:'2021/0326',
        component: () =>
            import ('../views/2021/0326/index.vue'),
    },{
        path:'2021/0329',
        component: () =>
            import ('../views/2021/0329/index.vue'),
    },{
        path:'2021/0331',
        component: () =>
            import ('../views/2021/0331/index.vue'),
    },{
        path:'2021/0402',
        component: () =>
            import ('../views/2021/0402/index.vue'),
    }]
}, {
    // 学习的内容
    path: '/study',
    component: MyMenu,
    children: [{
        path:"2021/0331/01",
        component:()=>import("../views/2021/0331/s01.vue"),
    },{
        path:"2021/0331/02",
        component:()=>import("../views/2021/0331/s02.vue"),
    },{
        path:"2021/0329/01",
        component:()=>import("../views/2021/0329/s01.vue"),
    },
    // {
    //     path:"2021/0329/02",
    //     component:()=>import("../views/2021/0329/s02.vue"),
    // },
    // ,{
    //     path:"2021/0325/03",
    //     //将路由上参数传到组件的props属性中
    //     props: route => {
    //         return {
    //             id:route.query.id,
    //         }
    //     },
    //     component:() => 
    //     import("../views/2021/0325/X03.vue"),
    // },
    {
        path:"2021/0325/03/:id",
        //将路由上参数传到组件的props属性中
        props:true,
        component:() => 
        import("../views/2021/0325/X03.vue"),
    },{
        path:"2021/0325/02",
        alias:"liebiao",
        // component:MyMenu
        redirect:() => {
            let flag=true;
            if(flag){
                return "/homework/2021/0323"
            }else {
                return "2021/0324class"
            }
        }
    },{
        path:"2021/0325/01",
        redirect:{
            // name:"编程导航",
            // /开头  那么就从根路由开启导航
            path:"/homework/2021/0324",
            params:{
                name:"123",
            }
        }
    },{
        path: '2021/0324/:name',
        name: '编程导航',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue'),
    }, {
        path: '2021/0324',
        component: () =>
            import ('../views/2021/0324/Dynamic.vue'),
    }, {
        path: '2021/0324class',
        // 命名视图为多个时，
        // components 要加 s
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
    // mode:"history",
    routes,
    scrollBehavior(to,from,savedPosition){
        //记录当前浏览器的位置
        // return savedPosition
        // x 横向滚动   y 竖向滚动
        to,from,savedPosition
        return {
            x:0,
            y:0,
        }
    }
});
//全局前置守卫
//实例化的方法
let flag = true;
router.beforeEach((to,from,next)=> {
    // console.log(to);
    // console.log(from);
    // console.log(next);
    //这个方法是路由继续执行的方法
    //如果不执行这个方法路由定向就会停止
    // next();
    if(flag){
        next();
    }else {
        //去的路由和来的路由相同时
        if(to.path == "/homework"){
            next();
        }else{
            next(from.path)    
        }
    }
})

//全局后置守卫
// router.afterEach((to,from)=> {
    // console.log(to);
    // console.log(from);
// })
export default router;