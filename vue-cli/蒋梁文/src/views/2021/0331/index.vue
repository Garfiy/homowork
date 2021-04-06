<template>
  <div>
    <el-row>
      <el-col class="image">
        <img src="../../../img/logo.png" alt="" />
      </el-col>
      <el-col :span="10">
        <el-input
          class="input"
          v-model="city"
          @keyup.enter="searchWeather()"
        ></el-input>
        <button class="button" @click="searchWeather()">搜索</button>
      </el-col>
      <el-col class="abox">
        <a href="#" @click="changeCith('北京')">北京</a>
        <a href="#" @click="changeCith('上海')">上海</a>
        <a href="#" @click="changeCith('广东')">广东</a>
        <a href="#" @click="changeCith('湖南')">湖南</a>
      </el-col>
    </el-row>
    <ul class="content">
      <li v-for="item in weatherList" :key="item.data">  <div class="info_type">
        <span>{{ item.type }}</span>
      </div>
      <div class="info_temp">
        <b>{{ item.low }}</b>
        <b>{{ item.high }}</b>
      </div>
      <div class="info_date">
        <span>{{ item.date }}</span>
      </div></li>
    </ul>
  </div>
</template>

<style lang="less">
.content{
    height:200px;
    text-align:center;
    margin-top:50px;
    font-size:0px;
}
.content li{
    display:inline-block;
    width:140px;
    height:200px;
    padding:0 10px;
    overflow: hidden;
    position: relative;
    // background:url('../img/line.png') right center no-repeat;
    background-size: 1px 130px;
}

.content li:last-child{
    background:none;
}

.info_date{
    width:100%;
    height:40px;
    line-height:40px;
    color:#999;
    font-size:14px;
    left:0px;    
    bottom:0px;    
    margin-top: 15px;
}
.info_date b{
    float: left;
    margin-left:15px;
}

.info_type span{
    color:#fda252;
    font-size:30px;
    line-height:80px;
}
.info_temp{
    font-size:14px;  
    color:#fda252;
}
.info_temp b{
    font-size:13px;
}
.tem .iconfont {
    font-size: 50px;
  }
.image {
  width: 100%;
  text-align: center;
  padding-top: 100px;
}
.input {
  /* float: left; */
  position: relative;
  margin-top: 100px;
  margin-left: 470px;
  border: 1px solid blue;
}
.button {
  position: absolute;
  top: 250px;
  right: 402px;
  width: 100px;
  height: 44px;
  background: deepskyblue;
  color: #fff;
  outline: none;
  border: 0px;
}
a {
  text-decoration: none;
  color: #999;
  font-size: 16px;
  margin-right: 5px;
}
.abox {
  margin-top: 50px;
  margin-left: 470px;
}
</style>
<script>
export default {
  data() {
    return {
      city: "",
      weatherList: [],
    };
  },
  methods: {
    searchWeather: function () {
      this.$axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then((res) => {
          this.weatherList=res.data.data.forecast;
          console.log(res.data.data.forecast);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeCith: function (city) {
      this.city = city;
      this.searchWeather();
    },
  }
};
</script>