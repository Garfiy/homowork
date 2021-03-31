<template>
  <div>
    <el-row>
      <el-col class="logo">
        <img src="../../../assets/logo.png" alt="" />
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="9">
        <el-input v-model="city"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="onClickSearch">搜索</el-button>
      </el-col>
    </el-row>
    <div class="area">
      <el-link
        :underline="false"
        v-for="(k, i) in region"
        :key="i"
        class="item"
        >{{ k }}</el-link
      >
    </div>
    <div class="box-tq" v-for="(k, i) in dataltis" :key="i">
      <el-row>
        <el-col>
          {{ k.type }}
        </el-col>
      </el-row>
      <el-row>
        <el-col> {{ k.low }}~~~{{ k.high }} </el-col>
      </el-row>
      <el-row>
        <el-col>
          {{ k.date }}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "\u6b66\u6c49",
      dataltis: [],
      region: ["\u5317\u4eac", "\u4e0a\u6d77", "\u5e7f\u5dde", "\u6df1\u5733"],
    };
  },
  methods: {
    onClickSearch: function () {
      this.$axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then((res) => {
          this.dataltis = res.data.data.forecast;
          console.log(res.data.data.forecast);
        });
    },
  },
};
</script>

<style lang="less">
.logo {
  text-align: center;
  padding: 150px 200px 50px 0;
}
.area {
  text-align: center;
  margin-left: -200px;
}
.item {
  margin-left: 40px;
}
.box-tq {
  padding: 20px;
  text-align: center;
  float: left;
}
</style>