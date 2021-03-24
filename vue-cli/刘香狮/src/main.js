import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 映入ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
// 使用ui插件
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
