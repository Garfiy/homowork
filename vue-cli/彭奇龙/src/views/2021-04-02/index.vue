<template>
  <div class="wrap">
    <!-- 播放器主体区域 -->
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <img src="@/assets/player_title.png" alt="" />
        <!-- 搜索歌曲 -->
        <input
          type="text"
          autocomplete="off"
          v-model="query"
          @keyup.enter="searchMusic"
        />
      </div>
      <div class="center_con">
        <!-- 搜索歌曲列表 -->
        <div class="song_wrapper">
          <ul class="song_list">
            <li v-for="item in musicList" :key="item.id">
              <a href="javascript:;" @click="playMusic(item.id)"></a>
              <b>{{ item.name }}</b>
              <span v-if="item.mvid != 0" @click="playMV(item.mvid)"
                ><i></i
              ></span>
            </li>
          </ul>
          <img src="@/assets/line03.png" class="switch_btn" alt="" />
        </div>
        <!-- 歌曲信息容器 -->
        <div class="player_con" :class="{ playing: isPlaying }">
          <img src="@/assets/player_bar.png" class="play_bar" />
          <!-- 黑胶碟片 -->
          <img src="@/assets/disc.png" class="disc autoRotate" />
          <img :src="musicCover" class="cover autoRotate" />
        </div>
        <!-- 评论容器 -->
        <div class="comment_wrapper">
          <h5 class="title">热门留言</h5>
          <div class="comment_list">
            <dl v-for="(item, i) in hotComments" :key="i">
              <dt><img :src="item.user.avatarUrl" alt="" /></dt>
              <dd class="name">{{ item.nickname }}</dd>
              <dd class="detail">
                {{ item.content }}
              </dd>
            </dl>
          </div>
          <img src="@/assets/line03.png" class="right_line" />
        </div>
      </div>
      <div class="audio_con">
        <audio
          ref="audio"
          @play="play"
          @pause="pause"
          :src="musicUrl"
          controls
          autoplay
          loop
          class="myaudio"
        ></audio>
      </div>
      <div class="video_con" v-show="isShow" style="display: none">
        <video :src="mvUrl" controls="controls" autoplay ref="video"></video>
        <div class="mask" @click="hide"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.baseUrl = this.$axios.default.baseUrl;
    this.$axios.defaults.baseURL = "https://autumnfish.cn/";
  },
  destroyed() {
    this.$axios.defaults.baseURL = this.baseUrl;
  },
  data() {
    return {
      baseUrl: "",
      query: "",
      musicList: [],
      isPlaying: false,
      musicCover: "",
      hotComments: [],
      isShow: false,
      musicUrl: "",
      mvUrl: "",
      controls: true,
    };
  },
  methods: {
    searchMusic: function () {
      if (!this.query.trim()) {
        this.$alert("请输入歌曲关键词", "错误提示", {
          confirmButtonText: "确定",
        });
        return;
      }
      this.$axios.get("search?keywords=" + this.query).then((val) => {
        // console.log(val);
        if (val.code == 200) {
          val = val.result;
          this.musicList = val.songs;
        } else {
          this.$alert("请输入歌曲关键词", "错误提示", {
            confirmButtonText: "确定",
          });
        }
      });
    },
    playMusic: function (id) {
      if (id) {
        this.$axios.get("song/url?id=" + id).then((val) => {
          if (val.code == 200) {
            if (val.data && val.data[0]) {
              val = val.data[0];
              if (val.url) {
                this.musicUrl = val.url;
              }
            }
          }
        });
        this.$axios.get("song/detail?ids=" + id).then((val) => {
          // console.log(val);
          if (val.code == 200) {
            if (
              val.songs &&
              val.songs[0] &&
              val.songs[0].al &&
              val.songs[0].al.picUrl
            ) {
              let url = val.songs[0].al.picUrl;
              this.musicCover = url;
            }
          }
        });

        this.$axios.get("comment/hot?type=0&id=" + id).then((val) => {
          console.log(val);
          if (val.code == 200) {
            if (val.hotComments && val.hotComments[0]) {
              this.hotComments = val.hotComments;
            }
            if (val.totComments && val.totComments[0]) {
              this.hotComments.unshift(val.topComments);
            }
          }
        });
      }
    },
    playMV: function (id) {
      this.$axios.get("mv/url?id=" + id).then((val) => {
        if (val.code == 200) {
          if (val.data && val.data.url) {
            this.isShow = true;
            this.mvUrl = val.data.url;
          }
        }
      });
      this.isPlaying = false;
      this.$refs.audio.pause();
    },
    play: function () {
      // console.log(111);
      this.isPlaying = true;
      // console.log();
    },
    pause: function () {
      this.isPlaying = false;
    },
    hide: function () {
      this.isShow = false;
       this.$refs.video.pause();
    },
  },
};
</script>
<style scoped src="@/assets/css/index2.css"></style>