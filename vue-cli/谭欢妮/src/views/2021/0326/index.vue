<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="北京" value="shanghai"></el-option>
          <el-option label="云南" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.test"
            style="width: 100%"
          ></el-time-picker>
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
          <div
            class="grid-content bg-purple-dark"
            style="border: 1px solid green"
            v-html="output"
          ></div>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="outputK">取消</el-button>
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
        date: "",
        test: "",
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
      this.vShow = true;
      var del = "";
      if (this.form.delivery == true) {
        del = "是";
      } else {
        del = "否";
      }
      this.output =
        "活动名称: " +this.form.name +
        "<br><br>活动区域: " +this.form.region +
        "<br><br>活动时间: " +this.form.test +
        "<br><br>即时配送: " +del +
        "<br><br>活动性质: " + this.form.type +
        "<br><br>特殊资源: " + this.form.resource +
        "<br><br>活动形式: " + this.form.desc;
    },
    outputK() {
      this.output = "";
      this.vShow = true;
    },
  },
};
</script>