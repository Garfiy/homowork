<template>
  <el-container>
    <el-header>
      <img src="../../../assets/logo.png" alt="" />
    </el-header>
    <el-main class="search">
      <el-input v-model="city" @change="queryWeather"></el-input>
      <el-button type="primary" @click="clickSearch(city)">搜索</el-button>
    </el-main>
    <el-main class="such">
      <el-link
        type="info"
        :underline="false"
        v-for="val in list"
        :key="val.id"
        @click="clickSearch(val.name)"
        >{{ val.name }}</el-link
      >
    </el-main>
    <ul class="weather_list">
      <li
        v-for="(item, index) in forecastList"
        :key="item.date"
        :style="{ transitionDelay: index * 100 + 'ms' }"
      >
        <div class="info_type">
          <span class="iconfont">{{ item.type }}</span>
        </div>
        <div class="info_temp">
          <b>{{ item.low }}</b>
          ~
          <b>{{ item.high }}</b>
        </div>
        <div class="info_date">
          <span>{{ item.date }}</span>
        </div>
      </li>
    </ul>
  </el-container>
</template>
<style lang="less">
.el-container {
  margin-top: 100px;
  text-align: center;
}
.search {
  display: flex;
  width: 640px;
  height: 80px;
  margin: 0 auto;
}
.el-input {
  width: 538px;
}
.el-button {
  width: 100px;
}
.el-link {
  font-size: 14px;
  color: #666;
  padding-right: 15px;
}

.weather_list {
  height: 200px;
  text-align: center;
  margin-top: 50px;
  font-size: 0px;
}
.weather_list li {
  display: inline-block;
  width: 140px;
  height: 200px;
  padding: 0 10px;
  overflow: hidden;
  position: relative;
  background: url("../../../assets/line.png") right center no-repeat;
  background-size: 1px 130px;
}

.info_date {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #999;
  font-size: 14px;
  left: 0px;
  bottom: 0px;
  margin-top: 15px;
}
.info_date b {
  float: left;
  margin-left: 15px;
}

.info_type span {
  color: #fda252;
  font-size: 30px;
  line-height: 80px;
}
.info_temp {
  font-size: 14px;
  color: #fda252;
}
.info_temp b {
  font-size: 13px;
}
.tem .iconfont {
  font-size: 50px;
}
</style>
<script>
import axios from "../../../store/axios";
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (a) {
  return (a.raw = a);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) {
  a.raw = b;
  return a;
};
export default {
  data() {
    return {
      city: "",
      list: [
        {
          id: 1,
          name: "北京",
        },
        {
          id: 2,
          name: "上海",
        },
        {
          id: 3,
          name: "广州",
        },
        {
          id: 4,
          name: "深圳",
        },
      ],
      forecastList: [],
    };
  },
  methods: {
    queryWeather: function () {
      var a = this;
      this.forecastList = [];
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + a.city)
        .then(function (b) {
          a.forecastList = b.data.data.forecast;
        })
        .catch(function (b) {
          console.log(b);
        })
        .finally(function () {});
    },
    clickSearch: function (val) {
      if (val) {
        this.city = val;
        this.queryWeather();
      }else{
        this.open();
      }
    },
    open() {
      this.$alert("请输入内容");
    },
  },
};
</script>