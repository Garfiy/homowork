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
              <el-menu-item index="/homework/2021/0323">2021-3月-23日</el-menu-item>
              <el-menu-item index="/homework/2021/0324">2021-3月-24日</el-menu-item>
              <el-menu-item index="/homework/2021/0325">2021-3月-25日</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 再来一个一级标签 -->
          <el-submenu index="2">
            <template slot="title">study</template>
            <template slot="title">学习</template>

            <el-submenu index="2-1">
              <span slot="title">3-24号</span>

              <el-menu-item-group>
                <template slot="title">上课</template>
                <el-menu-item index="/study/03/24class">命名路由</el-menu-item>
                <el-menu-item index="/study/03/24/云">动态路由 params</el-menu-item>
                <el-menu-item index="/study/03/24?name=云">动态路由 query</el-menu-item>
                <el-menu-item
                  @click="$router.push({path:'/study/03/24',query:{name : '编程导航query版'}})"
                >编程式导航</el-menu-item>
                <el-menu-item
                  @click="$router.push({name:'编程导航',params:{name : '编程导航params版'}})"
                >编程式导航</el-menu-item>
              </el-menu-item-group>

            </el-submenu>

            <el-submenu index="2-2">

              <span slot="title">3-25号</span>

              <el-menu-item-group>
                <template slot="title">作业</template>
                <el-menu-item index="/study/03/25yesterday">3-24号作业</el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group>
                <template slot="title">上课</template>
                <el-menu-item index="/study/03/25/01">路由重定向01</el-menu-item>
                <el-menu-item index="/study/03/25/02">路由重定向02</el-menu-item>
                    <!-- 找到指定别名的路由 -->
                <el-menu-item index="/liebiao">别名路由</el-menu-item>
                <!-- 路由传参 -->
                <el-menu-item index="/study/03/25/03/200"> 路由params传参</el-menu-item>
                <el-menu-item index="/study/03/25/03?id=100"> 路由query传参</el-menu-item>
              </el-menu-item-group>

            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>

      <!-- 视图 -->
      <el-col :span="19">
        <router-view name="header"></router-view>
        <router-view></router-view>
        <router-view name="footer"></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
</style>