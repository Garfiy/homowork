import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./store/axios";
// 引入element-ui插件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
// 使用element-ui插件
Vue.use(ElementUI);

axios.interceptors.response.use(function(res) {
    if (res.status == 200) {
        return res.data;
    }
}, function(err) {
    console.log(err)
})
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");