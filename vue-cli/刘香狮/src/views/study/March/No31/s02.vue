<template>
  <div>
    <h2>mapstate 的显示 和修改值</h2>
    <!-- <h4>{{name}}</h4> -->

    <!-- <el-input :value="name" @input="setName"></el-input> -->
    <h2>mapstate 的显示 和修改值 状态名和插值不一样时</h2>

    <h4>{{name2}}</h4>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  // 状态名(仓库内的属性名) 和 模板插值(当前脚本的属性名)一致时 可以使用数组形式
  // computed:mapState(['name']),

  computed: {

    //   ... 表示 对象展开运算符
    ...mapState({
      // es6 方法
      // name2: store => store.name,

      // se6 简写
      name2: "name",

      // 普通函数
      // name2:function(state){
      //     return state.name
      // }
    }),
  },

  methods: {
    setName: function (val) {
      this.$store.commit("setName", val);
    },
  },
};
</script>