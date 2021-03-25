<template>
  <div>
    <div>
      <el-button>默认点击</el-button>
      <router-view />
    </div>
    <h2 v-text="msg"></h2>
    速度:
    <input type="text" v-model="delay" @keyup="onChangeInputSpeed" />
    <button @click="onClickBegin">开始</button>
    <button @click="onClicKstop">停止</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:
        "《春晓》 作者：孟浩然 春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
      intervalId: null,
      delay: 100,
    };
  },
  methods: {
    onClickBegin: function () {
      this.intervalId = setInterval(() => {
        let start = this.msg.substr(0, 1);
        let end = this.msg.substr(1);
        this.msg = end + start;
      }, this.delay);
    },
    onClicKstop: function () {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    onChangeInputSpeed: function () {
      this.onClicKstop();
      this.onClickBegin();
    },
  },
};
</script>