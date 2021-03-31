import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // 状态值
    state: {
        count: 2,
        name: 'Mr.li',
        age: 20,
        sex: '女'
    },
    // 修改状态
    // nutations中的方法,第一个参数固定是state
    mutations: {
        // 修改年龄
        setAge(state, value) {
            state.age = value;
        },
        setName(state, value) {
            state.name = value
        },
        // 增加计数器
        add(state) {
            console.log(this);
            console.log(arguments);
            state.count++;
        },
    },
    // 
    actions: {},
    modules: {},
});