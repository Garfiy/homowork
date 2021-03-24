<template>
  <div>
    <el-input
      v-model="input1"
      placeholder="请输入内容"
      @change="keyup1"
    ></el-input>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :value="item.value">
      </el-option>
    </el-select>
    <el-input
      v-model="input2"
      placeholder="请输入内容"
      @change="keyup2"
      ref="input2"
    ></el-input>
    <el-button @click="sum">=</el-button>
    <span v-text="sum1"></span>
  </div>
</template>
<style lang="less">
</style>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      options: [
        {
          value: "+",
        },
        {
          value: "-",
        },
        {
          value: "*",
        },
        {
          value: "/",
        },
      ],
      value: "+",
      sum1: "",
    };
  },
  methods: {
    keyup1: function () {
      // 实现切换输入框
      console.log(1);
      this.$refs.input2.focus();
    },
    keyup2: function () {
      // 实现计算结果
      console.log(2);
      this.sum();
    },
    sum: function () {
      // 实现计算结果
      let type = this.value;
      let num1 = parseInt(this.input1);
      let num2 = parseInt(this.input2);
      let sum;
      switch (type) {
        case "+":
          sum = num1 + num2;
          break;
        case "-":
          sum = num1 - num2;
          break;
        case "*":
          sum = num1 * num2;
          break;
        case "/":
          sum = num1 / num2;
          break;
      }
      console.log(this.sum1);
      this.sum1 = sum;
    },
  },
};
</script>