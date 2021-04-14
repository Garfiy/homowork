import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

import axios from 'axios';
axios.interceptors.response.use(
    response => { // 该处为后端返回整个内容
        // console.log(response);
        // 该处可将后端数据取出，提前做一个处理
        if (response.status === 200) {
            return response.data // 该处将结果返回，下一步可用于前端页面渲染用
        } else {
            alert('该处异常');
            return Promise.reject('error')
        }
    }
)
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

document.title = '王老师';