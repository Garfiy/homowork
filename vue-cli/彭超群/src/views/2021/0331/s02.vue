<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <h2>{{ sexn }}</h2>
    <!-- el-input 标签的input方法中的第一个参数就是input标签的value值 -->
    <!-- 用mapState 不能用 v-model绑定   v-model 因为丢失计算属性set,get，改成事件-->
    <el-input :value="age" @input="setAge"></el-input>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  //状态名和模板差值名一样时,需要用数组形式
  //   computed: mapState(["name", "age"]),

  //状态名和模板差值名不一样时,需要用对象形式
  computed: mapState({
      //ES6的写法
      name:state=>state.name,
      age:state=>state.age,
      //状态名和模板差值名不一样   简写 sexn:'sex'
      sexn:'sex',
  }),
  methods: {
    setAge: function (value) {
      this.$store.commit("setAge", value);
    },
  },
};
</script>