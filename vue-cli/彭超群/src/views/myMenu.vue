<template>
  <!-- 一行 -->
  <el-row>
    <!-- 一列 -->
    <el-col :span="3">
      <!--菜单标签  -->
      <el-menu :router="true">
        <!-- 一级标签 -->
        <el-submenu index="1">
          <template slot="title"> homework </template>
          <!-- 分组 -->
          <el-menu-item-group>
            <template slot="title">作业</template>
            <!-- 选项 -->
            <el-menu-item index="/homework/2021/0323">0323</el-menu-item>
            <el-menu-item index="/homework/2021/0324">0324</el-menu-item>    
          </el-menu-item-group>
        </el-submenu>
        <!-- 再来一个一级标签 -->
        <el-submenu index="2">
          <template slot="title"> study </template>
             <!-- 分组 -->
          <el-menu-item-group>
            <template slot="title">学习</template>
            <!-- 选项 -->
            <el-menu-item index="/study/2021/0324class">命名路由</el-menu-item>
            <el-menu-item index="/study/2021/0324/我要上王者100次">params0324</el-menu-item>
            <el-menu-item index="/study/2021/0324?name=我要上王者100次">query0324</el-menu-item>
            <el-menu-item @click="$router.push({path:'/study/2021/0324',query:{name:'编程式导航'}})">编程式导航</el-menu-item>
            <el-menu-item @click="$router.push({name:'编程导航',params:{name:'params编程导航'}})">编程式导航params</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <!-- 放视图 -->
    <el-col :span="21">
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </el-col>
  </el-row>
</template>


<style lang="">
</style>
<script>
export default {

};
</script>