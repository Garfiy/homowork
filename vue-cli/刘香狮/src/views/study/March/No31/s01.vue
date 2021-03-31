<template>
  <div>
    <div>
      <h1>初次方法</h1>
      <p>{{$store.state.count}}</p>
      <!-- 不使用第一种 -->
      <el-button @click="$store.state.count++">添加</el-button>
      <!-- 调用vuex中的方法 不能直接调用  -->
      <!-- 需要使用 commit方法去调用 mutations中的方法-->
      <!-- commit的参数参数为 -->
      <!-- 第一个参数是 调用的方法名 字符串形式 -->
      <!-- 第二个参数是 可以自定义的实参 (可以是任意的数据类型)  -->
      <!-- 只支持两个参数  -->
      <p>打印 this 和所有参数 和store(仓库)的参数</p>
      <el-button @click="$store.commit('add',2)">添加</el-button>
    </div>
    <div>
      <h1>引用一</h1>
      <h4>名字:{{$store.state.name}}</h4>
      <h4>年龄:{{$store.state.age}}</h4>
      <h4>性别:{{$store.state.sex}}</h4>
      <h1>引用二</h1>
      <h4>名字:{{name}}</h4>
      <h4>年龄:{{age}}</h4>
      <h4>性别:{{sex}}</h4>
      <el-input v-model="age"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  // 计算属性
  // 监听仓库内的值
  computed: {
    name() {
      return this.$store.state.name;
    },
    sex() {
      return this.$store.state.sex;
    },
    age: {
      // 声明属性的取值方法
      get() {
        //   返回对应的值
        return this.$store.state.age;
      },
      //   声明属性的赋值方法
      set(val) {
        //   调用仓库内的修改方法
        this.$store.commit("setAge", val);
      },
    },
  },
};
</script>