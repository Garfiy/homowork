import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.response.use(function(res) {
    if (res.status === 200) {
        var data = res.data;
        return data;
    } else {
        console.log('网络超时');
    }
}, function(err) {
    console.log(err)
})
Vue.prototype.$axios = axios

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')