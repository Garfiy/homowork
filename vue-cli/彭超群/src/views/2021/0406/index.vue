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
            ref="audio"
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
      search: "", //搜索
      songs: [], //音乐列表
      audioUrl: "", //音频地址
      musicCover: "", //音频图片
      playAudio: "", //控制音频播放时的操作
      hotComments: [], //留言
      videoUrl: "", //视频地址
      playVideo: "", //控制视频播放时的操作
      playAudioNum: 0, //判断音频是否是第一次播放
      playVideoNum: 0, //判断视频是否是第一次播放
      baseUrl: "", //保存一份其他项目的请求地址
      audioId: null, //判断是否播放同一首音乐
      videoId: null, //判断是否播放同一个视频
      flag: false, //判断播放视频前音乐是否在播放
    };
  },
  created() {
    this.baseUrl = this.$axios.defaults.baseURL;
    this.$axios.defaults.baseURL = "https://autumnfish.cn/";
    window.addEventListener('keyup',(e)=>{
      if (e.code == 'Escape') {
        this.playVideo=false;
      }
    });
  },
  destroyed() {
    this.$axios.defaults.baseURL = this.baseUrl;
  },
  methods: {
    onKeyupEnterSearch() {
      //搜索歌曲
      if (this.search.trim() != "") {
        this.$axios.get("search?keywords=" + this.search).then((res) => {
          if (res.data.code == 200) {
            let data = res.data.result.songs;
            this.songs = data;
          }
        });
      }
    },
    onClickPlayAudio(id) {
      if (this.audioId != id) {
        //播放音乐
        this.$axios.get("song/url?id=" + id).then((res) => {
          //获取url
          if (res.data.code == 200) {
            let url = res.data.data[0].url;
            this.audioUrl = url;
            console.log(this.audioUrl);
          }
        });
        this.$axios.get("song/detail?ids=" + id).then((res) => {
          //获取详情
          if (res.data.code == 200) {
            let data = res.data.songs[0];
            this.musicCover = data.al.picUrl;
          }
        });
        this.$axios.get("comment/hot?type=0&id=" + id).then((res) => {
          //获取热门评论
          if (res.data.code == 200) {
            console.log(res);
            this.hotComments = res.data.hotComments;
          }
        });
      }
      if (this.playAudioNum != 0) {
        if (this.playAudio == true) {
          this.playAudio = false;
        } else {
          this.playAudio = true;
        }

        if (this.playAudio == true) {
          this.$refs.audio.play();
        } else {
          this.$refs.audio.pause();
        }
      }
      this.playAudioNum = 1;
      this.audioId = id;
    },
    onClickMv(id) {
      this.flag = this.playAudio;
      //播放视频
      if (this.videoId != id) {
        this.$axios.get("mv/url?id=" + id).then((res) => {
          if (res.data.code == 200) {
            //获取mv
            console.log(res);
            this.videoUrl = res.data.data.url;
            this.playVideo = true;
          }
        });
      } else {
        this.playVideo = true;
      }
      this.videoId = id;
    },
  },
  watch: {
    playVideo: function () {
      //监听视频播放的显示和隐藏
      if (this.playVideo == true) {
        if (this.playVideoNum != 0) {
          this.$refs.video.play(); //显示,播放
        }
        this.$refs.audio.pause(); //音乐不播放
        this.playVideoNum = 1;
      } else {
        this.$refs.video.pause(); //不显示,不播放
        if (this.flag == true) {
          this.$refs.audio.play(); //音乐播放
        }
      }
    },
  },
};
</script>


<style scoped>
/* 这样引入的样式不能作为局部样式 */
/* @import '~@/assets/css/index0406.css'; */
</style>

<!-- 这样引入的样式才能作为局部样式 -->
<style scoped src="../../../assets/css/index0406.css"></style>