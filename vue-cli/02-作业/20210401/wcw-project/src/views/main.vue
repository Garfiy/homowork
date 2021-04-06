<template>
  <div>
    <header>
      <mainHeader></mainHeader>
    </header>
    <main>
      <el-row>
        <el-col :span="4">
          <leftNav></leftNav>
        </el-col>

        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
import mainHeader from "../views/MainHeader";
import leftNav from "../views/leftNav";

export default {
  components: {
    mainHeader,
    leftNav,
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next((vm) => {
      if (vm.$store.state.infoList.length > 0) {
        next();
      } else {
        next("/");
      }
    });
  },
};
</script>