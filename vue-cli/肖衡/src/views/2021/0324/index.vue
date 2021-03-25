<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input v-model="input" placeholder="请输入内容" @change="onKeyUpEnter"></el-input>
      </el-col>

      <el-col :span="6">
        <el-select v-model="value" placeholder="请选择" @change="sum">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="6">
        <el-input v-model="input2" placeholder="请输入内容" ref="input2" @change="onKeyUpEnter2"></el-input>
      </el-col>

      <el-col :span="4">
        <el-button @click = "sum">=</el-button>
      </el-col>

      <el-col :span="2"><span class="jieguo">{{jieguo}}</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      input2: "",
      value: "+",
      options: ["+","-","*","/"],
      jieguo:"",
    };
  },
  methods:{
      sum(){
          if(this.input && this.input2 && this.value){
              //eval 将字符串当做脚本执行
              this.jieguo = eval(this.input + this.value + this.input2);
          }
      },
    onKeyUpEnter(){
        //$refs 可以绑定标签元素
        this.$refs.input2.focus();
    },
    onKeyUpEnter2(){
        this.sum();
    }
  }
};
</script>
<style>
    .jieguo {
        text-align: center;
        line-height: 40px;
    }
</style>

