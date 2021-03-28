<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-row v-show="vShow">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" style="border: 1px solid gray" v-html="output"></div>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click ='outputK'>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      output: "",
      vShow: false,
    };
  },
  methods: {
    onSubmit() {
    //  this.setNewTime();
      this.vShow = true;
      var del = "";
      if (this.form.delivery == true) {
        del = "是";
      } else {
        del = "否";
      }
    //   console.log(this.form.name);
      this.output =
        "活动名称: " +
        this.form.name +
        "<br>活动区域: " +
        this.form.region +
        "<br>活动时间: " +
        this.form.date2 +
        "<br>即时配送: " +
        del +
        "<br>活动性质: " +
        this.form.type +
        "<br>特殊资源: " +
        this.form.resource +
        "<br>活动形式: " +
        this.form.desc;
    },
    outputK(){
        this.output="";
        this.vShow = true;
    },

    //转换时间
    // setNewTime() {
    //     console.log(this);
    //     console.log(this._data.form);
    //     console.log(this._data.form.data2);
    //     console.log(this.form.data2);
    //     // const d = new Date(Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间))
    //     // const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
    //     // const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds())
    // },
  },
};
</script>