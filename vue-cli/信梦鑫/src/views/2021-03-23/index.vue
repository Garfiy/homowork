<template>
    <div>
        速度 : <input type="text" @keyup="keyup" v-model="speed">
        <button @click="start">开始</button>
        <button @click="end">停止</button>
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
            start: function() {
                if (this.flag) {
                    this.flag = false;
                    this.itme = setInterval(() => {
                        this.text1 = this.text.substr(0, 1);
                        this.text = this.text.substr(1) + this.text1;
                    }, this.speed);
                }
            },
            end: function() {
                clearInterval(this.itme);
                this.flag = true;
            },
            keyup: function() {
                if (!this.flag) {
                    clearInterval(this.itme);
                    this.flag = true;
                    this.start();
                }
            }
        }
}
</script>