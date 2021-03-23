//这里是编写html模板结构的
<template>
  <!-- 保持template这个标签内容只有一个标签 -->
  <div>
    <h1 v-text="msg"></h1>
    <input type="text" v-model="speet" @keyup="onKeyupSpeet" />
    <button @click="onClickStart">开始</button
    ><button @click="onClickEnd">结束</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:
        "《春晓》作者：孟浩然 春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
      time: null,
      speet: 1000,
    };
  },
  methods: {
    onClickStart: function () {
      clearInterval(this.time);
      this.time = setInterval(() => {
        let str = this.msg.substr(0, 1);
        this.msg = this.msg.substr(1) + str;
      }, this.speet);
    },
    onClickEnd: function () {
      clearTimeout(this.time);
    },
    onKeyupSpeet: function () {
      if (/^\d+$/.test(this.speet)) {
        this.onClickStart();
      } else {
        this.speet = 1000;
        this.onClickStart();
      }
    }
  },
};
</script>