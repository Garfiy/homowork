<template>
  <div class="wrap">
    <!-- 播放器主体区域 -->
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <img src="./images/player_title.png" alt="" />
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
          <img src="./images/line.png" class="switch_btn" alt="" />
        </div>
        <!-- 歌曲信息容器 -->
        <div class="player_con" :class="{ playing: isPlaying }">
          <img src="./images/player_bar.png" class="play_bar" />
          <!-- 黑胶碟片 -->
          <img src="./images/disc.png" class="disc autoRotate" />
          <img :src="musicCover" class="cover autoRotate" />
        </div>
        <!-- 评论容器 -->
        <div class="comment_wrapper">
          <h5 class="title">热门留言</h5>
          <div class="comment_list">
            <dl v-for="item in hotComments" :key="item.commentId">
              <dt><img :src="item.user.avatarUrl" alt="" /></dt>
              <dd class="name">{{ item.nickname }}</dd>
              <dd class="detail">
                {{ item.content }}
              </dd>
            </dl>
          </div>
          <img src="./images/line.png" class="right_line" />
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
        <video
          autoplay
          :src="mvUrl"
          controls="controls"
          @play="playVideo"
          @pause="pauseVideo"
          ref="video"
        ></video>
        <div class="mask" @click="hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.baseURL = this.$axios.defaults.baseURL;
    this.$axios.defaults.baseURL = "https://autumnfish.cn/";
  },
  destroyed() {
    this.$axios.defaults.baseURL = this.baseURL;
  },
  data() {
    return {
      // 保存一份其他项目的请求地址
      baseUrl: "",
      query: "",
      musicList: [],
      isPlaying: false,
      musicCover: "",
      hotComments: [],
      musicUrl: "",
      isShow: false,
      mvUrl: "",
      controls: true,
    };
  },
  methods: {
    searchMusic() {
      //请求接口之前,对所需要的参数进行必要的判空处理
      if (!this.query.trim()) {
        return;
      }

      this.$axios.get("search?keywords=" + this.query).then((data) => {
        // console.log(data);
        if (data.data.code === 200) {
          data = data.data.result;
          this.musicList = data.songs; //歌曲列表
        } else {
          this.$alert("请输入歌曲关键词", "错误提示", {
            confirmButtonText: "确定",
          });
        }
      });
    },
    playMusic(id) {
      if (id) {
        this.$axios.get("song/url?id=" + id).then((data) => {
          // console.log(data);
          if (data.data.code === 200) {
            if (data.data.data && data.data.data[0]) {
              data = data.data.data[0];
              if (data.url) {
                this.musicUrl = data.url;
              }
            }
          }
        });

        this.$axios.get("song/detail?ids=" + id).then((data) => {
          // console.log(data);
          if (data.data.code === 200) {
            if (
              data.data.songs &&
              data.data.songs[0] &&
              data.data.songs[0].al &&
              data.data.songs[0].al.picUrl
            ) {
              //封面
              let url = data.data.songs[0].al.picUrl;
              this.musicCover = url;
            }
          }
        });
        this.$axios.get("comment/hot?type=0&id=" + id).then((data) => {
          if (data.data.code === 200) {
            if (data.data.hotComments && data.data.hotComments[0]) {
              this.hotComments = data.data.hotComments;
            }
            if (data.data.topComments && data.data.topComments[0]) {
              this.hotComments.unshift(data.data.topComments);
            }
          }
        });
      }
    },
    playMV(id) {
      // alert()
      this.$axios.get("mv/url?id=" + id).then((data) => {
        console.log(data);
        if (data.status === 200) {
          if (data.data && data.data.data.url) {
            this.mvUrl = data.data.data.url;
            this.isShow = true;
            // 监听视频加载完成
            // this.$refs.video.
             // 由我们自己去播放视频
            this.$refs.video.play();
          }
        }
      });
    },

    // 当audio标签播放时触发
    play() {
      this.isPlaying = true;
    },

    // 当audio标签暂停时触发
    pause() {
      this.isPlaying = false;
    },

    // 当Video标签播放时触发
    playVideo() {
      let isPlay = !this.$refs.audio.paused;
      // 调用原生方法
      if (isPlay) {
        // 保存音频之前是否播放状态
        this.$refs.audio.w_old_paly = isPlay;
      }
      //调用原生方法，暂停标签的播放
      this.$refs.audio.pause();
    },

    // 当Video标签暂停时触发
    pauseVideo() {},

    // 隐藏视频播放页面的触发
    hide() {
      this.isShow = false;
      this.$refs.video.pause();

      //如果音频之前是播放的 那么根据需要播放
      if (this.$refs.audio.w_old_paly) {
        this.$refs.audio.play();
      }
    },
  },
};
</script>

<style scoped>
/* 这样引用的样式不会变成局部样式 */
/* @import "./index.css"; */
</style>

  <!-- 这样引用进来的css才能作为局部样式使用 -->
<style scoped src="./index.css"></style>