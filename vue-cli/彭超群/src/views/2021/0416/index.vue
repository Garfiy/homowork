<template>
  <div>
    <div
      class="box"
      @mouseover="onMouseover"
      @mousemove="onMousemove"
      @mouseout="onMouseout"
      ref="box"
    >
      <div class="x-box" v-show="show" ref="xbox"></div>
      <img src="../../../assets/img/sj1.jpg" alt="" />
    </div>
    <div class="d-box" v-show="show">
      <img src="../../../assets/img/sj2.png" alt="" class="d-img" ref="dimg" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onMouseover: function () {
      //鼠标经过
      this.show = true;
    },
    onMousemove: function (e) {
      //鼠标移动
      let maxX = this.$refs.box.clientWidth - this.$refs.xbox.clientWidth;
      let maxY = this.$refs.box.clientHeight - this.$refs.xbox.clientHeight;
      let moveX =
        e.pageX - this.$refs.box.offsetLeft - this.$refs.xbox.clientWidth / 2;
      let moveY =
        e.pageY - this.$refs.box.offsetTop - this.$refs.xbox.clientHeight / 2;
      if (moveX <= 0) {
        moveX = 0;
      } else if (moveX >= maxX) {
        moveX = maxX;
      }
      if (moveY <= 0) {
        moveY = 0;
      } else if (moveY >= maxY) {
        moveY = maxY;
      }
      this.$refs.xbox.style.left = moveX + "px";
      this.$refs.xbox.style.top = moveY + "px";
      this.$refs.dimg.style.left = -moveX * 2 + "px";
      this.$refs.dimg.style.top = -moveY * 2 + "px";
    },
    onMouseout: function () {
      //鼠标离开
      this.show = false;
    },
  },
};
</script>
<style scoped>
.box {
  position: absolute;
  left: 300px;
  top: 100px;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.d-box {
  position: absolute;
  left: 720px;
  top: 100px;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.x-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  background: url("~@/assets/img/dian.png");
}
.d-box .d-img {
  position: absolute;
  left: -100px;
  top: -100px;
  width: 800px;
  height: 800px;
}
</style>