<template>
  <div>
    <el-row>
      <el-col :span="4"
        ><el-input v-model="value1" placeholder="请输入内容" @change="onKeyupEnter"></el-input
      ></el-col>
      <el-col :span="3"
        ><el-select v-model="value2" placeholder="请选择" @change="sum">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="4"
        ><el-input v-model="value3" placeholder="请输入内容" ref="input2" @change="onKeyupEnter2"></el-input
      ></el-col>
      <el-col :span="1"><el-button @click="sum">=</el-button></el-col>
      <el-col :span="1" class="box"
        ><span>{{ result }}</span></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "+",
      value3: "",
      options: ["+", "-", "*", "/"],
      result: "",
    };
  },
  methods: {
    sum() {
      if (this.value1 && this.value2 && this.value3) {
        // eval 将字符串当作脚本执行
        this.result = eval(this.value1 + this.value2 + this.value3);
      }
    },
    onKeyupEnter(){
      this.$refs.input2.focus();
    },
    onKeyupEnter2(){
      this.sum();
    }
  },
};
</script>

<style>
.box {
  font-size: 18px;
  height: 30px;
  line-height: 40px;
  color: green;
}
</style>