<template>
  <el-row>
      <el-col :span="3">
          <el-input v-model="input1" placeholder="请输入内容" @keyup.enter="number1"></el-input>
      </el-col>
      <el-col :span="1">
           <el-select v-model="select" placeholder="请选择">
                <el-option  v-for="item in datas" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
      </el-col>
        <el-col :span="3">
          <el-input v-model="input2" placeholder="请输入内容" @keyup.enter="number2"></el-input>
      </el-col>
      <el-col :span="1">
            <el-button type="danger" plain  @click="result">=</el-button>
      </el-col>
      <el-col :span="1">
          <p v-text="texts"></p>
      </el-col>
  </el-row>
</template>
<script>
export default {
    data() {
        return {
                select: '+',
                datas: [{
                value: '+',
                label: '+'
                }, {
                value: '-',
                label: '-'
                }, {
                value: '*',
                label: '*'
                }, {
                value: '/',
                label: '/'
                }],
                input1: '',
                input2: '',
                texts: '',
        }
  },
    methods: {
                number1: function() {
                    this.$refs.inputs.focus();
                },
                number2: function() {
                    this.result();
                },
                result: function() {
                    var result;
                    var sum = this.select;
                    var num1 = parseInt(this.input1);
                    var num2 = parseInt(this.input2);
                    switch (sum) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case '*':
                            result = num1 * num2;
                            break;
                        case '/':
                            result = num1 / num2;
                            break;
                    }
                    this.texts = result;
                }
            }
}
</script>