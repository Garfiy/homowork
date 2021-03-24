<template>
    <div>
        <el-row>
            <el-col :span="3">
      <el-input type="text" v-model="onefirst " @keyup.enter="keyup1" placeholder="请输入内容" ></el-input>
      </el-col>
        <el-col :span="1">
        <el-select v-model="select" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        </el-col>
       <el-col :span="3">
      <el-input placeholder="请输入内容" type="text" class="input" v-model="twofirst " @keyup.enter="keyup2" ref="input2"></el-input>
      </el-col>
      <el-col :span="1">
         <el-button @click="onCcalculate">=</el-button>
      </el-col><span v-text="calculate" class="box"></span>
      </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            onefirst : '',
            select: '+',
            twofirst : '',
            calculate: '',
            options:[{
                value:'选择一',
                label:'+',
            },{
                value:'选择二',
                label:'-',
            },{
                value:'选择三',
                label:'*',
            },{
                value:'选择四',
                label:'/',
            }],
        }
    },
    methods: {
        keyup1: function() {
            this.$refs.input2.focus();
        },
        keyup2: function() {
            this.onCcalculate();
        },
        onCcalculate: function() {
            // 实现计算结果
            let type = this.select;
            let num1 = parseInt(this.onefirst );
            let num2 = parseInt(this.twofirst );

            let onCcalculate;
            switch (type) {
                case '+':
                    onCcalculate = num1 + num2;
                    break;
                case '-':
                    onCcalculate = num1 - num2;
                    break;
                case '*':
                    onCcalculate = num1 * num2;
                    break;
                case '/':
                    onCcalculate = num1 / num2;
                    break;
            }
            this.calculate = onCcalculate;
        }
    }
}
</script>

<style>
    .box{
        font-size:40px;
        color:green
    }
</style>