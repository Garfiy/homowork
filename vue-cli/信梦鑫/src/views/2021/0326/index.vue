<template>
  <div>
   
    <el-form
      :model="ruleForm"
       :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <!-- label属性可以省略 -->
          <!-- value属性不能省略 -->
          <el-option value="上海"></el-option>
          <el-option label="北京" value="北京"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <!-- date-picker 标签 是自带了参数格式化的 -->
            <!-- value-format 确定结果的格式化形式 -->
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%"
              value-format="yyyy/MM/dd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%"
              value-format="A hh：mm：ss"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch
          v-model="ruleForm.delivery"
          active-value="是"
          inactive-value="否"
        ></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <div v-show="isShow">
      <p>活动名称：{{ ruleForm.name }}</p>
      <p>活动区域：{{ ruleForm.region }}</p>
      <p>活动时间(日期)：{{ ruleForm.date1 }}</p>
      <p>活动时间(时间)：{{ ruleForm.date2 }}</p>
      <p>即时配送：{{ ruleForm.delivery }}</p>
      <p>活动性质：{{ ruleForm.type.join(" , ") }}</p>
      <p>特殊资源：{{ ruleForm.resource }}</p>
      <p>活动形式：{{ ruleForm.desc }}</p>
    </div>
  </div>
</template>

<script>
import store from "../../../store/store";
export default {
  data() {
    return {
      isShow: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      //rules的参数名需要和表单对象同名
      rules: {
        // 每个规则的值都是数组
        // 数组中的每个对象 都是一条规则
        // 因为参数的校验不止一条规则 所以要用数组去保存规则
        name: [
          // required：表示 是否 是必须填写的
          // message：表示 错误后的提示文案
          // trigger：触发检测规则的时机（blur：是在失去焦点时进行规则检测）
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            // type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            // type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        this.isShow = valid;
        if (valid) {
          // alert("submit!");
          let data = this.ruleForm;

          store.tableData.push({
            active_name: data.name,
            active_city: data.region,
            active_time: data.date1 + data.date2,
            just_time: data.delivery,
            active_nature: data.type,
            special_res: data.resource,
            active_form: data.desc,
          });

          // 路由跳转
          this.$router.push("/homework/2021/0329");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.isShow = false;
    },
  },
};
</script>