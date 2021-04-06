import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$axios = axios

Vue.config.productionTip = false;
// 使用element
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");