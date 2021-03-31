<template>
  <div>
    <div class="wrap">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>
      <div class="search">
        <el-row class="demo-autocomplete">
          <el-col :span="20">
            <el-input
              class="search-input"
              v-model="value"
              placeholder="请输入查询的天气"
              @change="onClickGetData"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-button
              class="button"
              type="primary"
              icon="el-icon-search"
              @click="onClickGetData"
              >搜索</el-button
            >
          </el-col>
        </el-row>
        <el-row :gutter="20" class="city">
          <el-col :span="2" v-for="ietm in cityList" :key="ietm">
            <div class="grid-content bg-purple">
              <el-link target="_blank" @click="getIetm">{{ ietm }}</el-link>
            </div>
          </el-col>
        </el-row>
        <el-row class="weather-box">
          <el-col :span="4" v-for="(item, index) in List" :key="index">
            <div class="weather">
              <h2 :class="setIcon(item.type)">{{ item.type }}</h2>
              <h4>{{ item.low + "~" + item.high }}</h4>
              <p>{{ item.date }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      logo: require("../../../../assets/logo1.png"),
      line: require("../../../../assets/line.png"),
      value: "",
      List: "",
      ganmao: "",
      cityList: ["北京", "上海", "广州", "深圳", "邵阳"],
      icon: "",
    };
  },
  methods: {
    getData() {
      var ulr = "http://wthrcdn.etouch.cn/weather_mini?city=";
      axios.get(ulr + this.value).then((val) => {
        this.List = val.data.data.forecast;
        this.ganmao = val.data.data.ganmao;
      });
    },
    onClickGetData() {
      this.getData();
    },
    getIetm(e) {
      this.value = e.target.innerText;
      this.getData();
    },
    setIcon(val) {
      switch (val) {
        case "多云":
          return "el-icon-cloudy";
        case "小雨":
          return "el-icon-light-rain";
        case "晴":
          return "el-icon-sunny";
        case "大雨":
          return "el-icon-heavy-rain";
        case "中雨":
          return "el-icon-heavy-rain";
        case "阴":
          return "el-icon-partly-cloudy";
        case "霾":
          return "el-icon-sunset";
        case "雷阵雨":
          return "el-icon-lightning";
        default:
          break;
      }
    },
  },
};
</script>
<style lang="less">
.wrap {
  width: 640px;
  margin: 30px auto 0;
  .logo {
    width: 100%;
    height: 47px;
    text-align: center;
    img {
      width: 158px;
      height: 47px;
    }
  }
  .search {
    margin-top: 60px;
    .search-input {
      width: 100%;
      .el-input input {
        border-color: #41a1cb;
      }
    }
    .city {
      margin-top: 8px;
    }
    .button {
      margin: 0 0 0 20px;
      background-color: #41a1cb;
      border-color: #41a1cb;
    }
    .weather-box {
      width: 100%;
      box-sizing: border-box;
      .weather {
        text-align: center;
        background: url("../../../../assets/line.png") no-repeat right center;
        h2 {
          font-weight: normal;
          color: #fda252;
          font-size: 30px;
        }
        h4 {
          font-weight: normal;
          color: #fda252;
          font-size: 14px;
        }
        p {
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
}
</style>