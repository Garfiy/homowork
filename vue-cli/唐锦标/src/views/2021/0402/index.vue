<template>
  <div class="wrap">
    <!-- 播放器主体区域 -->
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <img src="@/assets/images/player_title.png" alt="" />
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
          <img src="@/assets/images/line.png" class="switch_btn" alt="" />
        </div>
        <!-- 歌曲信息容器 -->
        <div class="player_con" :class="{ playing: isPlaying }">
          <img src="@/assets/images/player_bar.png" class="play_bar" />
          <!-- 黑胶碟片 -->
          <img src="@/assets/images/disc.png" class="disc autoRotate" />
          <img :src="musicCover" class="cover autoRotate" />
        </div>
        <!-- 评论容器 -->
        <div class="comment_wrapper">
          <h5 class="title">热门留言</h5>
          <div class="comment_list">
            <dl v-for="(item, index) in hotComments" :key="index">
              <dt><img :src="item.user.avatarUrl" alt="" /></dt>
              <dd class="name">{{ item.nickname }}</dd>
              <dd class="detail">
                {{ item.content }}
              </dd>
            </dl>
          </div>
          <img src="@/assets/images/line.png" class="right_line" />
        </div>
      </div>
      <div class="audio_con">
        <audio ref="audio" @play="play"  @pause="pause" :src="musicUrl" controls autoplay loop class="myaudio" ></audio>
      </div>
      <div class="video_con" v-show="isShow" style="display: none">
        <video ref="video" @play="play" @pause="pause" :src="mvUrl" controls="controls" autoplay ></video>
        <div class="mask" @click="hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
      isShow: "",
      musicCover: "",
      musicUrl: "",
      mvUrl: "",
      isPlaying: false,
      musicList: [],
      hotComments: [],
    };
  },
  methods: {
    searchMusic: function () {
      axios
        .get("https://autumnfish.cn/search?keywords=" + this.query)
        .then((val) => {
          this.musicList = val.data.result.songs;
        });
    },
    playMusic: function (id) {
      axios.get("https://autumnfish.cn/song/url?id=" + id).then((val) => {
        this.musicUrl = val.data.data[0].url;
      });
      axios
        .get("https://autumnfish.cn/comment/hot?type=0&id=" + id)
        .then((val) => {
          this.hotComments = val.data.hotComments;
        });
    },
    playMV: function (id) {
      axios.get("https://autumnfish.cn/mv/url?id=" + id).then((val) => {
        this.isShow = true;
        this.mvUrl = val.data.data.url;
        this.$refs.audio.pause()
        this.$refs.video.play()
      });
    },
    hide: function () {
        this.isShow = false;
        this.$refs.video.pause()
        this.$refs.audio.play()
    },
    play: function () {
        this.isPlaying = true;
    },
    pause: function () {
        this.isPlaying = false;
    }
  },
};
</script>

<style>
@import "../../../assets/css/indexs.css";
</style>