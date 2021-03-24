<template>
  <div>
    <h1 v-text="text"></h1>
    <input
      type="text"
      v-model="speed"
      @keyup.enter="onKeySetSpeed"
      @blur="onKeySetSpeed"
    />
    <button @click="onClickStart">开始</button>
    <button @click="onClickEnd">结束</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:
        "《春晓》作者：孟浩然 春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
      speed: 400,
      time: null,
    };
  },
  methods: {
    onClickStart() {
      clearInterval(this.time);
      this.time = setInterval(() => {
        let str = this.text.substr(0, 1);
        this.text = this.text.substr(1) + str;
      }, this.speed);
    },
    onClickEnd() {
      clearInterval(this.time);
    },
    onKeySetSpeed() {
      if (/^\d+$/.test(this.speed)) {
        this.onClickStart();
      } else {
        this.speed = 400;
        this.onClickStart();
      }
    },
  },
};
</script>