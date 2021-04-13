<template>
  <div>
    <div class="wrap">
      <!-- 播放器主体区域 -->
      <div class="play_wrap" id="player">
        <div class="search_bar">
          <img src="../../../assets/img/player_title.png" alt="" />
          <!-- 搜索歌曲 -->
          <input
            type="text"
            v-model="search"
            @keyup.enter="onKeyupEnterSearch"
          />
        </div>
        <div class="center_con">
          <!-- 搜索歌曲列表 -->
          <div class="song_wrapper">
            <ul class="song_list">
              <li v-for="(k, i) in songs" :key="i">
                <a href="javascript:;" @click="onClickPlayAudio(k.id)"></a>
                <b>{{ k.name }}</b>
                <span v-show="k.mvid != 0" @click="onClickMv(k.mvid)"
                  ><i></i
                ></span>
              </li>
            </ul>
            <img src="../../../assets/img/line.png" class="switch_btn" alt="" />
          </div>
          <!-- 歌曲信息容器 -->
          <div class="player_con" :class="{ playing: playAudio }">
            <img src="../../../assets/img/player_bar.png" class="play_bar" />
            <!-- 黑胶碟片 -->
            <img src="../../../assets/img/disc.png" class="disc autoRotate" />
            <img :src="musicCover" class="cover autoRotate" />
          </div>
          <!-- 评论容器 -->
          <div class="comment_wrapper">
            <h5 class="title">热门留言</h5>
            <div class="comment_list">
              <dl v-for="(k, i) in hotComments" :key="i">
                <dt>
                  <img :src="k.user.avatarUrl" alt="" />
                </dt>
                <dd class="name">{{ k.user.nickname }}</dd>
                <dd class="detail">
                  {{ k.content }}
                </dd>
              </dl>
            </div>
            <img src="../../../assets/img/line.png" class="right_line" />
          </div>
        </div>
        <div class="audio_con">
          <audio
            class="myaudio"
            :src="audioUrl"
            controls="controls"
            autoplay="autoplay"
            loop="loop"
            @playing="playAudio = true"
            @pause="playAudio = false"
          ></audio>
        </div>
        <div class="video_con" style="display: none" v-show="playVideo">
          <video
            controls="controls"
            :src="videoUrl"
            autoplay="autoplay"
            loop="loop"
            @playing="playVideo = true"
            ref="video"
          ></video>
          <div class="mask" @click="playVideo = false"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*
    输入歌名后按回车键即可搜索
    1:歌曲搜索接口
      请求地址:https://autumnfish.cn/search
      请求方法:get
      请求参数:keywords(查询关键字)
      响应内容:歌曲搜索结果
      
    2:歌曲url获取接口
      请求地址:https://autumnfish.cn/song/url
      请求方法:get
      请求参数:id(歌曲id)
      响应内容:歌曲url地址

    3.歌曲详情获取
      请求地址:https://autumnfish.cn/song/detail
      请求方法:get
      请求参数:ids(歌曲id)
      响应内容:歌曲详情(包括封面信息)

    4.热门评论获取
      请求地址:https://autumnfish.cn/comment/hot?type=0
      请求方法:get
      请求参数:id(歌曲id,地址中的type固定为0)
      响应内容:歌曲的热门评论

    5.mv地址获取
      请求地址:https://autumnfish.cn/mv/url
      请求方法:get
      请求参数:id(mvid,为0表示没有mv)
      响应内容:mv的地址
  */
export default {
  data() {
    return {
      search: "",
      songs: [],
      audioUrl: "",
      musicCover: "",
      playAudio: "",
      hotComments: [],
      videoUrl: "",
      playVideo: "",
    };
  },
  methods: {
    onKeyupEnterSearch() {//搜索歌曲
      if (this.search.trim() != "") {
        this.$axios
          .get("https://autumnfish.cn/search?keywords=" + this.search)
          .then((res) => {
            if (res.data.code == 200) {
              let data = res.data.result.songs;
              this.songs = data;
              // console.log(this.songs);
            }
          });
      }
    },
    onClickPlayAudio(id) {
      this.$axios.get("https://autumnfish.cn/song/url?id=" + id).then((res) => {
        //获取url
        if (res.data.code == 200) {
          let url = res.data.data[0].url;
          this.audioUrl = url;
          console.log(this.audioUrl);
        }
      });
      this.$axios
        .get("https://autumnfish.cn/song/detail?ids=" + id)
        .then((res) => {
          //获取详情
          if (res.data.code == 200) {
            let data = res.data.songs[0];
            this.musicCover = data.al.picUrl;
          }
        });
      this.$axios
        .get("https://autumnfish.cn/comment/hot?type=0&id=" + id)
        .then((res) => {
          //获取热门评论
          if (res.data.code == 200) {
            console.log(res);
            this.hotComments = res.data.hotComments;
          }
        });
    },
    onClickMv(id) {
      this.$axios.get("https://autumnfish.cn/mv/url?id=" + id).then((res) => {
        if (res.data.code == 200) {
          //获取mv
          console.log(res);
          this.videoUrl = res.data.data.url;
          this.playVideo = true;
        }
      });
    },
  },
  watch: {
    playVideo: function () {
      console.log(this.playVideo);
      if (this.playVideo == true) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }
    },
  },
};
</script>
<style scoped lang="less">
    @import '~@/assets/css/index0406.css';
</style>