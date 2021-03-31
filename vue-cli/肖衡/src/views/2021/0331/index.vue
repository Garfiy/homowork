<template>
  <div>
    <el-container>
      <el-header>
        <img src="../../../assets/logo1.png" alt />
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="14">
            <el-input v-model="city"  style="border-radius: 0px"></el-input>
            <!-- <el-button type="primary" icon="el-icon-search">搜索</el-button> -->
          </el-col>
          <el-col :span="2">
            <el-button
              type="primary"
              icon="el-icon-search"
              style="border-radius: 0px"
              @click="onClickBtn"
            >搜索</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-link :underline="false" v-for="item in hotCitys" :key="item" @click="clickSearch(item)">{{item}}</el-link>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <ul class="weather_list">
          <li
            v-for="(item,index) in forecastList"
            :key="item.date"
            :style="{transitionDelay:index*100+'ms'}"
          >
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
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      city: "武汉",
      hotCitys: [
        "\u5317\u4eac",
        "\u4e0a\u6d77",
        "\u5e7f\u5dde",
        "\u6df1\u5733",
      ],
      forecastList: [],
    };
  },
  methods: {
    onClickBtn: function () {
      var a = this;
      this.forecastList = [];
      axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then(function (b) {
          console.log(b);
          console.log(b.data.data.forecast);
          a.forecastList = b.data.data.forecast;
        })
        .catch(function (b) {
          console.log(b);
        })
        .finally(function () {});
    },
    clickSearch: function (a) {
        console.log(a);
      this.city = a;
      this.onClickBtn();
    },
  },
};
</script>

<style>
.el-header {
  display: flex;
  justify-content: center;
}
.el-row {
  display: flex;
  justify-content: center;
}
.el-input {
  border-radius: 0px;
}
.el-link {
  margin-left: 5px;
}
.weather_list {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.weather_list  >li {
    list-style: none;
    text-align: center;
}
.info_temp {
    margin: 20px auto;
    color: orange;
}
.info_type {
    color: skyblue;
    font-weight: 700;
    font-size: 30px;
}
</style>