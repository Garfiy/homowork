
<template>
  <div>
    <div class="box">
      <pic-zoom :url="imgUrl" :scale="3"></pic-zoom>
    </div>
    <div class="list">
      <ul>
        <li
          v-for="(item, index) in imagesList"
          :key="index"
          @mouseenter="changeImage(index)"
        >
          <img :src="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PicZoom from "vue-piczoom";

export default {
  name: "FooterShow",
  data() {
    return {
      imgUrl: require("@/assets/img/img.jpg"),
      // imgUrl(url) {
      //   return require("~@/assets/img/" + url);
      // },
      imagesList: [
        require("@/assets/img/img.jpg"),
        require("@/assets/img/img.jpg"),
        require("@/assets/img/img.jpg"),
      ],
    };
  },
  components: {
    PicZoom,
  },
  methods: {
    changeImage: function (index) {
      // this.imgUrl("img.jpg") = this.imagesList[index];
      this.imgUrl =this.imagesList[index]
    },
  },
};
</script>


  
<style scoped>
.box {
  width: 400px;
  height: 320px;
}
.list {
  width: 400px;
  height: 130px;
}
.list ul {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
.list ul li {
  width: 120px;
  height: 90px;
  background-color: white;
  margin-top: 15px;
}
.list ul li img {
  width: 120px;
  height: 90px;
}
</style>
