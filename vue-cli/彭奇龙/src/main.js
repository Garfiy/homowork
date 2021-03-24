import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
// new Vue({
//     el: '#app',
//     render: h => h(App)
// });

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");