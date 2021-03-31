import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    //状态值
    state: {
        count: 0,
        name:'Mr.Lee',
        age: '20',
        sex: '男',
    },
    //修改状态
    mutations: {
        
        add(state) {
            console.log(this);
            state.count++
        }
    }
});