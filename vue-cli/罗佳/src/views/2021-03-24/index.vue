<template>
  <el-row>
    <el-col :span='3'>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-col>
    <el-col :span='1'>
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span='3'>
      <el-input v-model="inputs" placeholder="请输入内容" @blur="onKeydownfeel"></el-input>
    </el-col>
    <el-col :span="1">
      <el-button size="small" @click="onClickResult">=</el-button>
    </el-col> 
    <el-col :span="2">
      <el-tag v-text="result"></el-tag>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "+",
        },
        {
          value: "-",
        },
        {
          value: "/",
        },
        {
          value: "*",
        },
      ],
      input:0,
      inputs:0,
      value: '+',
      result: 0,
    };
  },
  methods: {
    onClickResult:function(){
      this.result = eval(this.input + this.value + this.inputs);
    },
    onKeydownfeel:function(){
      console.log(10);
      this.onClickResult();
    }
  },
};
</script>