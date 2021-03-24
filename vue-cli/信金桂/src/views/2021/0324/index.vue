<template>
    <div>
       <h1>实现简单的计算器功能</h1>
        <ol>
            <li>用vue框架实现一下功能</li>
            <li>计算两个输入框中的值的结果</li>
            <li>通过切换按钮实现加减乘除运算</li>
            <li>输入完第一个值时,按回车键自动切换到第二个参数</li>
            <li>输入完第二个值时,按回车键直接显示当前的计算结果</li>
        </ol>
        <el-row>
            <el-col :span="2">
       <el-input v-model="num1" placeholder="请输入内容" @keyup.enter.space="one"></el-input>
       
        <!-- <input type="text" v-model='num1' @keyup.enter.space="one"> -->
       </el-col>
      <el-col :span="1">

 <el-select v-model="value" placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
    </el-col>
  
     <el-col :span="2">
          <el-input v-model="num2" placeholder="请输入内容" @keyup.enter.space="two" ref="jjd"></el-input>
        <!-- <input type="text" v-model='num2' @keyup.enter.space="two" ref="jjd"> -->
         </el-col>
        <el-button type="info" @click="equal">=</el-button>
        <!-- <button @click="equal">=</button> -->
        <span v-text="result"></span>

         </el-row>
    </div>
</template>

<script>
export default {
     data:function() {
            return{
                num1: '',
                num2: '',
                way: '+',
                result: 0,
                // input:'',
                // input2:'',
                options: [{
                value: '+',
                label: '+'
                }, {
                value: '-',
                label: '-'
                }, {
                value: '/',
                label: '/'
                }, {
                value: '*',
                label: '*'
                }, ],
                value: ''
                }
                },
            methods: {
                equal: function() {
                    if (this.way == '+') {
                        this.result = parseInt(this.num1) + parseInt(this.num2);
                    } else if (this.way == '-') {
                        this.result = this.num1 - this.num2;
                    } else if (this.way == '*') {
                        this.result = this.num1 * this.num2;
                    } else if (this.way == '/') {
                        this.result = this.num1 / this.num2;
                    }
                },
                one: function() {
                    this.$refs.jjd.focus();
                },
                two: function() {
                    this.equal();
                }

            }
}
</script>