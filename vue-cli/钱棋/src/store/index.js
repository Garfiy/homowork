import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 状态值
  state: {
    count: 0,
    name: 'Mrs.Ting',
    age: '18',
    sex: '女'
  },
  // 修改状态
  // mutations中的方法~ 第一个参数固定是state
  mutations: {
    // 修改年龄
    setAge(state, value) {
      console.log(state, value);
      state.age = value;
    },
    setName(state, value) {
      state.name = value;
    },
    // 增加计数器
    add(state) {
      console.log(this);
      console.log(arguments);
      state.count++;
    }
  },
  // 接口异步请求,服务端请求数据
  actions: {},
  modules: {},
});
