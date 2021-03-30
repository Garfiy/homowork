<template>
  <el-row>
    <el-col :span="3">
      <el-menu :router="true">
        <el-submenu index="1">
          <template slot="title">homework</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/homework/2021/0323">选项1</el-menu-item>
            <el-menu-item index="/homework/2021/0324">选项2</el-menu-item>
            <el-menu-item index="/homework/2021/0325">选项3</el-menu-item>
            <el-menu-item index="/homework/2021/0326">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">stuby</template>
          <el-menu-item-group>
            <el-menu-item index="/study/2021/0324/是看得见">动态路由params</el-menu-item>
            <el-menu-item index="/study/2021/0324?name=是看得www见">动态路由query</el-menu-item>
            <el-menu-item @click="$router.push({path:'/study/2021/0324',query:{name:'几点开始翻译和'}})">动态路由query</el-menu-item>
            <el-menu-item @click="$router.push({name:'编程导航',params:{name:'params深刻的健康'}})">动态路由params深刻的健康</el-menu-item>
          </el-menu-item-group>
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


