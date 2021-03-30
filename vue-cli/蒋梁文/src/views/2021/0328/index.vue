<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="上海" value="上海">上海</el-option>
      <el-option label="北京" value="北京">北京</el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
<<<<<<< HEAD
      <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-mm-dd" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="data" placeholder="选择时间" v-model="form.date2" value-format="hh:mm:ss" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery" active-value="是" inactive-value="否"></el-switch>
=======
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="data" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
>>>>>>> parent of b32d113 (彭超群)
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
  <el-form-item>
<<<<<<< HEAD
    <el-button type="primary"  @click="onSubmit('form')">立即创建</el-button>  
    <el-button>取消</el-button> 
=======
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
>>>>>>> parent of b32d113 (彭超群)
    <div v-html="form.content"></div>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
<<<<<<< HEAD
import store from '../../../store/store';
=======
>>>>>>> parent of b32d113 (彭超群)
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery:false,
          type: [],
          resource: '',
          desc: '',
          content:''
        }
      }
    },
    methods: {
      onSubmit() {
<<<<<<< HEAD
        this.$router.push('/homework/2021/0329'); 
        store.changeNum(this.form);
=======
        this.form.content='活动名称：'+this.form.name+'<br>活动区域：'+this.form.region+'<br>活动时间:'+this.form.date1+'<br>选择时间:'+this.form.date2+'<br>即时配送:'+this.form.delivery+'<br>活动性质:'+this.form.type+'<br>特殊资源:'+this.form.resource+'<br>活动形式:'+this.form.desc;
>>>>>>> parent of b32d113 (彭超群)
      }
    }
  }
</script>
<<<<<<< HEAD

=======
>>>>>>> parent of b32d113 (彭超群)
