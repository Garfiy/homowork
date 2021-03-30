<template>
  <!-- 一行 -->
  <el-row>
    <!-- 一列 -->
    <el-col :span="4">
      <!-- 菜单标签 -->
      <el-menu :router="true">
        <!-- 一级标签 -->
        <el-submenu index="1">
          <template slot="title">homework</template>
          <el-menu-item-group>
            <el-menu-item index="/homework/2021/0329">20210329</el-menu-item>
            <el-menu-item index="/homework/2021/0326">20210326</el-menu-item>
            <el-menu-item index="/homework/2021/0325">20210325</el-menu-item>
            <el-menu-item index="/homework/2021/0324">20210324</el-menu-item>
            <el-menu-item index="/homework/2021/0323">20210323</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 再来一个一级标签 -->
        <el-submenu index="2">
          <template slot="title">study</template>

          <el-submenu index="03-29">
            <template slot="title">0329</template>

            <el-menu-item-group>
              <el-menu-item index="/study/2021/0329/01">
                计数器1
              </el-menu-item>
              <el-menu-item index="/study/2021/0329/02">
                计数器2
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="03-26">
            <template slot="title">0326</template>

            <el-menu-item-group>
              <el-menu-item index="/study/2021/0326/01">
                组件内前置守卫
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="03-25">
            <template slot="title">0325</template>

            <el-menu-item-group>
              <el-menu-item index="/study/2021/0325/03?id=456"
                >路由query传参</el-menu-item
              >
              <el-menu-item index="/study/2021/0325/03/55"
                >路由params传参</el-menu-item
              >
              <el-menu-item index="/liebiao">路由重定向03</el-menu-item>
              <el-menu-item index="/study/2021/0325/02"
                >路由重定向02</el-menu-item
              >
              <el-menu-item index="/study/2021/0325/01"
                >路由重定向01</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>

          <!-- 二级菜单 -->
          <el-submenu index="03-24">
            <!-- 起名字 -->
            <template slot="title">0324</template>
            <el-menu-item-group>
              <el-menu-item index="/study/2021/0324class"
                >命名路由</el-menu-item
              >
              <el-menu-item index="/study/2021/0324/王"
                >动态路由parmas</el-menu-item
              >
              <el-menu-item index="/study/2021/0324?name=123"
                >动态路由query</el-menu-item
              >
              <el-menu-item
                @click="
                  $router.push({
                    path: '/study/2021/0324',
                    query: { name: '编程导航query' },
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
                >编程式导航params</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>

    <!-- 放视图 -->
    <el-col :span="18" :offset="1">
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </el-col>
  </el-row>
</template>

<style lang="less">
</style>

<script>
export default {};
</script>