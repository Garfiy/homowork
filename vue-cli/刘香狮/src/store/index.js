import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // 状态值
    state:{
        count:5,
        name:'Mr',
        age:22,
        sex:'男'
    },
    // 修改状态

    // mutations中的方法 第一个参数固定为state
    mutations : {
        // 修改名字的方法
        setName(state,val){
            state.name=val
        },

        // 修改年龄的方法
        setAge(state,val){
            state.age=val;
        },
        // 增加计数器的方法
        add(state){
            console.log(this);
            console.log(arguments);
            console.log(state);
            state.count++;
        },
    }
});
