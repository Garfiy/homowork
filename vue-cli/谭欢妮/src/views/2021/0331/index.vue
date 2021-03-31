<template>
  <div>
    <el-row class="logo">
      <el-col>
        <img src="../../../img/logo.png" alt="">
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-input @change="onClickSearch(city)" v-model="city"></el-input>
        <div>
          <el-link
            v-for="(k, i) in cityList"
            :key="i"
            type="info"
            :underline="false"
            @click="onClickSearch(k)"
            >{{ k }}</el-link
          >
        </div>
      </el-col>
      <el-col :span="1">
        <el-button @click="onClickSearch(city)" type="primary">搜索</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="weather">
      <el-col :span="3" v-for="(k, i) in dataList" :key="i" class="cols">
        <h2>{{ k.type }}</h2>
        <p>{{ k.high }}~{{ k.low }}</p>
        <p class="date">{{ k.date }}</p>
        <i></i>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: ["北京", "上海", "广州", "深圳"],
      city: "",
      dataList: [],
    };
  },
  methods: {
    onClickSearch: function (city) {
      this.$axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + city).then((res) => {
          if (res.status == 200 && res.data.data) {
            this.dataList = res.data.data.forecast;
          }else{
            this.dataList = [];
          }
        });
    },
  },
};
</script>
<style lang="less">
.logo {
  padding: 20px 0;
  text-align: center;
}
span {
  padding: 0 10px;
}
.weather {
  margin-top: 20px;
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