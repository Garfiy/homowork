<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="账户：" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>

      <el-form-item label="密码：" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          {
            required: true,
            message: "请输入账户",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 前端判定成功
          this.$axios
            .post("/login", {
              account: this.form.account,
              password: this.form.password,
            })
            .then((res) => {
              switch (res.state) {
                case 200:
                  // 保存我们需要的数据
                  this.$store.commit("setInfoList", res.data.studyList);
                  // 保存用户账户信息
                  this.$store.commit("saveAccount", {
                    userName: res.data.userInfo.userName,
                    account: this.form.account,
                    password: this.form.password,
                  });
                  // 编程式导航
                  this.$router.push("/main");

                  break;
                default:
                  this.$alert(res.msg, "", {
                    confirmButtonText: "确定",
                    callback: (action) => {},
                  });
                  break;
              }
            });
        }
      });
    },
  },
};
</script>