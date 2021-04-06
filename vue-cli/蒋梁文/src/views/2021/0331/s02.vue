<template>
  <div>
    <!-- <h1>{{name}}</h1> -->
    <h1>{{ name2 }}</h1>
    <!-- el-input标签的input方法第一个参数就是input标签的value值 -->
    <!-- <el-input :value="name" @input="setName"></el-input> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 状态名（仓库中的）和模板值名一样时，可以用数组形式
  // computed:mapState(['name']),
  // 如果状态名和模板值名不一样时，需要用对象形式
  computed: {
    //   ...表示对象展开运算符
    ...mapState({
      // Es6的写法
      // name2:(state)=>state.name,
      // 普通函数的写法
      // name2:function(state){
      //     return state.name;
      // },
      // es6简写版
      name2: "name",
    }),
  },
  methods: {
    setName: function (value) {
      this.$store.commit("setName", value);
    },
  },
};
</script>