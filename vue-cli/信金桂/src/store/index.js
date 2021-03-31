import Vue from "vue";
import Vuex from "vuex";
import store from "./store";

Vue.use(Vuex);

export default new Vuex.Store({
    // 状态值
    state: {
        count: 0,
        name: 'xj',
        age: 20,
        sex: '女',
    },

    // 修改状态
    // mutations 中的方法，第一个参数固定是state
    mutations: {
        // 修改年龄 
        setAge(state, value) {
            state.age = value;
        },

        // 修改名字
        setName(state, value) {
            state.name = value;
        },

        // 增加计数器
        add(state) {
            state.count++;
            console.log(arguments);
            console.log(store);
        },
    },
    // actions: {},
    // modules: {},
});