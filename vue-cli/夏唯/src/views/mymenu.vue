<template>
<!-- 一行 -->
<el-row>
  <el-col :span="3">
    <!-- 菜单标签 -->
    <el-menu :router="true">
        <!-- 一级标签 -->
        <el-submenu index="1">
            <template slot="title">homework</template>
              <el-menu-item-group>
                <el-menu-item index="/homework/2021/0323">2021-03-23</el-menu-item>
                <el-menu-item index="/homework/2021/0324">2021-03-24</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <!-- 再来一个一级标签 -->
        <el-submenu index="2">
            <template slot="title">study</template>
               <el-menu-item-group>
                <el-menu-item index="/study/2021/0324">动态路由</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </el-col>
  <el-col :span="21">
    <router-view></router-view>
  </el-col>
</el-row>
</template>
<style lang="less">

</style>
<script>
export default {
    
}
</script>
