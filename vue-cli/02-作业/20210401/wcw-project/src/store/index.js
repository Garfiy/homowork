import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 保存学生成绩数据
        infoList: [],
        // 保存用戶登录的账户密码
        userAccountInfo: {
            userName: '',
            account: '',
            password: '',
        }
    },
    mutations: {
        // 设置数据
        setInfoList(state, array) {
            state.infoList = array;
        },
        saveAccount(state, info) {
            state.userAccountInfo = info;
        }
    },
    actions: {},
    modules: {}
})