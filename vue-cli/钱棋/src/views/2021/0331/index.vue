<template>
  <div>
    <el-row class="logo">
      <img src="../../../img/logo.png" alt="" />
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-input @change="onClickSearch(city)" v-model="city"></el-input>
        <div>
          <el-link
            v-for="(city, index) in hotCity"
            :key="index"
            type="info"
            :underline="false"
            @click="onClickSearch(city)"
            >{{ city }}
          </el-link>
        </div>
      </el-col>
      <el-col :span="1">
        <el-button @click="onClickSearch(city)" type="primary" class="input_sub"
          >搜索</el-button
        >
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="weather">
      <el-col
        :span="3"
        v-for="(value, index) in dataArr"
        :key="index"
        class="cols"
      >
        <h2>{{ value.type }}</h2>
        <p>{{ value.high }}~{{ value.low }}</p>
        <p class="date">{{ value.date }}</p>
        <i></i>
      </el-col>
    </el-row>
  </div>
</template>

<script  type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      hotCity: ["北京", "上海", "广州", "深圳"],
      city: "邵阳",
      dataArr: [],
    };
  },
  methods: {
    onClickSearch: function (city) {
      this.city = city;
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + city)
        .then((res) => {
          console.log(res);
          if (res.status == 200 && res.data.data) {
            this.dataArr = res.data.data.forecast;
          } else {
            this.dataArr = [];
          }
        });
    },
  },
};
</script>

<style lang="less">
.wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
.logo {
  padding: 20px 0;
  text-align: center;
}
span {
  padding: 0 10px;
}
.weather {
  margin-top: 60px;
}

.input_sub {
  width: 100px;
  height: 40px;
  border: 0px;
  float: left;
  background-color: #41a1cb;
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  position: relative;
}
.cols {
  position: relative;
  text-align: center;
}
.cols i {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
  border-right: 1px solid #999;
}

.cols h2,
.cols p {
  font-weight: 400;
  color: #fda252;
}
.cols .date {
  color: #999;
}
.el-input__inner {
  border: 1px solid #41a1cb;
  border-radius: 0;
}
.el-button--primary {
  border-radius: 0;
}
</style>