<template>
  <div>
    <div class="search_form">
      <div class="logo"><img src="@/assets/img/logo.png" alt="logo" /></div>
      <div class="form_group">
        <input
          type="text"
          v-model="city"
          @keyup.enter="searchWeather(city, $event)"
          @blur="searchWeather(city, $event)"
          class="input_txt"
          placeholder="请输入查询的天气"
        />
        <button class="input_sub">搜 索</button>
      </div>
      <div class="hotkey">
        <a v-for="item in cityList" :key="item" @click="searchWeather(item)">{{
          item
        }}</a>
      </div>
    </div>
    <ul class="weather_list">
      <li v-for="(item, index) in weatherList" :key="index">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      cityList: ["北京", "上海", "广州", "深圳", "邵阳"],
      weatherList: [],
    };
  },
  methods: {
    searchWeather(city) {
      this.city = city;
      if (this.city) {
        this.$axios
          .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
          .then((res) => {
            if (res.status === 200) {
              if (res.data.status === 1000) {
                let data = res.data.data;
                this.weatherList = data.forecast;
              } else {
                // alert(res.data.desc);
                console.log(res.data.desc);
              }
            } else {
              alert("网络连接中断~请稍后再试");
            }
          });
      } else {
        this.weatherList = [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>

<style scoped src="@/assets/css/index.css"></style>