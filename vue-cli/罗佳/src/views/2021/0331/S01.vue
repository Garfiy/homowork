<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <!-- 注意： -->
    <!-- 禁止直接修改store.state中的状态值 -->
    <!-- 直接修改状态值会导致不能在vueDevTool(vue开发工具)中监听数据改变的记录 -->
    <el-button @click="$store.state.count++">增加</el-button>
    <!-- 调用vuex中的方法时 不能直接调用 -->
    <!-- 需要使用 commit 方法去调用 mutations 中的方法 -->
    <!-- commit的参数规则 -->
    <!-- 第一个参数是：要调用的方法名的字符串 -->
    <!-- 第二个参数是：可以自定义的实参（可以是任意的数据类型） -->
    <!-- 只支持两个参数，不能传第三个参数 -->
    <el-button @click="$store.commit('add', [3, 2])">增加方法2</el-button>

    <h1>姓名：{{ $store.state.name }}</h1>
    <h1>年龄：{{ $store.state.age }}</h1>
    <h1>性别：{{ $store.state.sex }}</h1>

    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <h1>性别：{{ sex }}</h1>

    <el-input v-model="age"></el-input>
  </div>
</template>

<script>
export default {
  // 计算属性
  computed: {
    name: function () {
      return this.$store.state.name;
    },
    age: {
      //声明属性的取值方法
      get: function () {
        return this.$store.state.age;
      },
      //声明属性的赋值方法
      set: function (value) {
        this.$store.commit("setAge", value);
      },
    },
    sex: function () {
      return this.$store.state.sex;
    },
  },
};
</script>