<template>
     <div class="wrap">
    <!-- 播放器主体区域 -->
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <img src="./images/player_title.png" alt="" />
        <!-- 搜索歌曲 -->
        <input type="text" autocomplete="off" v-model="query" @keyup.enter="searchMusic" />
      </div>
      <div class="center_con">
        <!-- 搜索歌曲列表 -->
        <div class='song_wrapper'>
          <ul class="song_list">
            <li v-for="item in musicList" :key="item.id">
              <a href="javascript:;" @click="playMusic(item.id)"></a> 
              <b>{{ item.name }}</b> 
              <span v-if="item.mvid!=0" @click="playMV(item.mvid)"><i></i></span>
            </li>
          </ul>
          <img src="./images/line.png" class="switch_btn" alt="">
        </div>
        <!-- 歌曲信息容器 -->
        <div class="player_con" :class="{playing:isPlaying}">
          <img src="./images/player_bar.png" class="play_bar" />
          <!-- 黑胶碟片 -->
          <img src="./images/disc.png" class="disc autoRotate" />
          <img :src="musicCover" class="cover autoRotate" />
        </div>
        <!-- 评论容器 -->
        <div class="comment_wrapper">
          <h5 class='title'>热门留言</h5>
          <div class='comment_list'>
            <dl v-for="item in hotComments" :key="item.commentId">
              <dt><img :src="item.user.avatarUrl" alt=""></dt>
              <dd class="name">{{ item.nickname}}</dd>
              <dd class="detail">
                {{ item.content }}
              </dd>
            </dl>
          </div>
          <img src="./images/line.png" class="right_line">
        </div>
      </div>
      <div class="audio_con">
        <audio ref='audio' @play="play" @pause="pause" :src="musicUrl" controls autoplay loop class="myaudio"></audio>
      </div>
      <div class="video_con" v-show="isShow" style="display: none;">
        <video autoplay :src="mvUrl" controls="controls"></video>
        <div class="mask" @click="hide"></div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
    created() {
        this.baseURL= this.$axios.defaults.baseURL;
        this.$axios.defaults.baseURL="https://autumnfish.cn/"; 
    },
    destroyed() {
         this.$axios.defaults.baseURL=this.baseURL; 
    },
    data(){
        return{
            // 保存一份其他项目的请求地址
            baseUrl:'',
            query:"",
            musicList:[],
            isPlaying:false,
            musicCover:'',
            hotComments:[],
            musicUrl:"",
            isShow:false,
            mvUrl:"",
            controls:true,
        };
    },
    methods: {
        searchMusic(){
          console.log(111);
            //请求接口之前,对所需要的参数进行必要的判空处理
            if(!this.query.trim()){
                return;
            }
            this.$axios.get('search?keywords='+this.query).then((data)=>{
                console.log(data);
                if(data.code===200){
                    data=data.result;
                    this.musicList=data.songs;//歌曲列表
                }else{
                    this.$alert('请输入歌曲关键词','错误提示',{
                        confirmButtonText:'确定',
                    })
                }
            })
        },
        playMusic(id){
            if(id){
                this.$axios.get("song/url?id="+id).then((data)=>{
                    console.log(data);
                    if(data.code===200){
                        if(data.data&&data.data[0]){
                            data=data.data[0];
                            if(data.url){
                                this.musicUrl=data.url;
                            }
                        }
                    }
                });

                this.$axios.get('song/detail?ids='+id).then((data)=>{
                    console.log(data);
                    if(data.code===200){
                        if(
                            data.songs &&
                            data.songs[0] &&
                            data.songs[0].al &&
                            data.songs[0].al.picUrl
                        ){
                            //封面
                            let url=data.songs[0].al.picUrl;
                            this.musicCover=url;
                        }
                    }
                });
                
                this.$axios.get("comment/hot?type=0&id="+id).then((data)=>{
                    if(data.code==200){
                        console.log(data);
                        if(data.hotComments&&data.hotComments[0]){
                             this.hotComments=data.hotComments;
                             console.log(this.hotComments);
                        }
                       if(data.topComments&&data.topComments[0]){
                             this.hotComments.unshift(data.topComments);
                       }
                      
                    }
                })
            }
        },
        playMV(id){
             this.$axios.get("mv/url?id="+id).then((data)=>{
                 if(data.code===200){
                     if(data.data&&data.data.url){
                         this.mvUrl=data.data.url;
                         this.isShow=true;
                     }
                 }
             })
        },
        play(){
            this.isPlaying=true;
        },
        pause(){
            this.isPlaying=false;
        },
        hide(){
             this.isShow=false;
        },
    },
}
</script>

<style scoped>
/* 这样引用的样式不会变成局部样式 */
/* @import "./index.css"; */
</style>

  <!-- 这样引用进来的css才能作为局部样式使用 -->
<style scoped src="./index.css">
    
</style>