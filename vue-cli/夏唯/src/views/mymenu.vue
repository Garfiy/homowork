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
                <el-menu-item index="/homework/2021/0325">2021-03-25</el-menu-item>
                <el-menu-item index="/homework/2021/0326">2021-03-26</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <!-- 再来一个一级标签 -->
        <el-submenu index="2">
            <el-submenu index="2-3">
              <span slot="title">2021-03-26笔记</span>
              <el-menu-item-group>
                  <template slot="title">作业</template>
                  <el-menu-item index="/study/2021/0326">03-25作业</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">上课笔记</template>
                <el-menu-item index="/study/2021/0326/01">组件内部前置路由守卫</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2-2">
              <span slot="title">2021-03-25笔记</span>
              <el-menu-item-group>
                  <template slot="title">作业</template>
                  <el-menu-item index="/study/2021/0325">03-24作业</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">上课笔记</template>
                <el-menu-item index="/study/2021/0325/01">路由重定向规则01</el-menu-item>
                <el-menu-item index="/study/2021/0325/02">路由重定向规则02</el-menu-item>
                <el-menu-item index="/liebiao">路由重定向规则03</el-menu-item>
                <el-menu-item index="/study/2021/0325/03/123">路由params传参</el-menu-item>
                <el-menu-item index="/study/2021/0325/03?id=456">路由query传参</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <template slot="title">study</template>
            <el-submenu index="2-1">
              <span slot="title">2021-03-24笔记</span>
              <el-menu-item-group>
                <template slot="title">上课笔记</template>
                <el-menu-item index="/study/2021/0324class">命名路由</el-menu-item>
                <el-menu-item index="/study/2021/0324/传">动态路由params</el-menu-item>
                <el-menu-item index="/study/2021/0324?name=参">动态路由query</el-menu-item>
                <el-menu-item @click="$router.push({path:'/study/2021/0324',query:{name:'编程导航query'}})">编程式导航query</el-menu-item>
                <el-menu-item @click="$router.push({name:'编程导航',params:{name:'编程导航params'}})">编程式导航params</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
        </el-submenu>
    </el-menu>
  </el-col>
  <el-col :span="21">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </el-col>
</el-row>
</template>
<style lang="less">

</style>
<script>
export default {
    
}
</script>
