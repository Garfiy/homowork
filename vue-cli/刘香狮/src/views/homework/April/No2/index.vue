<template>
  <div>
    <div
      class="wrap"
      :style="bg"
      v-loading.fullscreen.lock="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, .4)"
    >
      <div class="player">
        <div class="top">
          <img :src="imgUrl('player_title.png')" alt="" />
          <el-input
            class="search el-icon-search"
            v-model="input"
            placeholder="请输入内容"
            @change="getlist"
          ></el-input>
        </div>
        <div class="content" :style="bg1">
          <div class="c-left">
            <ul ref="sele">
              <li
                v-for="(ietm, index) in leftList"
                :key="index"
                @click="getUrl(ietm.id, index)"
              >
                <i class="el-icon-video-play control"></i>
                <span class="text">{{ ietm.name }}</span>
                <i
                  class="el-icon-video-camera-solid mv"
                  v-show="ietm.mvid"
                  @click.stop="onGetMv(ietm.mvid)"
                ></i>
              </li>
            </ul>
            <img :src="imgUrl('line.png')" alt="" />
          </div>
          <div :class="{ 'c-center': active, 'c-center-play': !active }">
            <img
              :src="imgUrl('player_bar.png')"
              class="widget"
              ref="unit"
              alt=""
            />
            <img :src="imgUrl('disc.png')" class="disk" ref="whirl" alt="" />
            <img
              :src="imgSrc == '' ? imgUrl('cover.png') : imgSrc"
              class="poster"
              alt=""
            />
          </div>
          <div class="c-right">
            <img class="person" :src="imgUrl('line.png')" alt="" />
            <h5>热门留言</h5>
            <div class="message">
              <dl v-for="ietm in rightContentList" :key="ietm.id">
                <dt>
                  <img class="uesrinfo" :src="ietm.user.avatarUrl" alt="" />
                </dt>
                <dd class="name">{{ ietm.user.nickname }}</dd>
                <dd class="detail">{{ ietm.content }}}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="audio-con">
          <audio
            class="music-control"
            controls="controls"
            autoplay="autoplay"
            :src="msgUrl"
            ref="audio"
            @pause="stop"
            @play="play"
          ></audio>
        </div>
        <div class="video-con" v-show="flag">
          <video class="video-control" controls="controls" ref="video" :src="mvSrc"></video>
          <div class="coverage" @click="onEsc"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 请求路径
      url: "https://autumnfish.cn/",
      // 大盒子背景
      bg: {
        backgroundImage: "url(" + this.imgUrl("bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      bg1: {
        backgroundColor: "rgba(255,255,255,.5)",
      },
      // 输入框内容
      input: "",
      //   左侧数据
      leftList: [],
      //   右侧内容
      rightContentList: [],
      // 右侧用户头像
      rightUserSrc: "",
      loading: false,
      // 歌曲路径
      msgUrl: "",
      //图片路径
      imgSrc: "",
      // Mv路径
      mvSrc: "",
      flag: false,
      active: true,
    };
  },
  methods: {
    //   绑定图片路径
    imgUrl(url) {
      return require("@/assets/4-2/" + url);
    },
    onEsc() {
      this.flag = !this.flag;
      this.$refs.video.pause();
    },
    // 音乐暂停
    stop() {
      this.active = true;
    },
    play() {
      this.active = false;
    },
    getlist() {
      this.loading = true;
      // 获取数据
      this.axios.get(this.url + "search?keywords=" + this.input).then((res) => {
        if (res.code === 200) {
          this.loading = false;
          this.input = "";
          this.leftList = res.result.songs;
        }
      });
    },
    onGetMv(mv) {
      this.flag = !this.flag;
      this.$refs.audio.pause();
      // 获取mv
      this.axios.get(this.url + "mv/url?id=" + mv).then((res) => {
        if (res.code === 200) {
          this.mvSrc = res.data.url;
          console.log(this.mvSrc);
        }
      });
    },
    getUrl(ietm, index) {
      this.active = !this.active;
      for (var i = 0; i < this.$refs.sele.children.length; i++) {
        this.$refs.sele.children[i].children[0].style.color = "#333";
      }

      this.$refs.sele.children[index].children[0].style.color = "red";
      // 获取对应的地址链接
      this.axios.get(this.url + "song/url?id=" + ietm).then((res) => {
        if (res.code === 200) {
          this.msgUrl = res.data[0].url;
        }
      });

      // 获取歌曲图片
      this.axios.get(this.url + "song/detail?ids=" + ietm).then((res) => {
        if (res.code === 200) {
          this.imgSrc = res.songs[0].al.picUrl;
        }
      });
      // // 获取热门评论
      this.axios.get(this.url + "comment/hot?type=0&id=" + ietm).then((res) => {
        if (res.code === 200) {
          this.rightContentList = res.hotComments;
        }
      });
    },
  },
  deforeUpdate() {
    this.getlist();
  },
  // watch: {
  //   num: function (val) {
  //     console.log(val);
  //     if (val == 2) {
  //       this.$refs.whirl.style.animationPlayState = "running";
  //       console.log(this.$refs.unit);
  //       this.$refs.unit.style.transition = "all";
  //       this.$refs.unit.style.transform = "rotate(0)";
  //     }
  //   },
  // },
};
</script>


<style lang="less" scoped>
@keyframes whirl {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes slide {
  0% {
    transform: rotate(330deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes slide1 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(330deg);
  }
}
.wrap {
  position: relative;
  padding-top: 1px;
  width: 100%;
  height: 99vh;
}
.player {
  width: 800px;
  height: 544px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -400px;
  margin-top: -272px;
  .top {
    position: relative;
    width: 100%;
    height: 60px;
    background-color: #1eacda;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
    img {
      margin-left: 20px;
    }
    .search {
      margin-right: 20px;
      height: 40px;
      width: 300px;
      text-indent: 1em;
      outline: none;
    }
    .search:focus {
      border-color: #c0c4cc;
      outline: none;
    }
    .search::before {
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -10px;
      font-size: 20px;
    }
  }
  .content {
    position: relative;
    width: 100%;
    height: 435px;
    display: flex;
    .c-left {
      width: 200px;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      img {
        position: absolute;
        right: 0;
        top: 0;
      }
      ul::-webkit-scrollbar {
        display: none;
      }
      ul {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        li:nth-child(2n + 1) {
          background-color: rgba(255, 255, 255, 0.3);
        }
        li:hover .control {
          color: red;
        }
        li {
          position: relative;
          width: 100%;
          height: 40px;
          font-size: 12px;
          color: #333;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          box-sizing: border-box;
          padding-left: 10px;
          cursor: pointer;
          .text {
            padding-left: 10px;
            width: 120px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            box-sizing: border-box;
          }
          .red {
            font-size: 18px;
            color: red;
          }
          .control {
            font-size: 18px;
          }
          .mv {
            position: absolute;
            right: 10px;

            font-size: 16px;
          }
        }
      }
    }

    .c-center,
    .c-center-play {
      width: 400px;
      height: 435px;
      position: relative;
      .widget {
        transition: all;
        transform: rotate(330deg);
        transform-origin: left top;
        position: absolute;
        left: 200px;
        top: -0;
        z-index: 3;
        animation: slide1 1s linear forwards;
      }
      .disk {
        animation: whirl 5s linear infinite paused;
        width: 254px;
        height: 255px;
        margin-left: -127px;
        margin-top: -160px;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 2;
      }
      .poster {
        transform: scale(0.4);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -199px;
        margin-top: -232px;
        width: 398px;
        height: 399px;
      }
    }
    .c-center-play {
      .widget {
        animation: slide 1s linear forwards;
      }
      .disk {
        animation-play-state: running;
      }
    }
    .c-right {
      width: 200px;
      height: 435px;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      .person {
        position: absolute;
        left: 0;
        top: 0;
      }
      .message::-webkit-scrollbar {
        display: none;
      }
      .message {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        dl {
          padding: 10px 0 0 55px;
          margin-bottom: 20px;
          position: relative;
          dt {
            position: absolute;
            left: 4px;
            top: 10px;
          }
          dd {
            font-size: 12px;
          }
          .uesrinfo {
            width: 40px;
            height: 40px;
          }
          .name {
            font-weight: bold;
            color: #333;
            padding-top: 8px;
          }
          .detail {
            color: #888;
            margin-top: 5px;
            line-height: 18px;
          }
        }
      }
    }
  }
  .audio-con {
    position: relative;
    z-index: 10;
    width: 800px;
    height: 50px;
    background-color: #eee;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    .music-control {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
    }
  }
  .video-con {
    .video-control {
      width: 800px;
      height: 544px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-25%, -50.5%);
      z-index: 100;
      background-color: #000;
      outline: none;
    }
    .coverage {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 99vw;
      background: rgba(0, 0, 0, 0.7);
      z-index: 99;
    }
  }
}
</style>