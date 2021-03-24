import Vue from 'vue'
import VueRouter from 'vue-router'
import r15416 from "../views"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '../views',
  },
  {
    path: '/views',
    component: r15416
  }
]

const router = new VueRouter({
  routes
})

export default router;