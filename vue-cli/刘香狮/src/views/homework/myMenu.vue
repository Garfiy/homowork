<template>
  <div>
    <!-- 一行 -->
    <el-row>
      <!-- 一列 -->
      <el-col :span="5">
        <!-- 菜单标签 -->
        <el-menu :router="true">
          <!-- 一级标签 -->
          <el-submenu index="1">
            <template slot="title">homework</template>
            <el-menu-item-group>
                <template slot="title">作业</template>
              <el-menu-item index="/homework/3/23">2021-3月-23日</el-menu-item>
              <el-menu-item index="1-2">2021-3月-24日</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 再来一个一级标签 -->
          <el-submenu index="2">
            <template slot="title">study</template>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 视图 -->
      <el-col :span="19">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
</style>