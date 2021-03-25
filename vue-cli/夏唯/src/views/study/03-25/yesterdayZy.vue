<template>
  <el-row>
    <el-col :span="6">
      <el-input
        v-model="value1"
        placeholder="请输入内容"
        @change="keyup1"
      ></el-input>
    </el-col>
    <el-col :span="3">
      <el-select v-model="value3" placeholder="请选择" @change="sum">
        <el-option
          v-for="item in options"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="6">
      <el-input
        v-model="value2"
        placeholder="请输入内容"
        @change="keyup2"
        ref="value2"
      ></el-input>
    </el-col>
    <el-col :span="3">
      <el-button @click="sum">=</el-button>
    </el-col>
    <el-col :span="6">
      <span v-text="sum1"></span> </el-col
  ></el-row>
</template>
<style lang="less">
</style>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
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
      value3: "+",
      sum1: "",
    };
  },
  methods: {
    keyup1: function () {
      // 实现切换输入框
      console.log(1);
      this.$refs.value2.focus();
    },
    keyup2: function () {
      // 实现计算结果
      console.log(2);
      this.sum();
    },
    sum: function () {
      // 实现计算结果
      if (this.value1 && this.value2 && this.value3) {
        console.log(123);
        this.sum1 = eval(this.value1 + this.value3 + this.value2);
      }
    },
  },
};
</script>