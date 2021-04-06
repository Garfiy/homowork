<template>
  <el-menu
    default-active="/main/studyList"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/main/studyList">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>学生成绩列表</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/main/studyUser">
      <i class="el-icon-menu"></i>
      <span slot="title">学生账户信息</span>
    </el-menu-item>
  </el-menu>
</template>