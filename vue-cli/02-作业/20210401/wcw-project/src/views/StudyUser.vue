<template>
  <div class="info_box">
    <p><br /></p>
    <h1>账户信息</h1>
    <p><br /></p>
    <p><br /></p>
    <p>
      姓名：<span class=""
        ><b>{{ userName }}</b></span
      >
    </p>
    <p><br /></p>
    <p>
      账户：<span class=""
        ><b>{{ account }}</b></span
      >
    </p>
    <p><br /></p>
    <p>
      密码：<span class=""
        ><b>{{ password }}</b></span
      >
    </p>
    <p><br /></p>
    <button class="btn_logout" @click="onClickLogout">登出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      account: "",
      password: "",
    };
  },
  created() {
    let data = this.$store.state.userAccountInfo;

    this.userName = data.userName;
    this.account = data.account;
    this.password = data.password;
  },
  methods: {
    onClickLogout() {
      // 清空仓库数据
      this.$store.commit("setInfoList", []);
      this.$store.commit("saveAccount", {});
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.info_box {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>