<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <h2>{{ sex }}</h2>
    <h2>{{ test }}</h2>
    <el-input :value="age" @input="setAge"></el-input>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    test: function () {
      return "test";
    },
    //  如果要使用其他计算属性就要用到对象展开运算符
    ...mapState({
      name: "name",
      age: "age",
      sex: "sex",
    }),
  },
  methods: {
    setAge: function (value) {
      this.$store.commit("setAge", value);
    },
  },
};
</script>