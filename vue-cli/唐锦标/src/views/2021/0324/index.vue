<template>
    <el-row>
        <el-col :span="6">
                <!-- <input type="text" v-model='num1' @keyup.enter.space="one"> -->
                <el-input v-model="num1" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="2">
            <el-select v-model="way" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-col>
         <el-col :span="6">
                <el-input v-model="num2" placeholder="请输入内容" @keyup.enter.space="two" ref="jjd"></el-input>
        </el-col>
        <el-col :span="2">
            <el-button type="primary" @click="equal">=</el-button>
        </el-col>
        <el-col :span="2">
            <span v-text="result" class="ss"></span>
        </el-col>
    </el-row>
</template>

<style lang="less">
    .ss{
        display: block;
        line-height: 39px;
        font-size: 38px;
        color:skyblue;
        font-weight: 700;
    }
</style>

<script>
export default {
    data() {
        return {
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
                way: '+',
                num1: 0,
                num2: 0,
                result: 0,
        }
    },
        methods: {
            equal: function () {
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
            one: function () {
                this.two();
            },
            two: function () {
                this.$refs.jjd.focus();
                this.equal();
            }

        }
}
</script>