<template>
    <div>
        <div class="box">
            <img src="../../../assets/img/logo.png" alt="" class="logo">
            <el-row :gutter="0">
            <el-col :span="10">
            <!-- <el-input v-model="input" placeholder="请输入查询的天气"></el-input> -->
            <el-input placeholder="请输入查询的天气" v-model="city" @keyup.enter="getWeather"></el-input>
             </el-col>
             <el-col :span="1">
            <el-button type="primary" @click="getWeather">搜索</el-button>
             </el-col>
            </el-row>
            <!-- <p><span>上海</span><span>北京</span><span>广州</span><span>深圳</span></p> -->

        <div class="hotkey">
        <!-- <a href="javascript:;" @click="clickSearch('北京')">北京</a>
          <a href="javascript:;" @click="clickSearch('上海')">上海</a>
          <a href="javascript:;" @click="clickSearch('广州')">广州</a>
          <a href="javascript:;" @click="clickSearch('深圳')">深圳</a> -->
        <!-- <a href="javascript:;" v-for="city in hotCitys" @click="clickSearch(city)">{{ city }}</a> -->
        <div :v-for="city in hotCitys" @click="clickSearch(city)">{{ city }}</div>
      </div>
            <ul class="weather_list">
                <!-- <li v-for="(item,index) in forecastList" :key="item.date" :style="{transitionDelay:index*100+'ms'}"> -->
                <li>
                    <div class="info_type">
                    <!-- <span class="iconfont">{{ item.type }}</span> -->
                    <span class="iconfont">{{  }}</span>
                    </div>
                    <div class="info_temp">
                    <!-- <b>{{ item.low}}</b> -->
                    <b></b>
                    ~
                    <!-- <b>{{ item.high}}</b> -->
                    <b></b>
                    </div>
                    <div class="info_date">
                    <!-- <span>{{ item.date }}</span> -->
                    <span></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// console.log(axios);
export default {
    data() {
        return {
            city: "\u6b66\u6c49",
            forecastList: [], 
            hotCitys: ["\u5317\u4eac", "\u4e0a\u6d77", "\u5e7f\u5dde", "\u6df1\u5733"],
            val:'',
        }
    },
    methods:{
        getWeather: function () {
        //    console.log(axios);
            // axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.val).then(function(ret){
            //     console.log(ret.data);
            // })
            // this.forecastList=[];
            // axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(function(b){
            //     console.log(b);
            //     a.forecastList=b.data.data.forecast
            // }).catch(function(b){
            //     console.log(b);
            // }).finally(function(){});
            // // console.log(that);
        },
   
        // clickSearch:function(a){
        //     this.city=a;
        //     this.getWeather();
        // }
    }
}
</script>

<style>
    .box{
        text-align: center;
        padding: 100px 0 0 0;
    }
    .box .logo{
        margin-bottom: 50px;
    }
    .box p{
       margin-left: -660px;
    }

    .box span{
       margin: 0 10px;
    }

    .box .el-row{
        text-align: center;
        margin-left: 400px;
    }
   
    .el-input input{
        border: 1px solid rgb(64, 158, 255);
    }

    .weather_list{
        height:200px;
        text-align:center;
        margin-top:50px;
        font-size:0px;
    }

    .weather_list li{
        display:inline-block;
        width:140px;
        height:200px;
        padding:0 10px;
        overflow: hidden;
        position: relative;
        background:url('../../../assets/img/line.png') right center no-repeat;
        background-size: 1px 130px;
    }

    .weather_list li:last-child{
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



</style>
