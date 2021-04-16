<template>
  <div>
    <!-- 左边盒子图片 -->
    <div class="left">
      <img src="./img.jpg" alt="" class="leftImg" />
      <div class="shou"></div>
    </div>

    <div class="right">
      <img src="./img.jpg" alt="" class="rightImg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handOver() {
      // 计算小图框在浏览器中的位置
      this.imgObj = this.$el.getElementsByClassName("small-box")[0];
      this.imgRectNow = this.imgObj.getBoundingClientRect();
      this.showMagnifier = true;
      this.showMask = true;
    },

    handMove(e) {
  // 计算初始的遮罩左上角的坐标
  let objX = e.clientX - this.imgRectNow.left;
  let objY = e.clientY - this.imgRectNow.top;

  // 计算初始的遮罩左上角的坐标
  let maskX = objX - this.configs.maskWidth / 2;
  let maskY = objY - this.configs.maskHeight / 2;

  // 判断是否超出界限,并纠正
  maskY = maskY < 0 ? 0 : maskY; 
  maskX = maskX < 0 ? 0 : maskX; 
  if(maskY + this.configs.maskHeight >= this.imgRectNow.height) {
    maskY = this.imgRectNow.height - this.configs.maskHeight;
  }
  if(maskX + this.configs.maskWidth >= this.imgRectNow.width) {
    maskX = this.imgRectNow.width - this.configs.maskWidth;
  }

  // 遮罩移动
  this.transformMask = `translate(${maskX}px, ${maskY}px)`;

  // 背景图移动
  this.moveLeft = - maskX * this.configs.scale + "px";
  this.moveTop = - maskY * this.configs.scale + "px";
}
  },
};
</script>

<style>
.left {
  position: relative;
  width: 400px;
  margin: 150px 0;
  border: 1px solid red;
}
.shou {
  position: absolute;
  left: 50%;
  top: 0;
  width: 100px;
  height: 100px;
  background-color: #ccc;
  opacity: 0.5;
}
.leftImg {
  width: 100%;
}

.right {
  position: absolute;
  left: 700px;
  top: 0;
  border: 1px solid red;
}

.rightImg {
  width: 700px;
}
</style>