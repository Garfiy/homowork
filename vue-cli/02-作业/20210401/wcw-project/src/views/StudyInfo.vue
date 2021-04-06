<template>
  <div>
    <h1>学生成绩详情</h1>
    <p>学生姓名：{{ userName }}</p>
    <p>学生成绩：{{ userResult }}</p>
    <el-button @click="onClickReturn">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userResult: "",
    };
  },
  methods: {
    //   返回上一页
    onClickReturn() {
      this.$router.go(-1);
    },
  },
  created() {
    //   获取用户信息id
    let id = this.$route.query.id;
    // 用id换取用户的详细信息
    let data = this.$store.state.infoList.find((value) => value.id == id);

    this.userName = data.name;
    this.userResult = data.result;
  },
};
</script>