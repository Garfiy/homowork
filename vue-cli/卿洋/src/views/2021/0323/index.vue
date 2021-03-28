<template>
    <div>
         <h1>跑马灯效果</h1>
    <ol>
        <li>点击开始按钮就开始滚动</li>
        <li>点击停止按钮就停止滚动</li>
        <li>通过速度输入框：修改跑马灯的速度</li>
    </ol>
         <p v-text="text"></p>
        速度 : <input type="text" @keyup="keyup" v-model="speed">
        <button @click="result1">开始</button>
        <button @click="result2">停止</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            speed: 100,
            flag: true,
            text: '《春晓》 作者：孟浩然 春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
            text1: ''
        }
    }, 
    methods: {
            result1: function() {
                if (this.flag) {
                    this.flag = false;
                    this.itme = setInterval(() => {
                        this.text1 = this.text.substr(0, 1);
                        this.text = this.text.substr(1) + this.text1;
                    }, this.speed);
                }
            },
            result2: function() {
                clearInterval(this.itme);
                this.flag = true;
            },
            keyup: function() {
                if (!this.flag) {
                    clearInterval(this.itme);
                    this.flag = true;
                    this.itme1();
                }
            }
        }
}
</script>