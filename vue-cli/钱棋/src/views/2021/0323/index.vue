// 这里是编写html模板结构的
<template>
  <!-- 保持template这个标签内部只有一个标签 -->
  <div>
    <p v-text="text"></p>
    速度 : <input type="text" v-model="speed" @keyup="onKeyup" />
    <button @click="onClickStart">开始</button>
    <button @click="onClickEnd">停止</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      speed: 100,
      flag: true,
      text:
        "《春晓》 作者：孟浩然 春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
    };
  },
  methods: {
    onClickStart: function () {
      if (this.flag) {
        this.flag = false;
        this.time = setInterval(() => {
          let str = this.text.substr(0, 1);
          this.text = this.text.substr(1) + str;
        }, this.speed);
      }
    },
    onClickEnd: function () {
      clearTimeout(this.time);
      this.flag = true;
    },
    onKeyup: function () {
      this.speed = Number(this.speed);
      if (Number.isNaN(this.speed)) {
        this.speed = 100;
      }
      clearTimeout(this.time);
      this.flag = true;
      this.onClickStart();
    },
  },
};
</script>
