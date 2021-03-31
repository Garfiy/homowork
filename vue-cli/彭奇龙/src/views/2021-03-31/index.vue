<template>
 <div class="wrap" id="app">
    <div class="search_form">
      <div class="logo"><img src="../../assets/logo2.png" alt="logo" /></div>
      <div class="form_group">
        <el-row>
            <el-col :span="18">
                <el-input placeholder="请输入查询的天气" v-model="city" clearable  @change="queryWeather"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" class="input_sub" @click="queryWeather">搜 索</el-button>
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
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios);
export default {
    data() {
        return {
            city:'',
            hotCitys:['北京','上海','深圳','广州'],
            forecastList:[]
        }
    },
    created() {
        this.city = '邵阳';
        console.log(this.city);
    },
    methods: {
        queryWeather:function() {
           if(this.city) {
                axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then((val) => {
                this.forecastList = val.data.data.forecast;
            }).catch(()=>{
                this.$alert('请输入正确的地名', '提示', {
                    confirmButtonText: '确定'
                });
            })
           }else {
                this.$alert('请输入需要查询的城市', '提示', {
                    confirmButtonText: '确定'
                });
           }
        },
        clickSearch:function(val){
            this.city = val;
            this.queryWeather();
        }
    },
}
</script>

<style>
    @import '../../assets/css/index.css';
    @import '../../assets/css/reset.css';
</style>