<template>
  <div>
    <el-row>
      <el-col :span="3">
        <!-- 菜单标签 -->
        <el-menu :router="true">
          <!-- 第一级标签 -->
          <el-submenu index="1">
            <template slot="title"> homework </template>
            <el-menu-item-group>
              <template slot="title">作业</template>
              <el-menu-item index="/homework/2021/0323">20210323</el-menu-item>
              <el-menu-item index="/homework/2021/0324">20210324</el-menu-item>
              <el-menu-item index="/homework/2021/0325">20210325</el-menu-item>
              <el-menu-item index="/homework/2021/0328">20210328</el-menu-item>
              <el-menu-item index="/homework/2021/0329">20210329</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 再来一个一级标签 -->
          <el-submenu index="2">
            <template slot="title"> study </template>
            <el-submenu index="03-25">
                <template slot="title">0325</template>
                <el-menu-item-group>
                    <el-menu-item index="/study/2021/0325/S03/55">路由params传参</el-menu-item>
                    <el-menu-item index="/study/2021/0325/S03?id=456">路由query传参</el-menu-item>
                    <el-menu-item index="/study/2021/0325/01">路由重定向1</el-menu-item>
                    <el-menu-item index="/study/2021/0325/02">路由重定向2</el-menu-item>
                    <el-menu-item index="/liebiao">路由重定向3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="0329">
              <template slot="title">0329</template>
              <el-menu-item-group>
              <el-menu-item index="/study/2021/0329/s01.vue">计数器1</el-menu-item>
              <el-menu-item index="/study/2021/0329/s02.vue">计数器2</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-submenu index="03-24">
              <!-- 起个名字 -->
              <template slot="title">0324</template>
              <el-menu-item-group>
                  <!-- 小标签 -->
                  <template slot="title">学习</template>

                <el-menu-item index="/study/2021/0324/Dynamic.vue"
                  >命名路由</el-menu-item
                >
                <el-menu-item index="/study/2021/0324/王者">
                  动态路由
                </el-menu-item>
                <el-menu-item
                  index="/study/2021/0324?name=小鸡！小鸡！小鸡！吃米！吃米！吃米！"
                >
                  动态路由
                </el-menu-item>
                <el-menu-item
                  @click="
                    $router.push({
                      path: '/study/2021/0324',
                      query: { name: '编程导航' },
                    })
                  "
                  >编程式导航</el-menu-item
                >
                <el-menu-item
                  @click="
                    $router.push({
                      name: '编程导航',
                      params: { name: 'params编程导航' },
                    })
                  "
                  >编程式导航</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 视图 -->
      <el-col :span="21">
        <router-view name="header"></router-view>
        <router-view></router-view>
        <router-view name="footer"></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less">
</style>

<script>
export default {};
</script>