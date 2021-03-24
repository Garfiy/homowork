// 这里是编写html模板结构的
<template>
<!-- 保持template这个标签只有一个标签 -->
   <div id="app">
        <p v-text="msg"></p>
        速度 : <input type="msg" @keyup="keyup" v-model="speed">
        <button @click="itme1">开始</button>
        <button @click="itme2">停止</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            speed: 100,
            flag: true,
            msg: '《春晓》 作者：孟浩然 春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
            msg1: ''
        }
    },
    methods: {
        itme1: function () {
            if (this.flag) {
                this.flag = false;
                this.itme = setInterval(() => {
                    this.msg1 = this.msg.substr(0, 1);
                    this.msg = this.msg.substr(1) + this.msg1;
                }, this.speed);
            }
        },
        itme2: function () {
            clearInterval(this.itme);
            this.flag = true;
        },
        keyup: function () {
            if (!this.flag) {
                clearInterval(this.itme);
                this.flag = true;
                this.itme1();
            }
        }
    }
}
</script>