import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

//导入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//使用element
Vue.use(ElementUI);
//是否在控制台提示vue引入
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");