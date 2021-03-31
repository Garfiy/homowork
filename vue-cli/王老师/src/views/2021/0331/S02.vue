<template>
  <span>
    <!-- <h1>{{ name }}</h1> -->
    <h1>{{ name2 }}</h1>
    <!-- el-input 标签的input方法中第一个参数就是input标签的value值 -->
    <!-- <el-input :value="name" @input="setName"></el-input> -->
  </span>
</template>

<script>
import { mapState } from "vuex";

export default {
  // 状态名(仓库中的属性名称) 和 模版插值名(当前脚本的属性名) 一样时，可以用数组形式
  //   computed: mapState(["name"]),
  // 如果状态名和模版插值名不一样时，需要用对象形式
  computed: {
    //  ... 表示 对象展开运算符
    ...mapState({
      //ES6的写法
      // name2: (state) => state.name,

      // ES6简写版
      name2: "name",

      // 普通函数的写法
      // name2: function (state) {
      //   return state.name;
      // },
    }),
  },
  methods: {
    setName: function (value) {
      this.$store.commit("setName", value);
    },
  },
};
</script>