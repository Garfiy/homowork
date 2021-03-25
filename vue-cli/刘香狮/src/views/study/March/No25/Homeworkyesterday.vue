<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input v-model="value1" placeholder="请输入内容" @change="onKeyEnent"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="value2" placeholder="请选择" @change="sum">
          <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-input v-model="value3" placeholder="请输入内容" ref="input2"  @change="onkeyEneter"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button @click="sum">=</el-button>
      </el-col>
      <el-col :span="7">
        <span class="result">{{result}}</span>
      </el-col>
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
        this.result = eval(this.value1 + this.value2 + this.value3);
      }
    },
    onKeyEnent(){
        this.$refs.input2.focus();
    },
    onkeyEneter(){
        this.sum()
    }
  },
};
</script>
<style lang="less">
.result {
  line-height: 40px;
}
</style>