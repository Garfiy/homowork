<template>
    <div class="wrap" id="app">
    <div class="search_form">
      <div class="logo"><img src="../../../assets/logo.png" alt="logo" /></div>
      <div class="form_group">
        <el-row>
            <el-col :span="18">
                <!-- <input type="text" v-model='num1' @keyup.enter.space="one"> -->
                <el-input v-model="city" placeholder="请输入查询的天气" @change="queryWeather"></el-input>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="queryWeather">搜索</el-button>
            </el-col>
        </el-row>
      </div>
      <div class="hotkey">
        <a href="javascript:;" v-for="(city,index) in hotCitys" @click="clickSearch(city)" :key="index">{{ city }}</a>
      </div>
    </div>
    <ul class="weather_list">
      <li v-for="(item,index) in forecastList" :key="item.date" :style="{transitionDelay:index*100+'ms'}">
        <div class="info_type">
          <span class="iconfont">{{ item.type }}</span>
        </div>
        <div class="info_temp">
          <b>{{ item.low}}</b>
          ~
          <b>{{ item.high}}</b>

        </div>
        <div class="info_date">
          <span>{{ item.date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            city:'',
            hotCitys:['北京','上海','深圳','广州'],
            forecastList:[]
        }
    },
    methods:{
        queryWeather(){
           if(this.city){
                axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then((val)=>{
                console.log(val.data.data);
                this.forecastList=val.data.data.forecast
            }).catch(()=>{
                alert('傻逼这不是城市');
            })
           }else{
               alert('请输入你要查询的目的地')
           }
        },
        clickSearch:function(val){
            this.city=val;
            this.queryWeather()
        }
    }
}
</script>

<style>
    @import '../../../assets/css/index.css';
    @import '../../../assets/css/reset.css';
</style>