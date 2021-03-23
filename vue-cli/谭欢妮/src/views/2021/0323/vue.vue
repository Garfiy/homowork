<template>
  <div>
    <p v-text="box"></p>
    速度 : <input type="box" @keyup="keyup" v-model="speed" />
    <button @click="arr1">开始</button>
    <button @click="arr2">停止</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      speed: 100,
      flag: true,
      box:
        "《春晓》 作者：孟浩然 春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
      box1: "",
    };
  },
  methods: {
    arr1: function () {
      if (this.flag) {
        this.flag = false;
        this.arr = setInterval(() => {
          this.box1 = this.box.substr(0, 1);
          this.box = this.box.substr(1) + this.box1;
        }, this.speed);
      }
    },
    arr2: function () {
      clearInterval(this.arr);
      this.flag = true;
    },
    keyup: function () {
      if (!this.flag) {
        clearInterval(this.arr);
        this.flag = true;
        this.arr1();
      }
    },
  },
};
</script>