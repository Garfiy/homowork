<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-col :span="4">
        <el-input
          type="text"
          v-model="add1"
          @keyup.enter.native="keyup1"
          placeholder="请输入第一个数值"
        ></el-input
      ></el-col>

      <el-col :span="2">
        <el-select name="" id="" v-model="type">
          <el-option
            v-for="(item, index) in typeArr"
            :key="index"
            :value="item.type"
          >
            {{ item.type }}
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-input
          type="text"
          class="input"
          v-model="add2"
          @keyup.enter.native="sum"
          ref="input2"
          placeholder="请输入第二个数值"
        />
      </el-col>

      <el-col :span="2">
        <el-button @click="sum">=</el-button>
      </el-col>
      <el-col :span="4">
        <el-alert class="sum" v-text="sum1"></el-alert>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: function () {
    return {
      type: "+",
      typeArr: [
        {
          type: "+",
        },
        {
          type: "-",
        },
        {
          type: "*",
        },
        {
          type: "/",
        },
      ],
      add1: null,
      add2: null,
      sum1: null,
    };
  },
  methods: {
    keyup1: function () {
      console.log(111);
      this.$refs.input2.focus();
    },
    sum: function () {
      let num1 = parseInt(this.add1);
      let num2 = parseInt(this.add2);
      let sum;
      if (num1 && num2) {
        switch (this.type) {
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
        this.sum1 = sum;
      }
    },
  },
};
</script>
<style scoped>
.sum {
  height: 40px;
}
</style>
