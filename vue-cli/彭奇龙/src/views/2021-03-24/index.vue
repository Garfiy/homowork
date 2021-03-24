<template>
    <el-row>  
        <el-col :span="6">
          <el-input v-model="add1" placeholder="请输入内容" @keyup.enter="keyup1"></el-input>
        </el-col>
        <el-col :span="2">
            <el-select v-model="select" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-col>
        <el-col :span="6">
           <el-input v-model="add2" placeholder="请输入内容" @keyup.enter="keyup2"></el-input>
        </el-col>
        <el-col :span="1">
              <el-button type="primary" @click="sum">=</el-button>
        </el-col>
         <el-col :span="2">
             <span v-text="sum1" class="font-sum"></span>
        </el-col>
    </el-row>
</template>

<script>
export default {
     data() {
         return{
                  add1: '',
                select: '+',
                add2: '',
                sum1: '',
                options: [{
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
         }
          
            },
            methods: {
                keyup1: function() {
                    // 实现切换输入框
                    this.$refs.input2.focus();
                },
                keyup2: function() {
                    // 实现计算结果
                    this.sum();
                },
                sum: function() {
                    // 实现计算结果
                    let type = this.select;
                    let num1 = parseInt(this.add1);
                    let num2 = parseInt(this.add2);

                    let sum;
                    switch (type) {
                        case '+':
                            sum = num1 + num2;
                            break;
                        case '-':
                            sum = num1 - num2;
                            break;
                        case '*':
                            sum = num1 * num2;
                            break;
                        case '/':
                            sum = num1 / num2;
                            break;
                    }
                    this.sum1 = sum;
                }
            }
}
</script>

<style>
    .font-sum {
        line-height: 40px;
        color:hotpink;
        font-size: 36px;
        font-weight: 900;
    }
</style>