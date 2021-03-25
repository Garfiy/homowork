<template>
    <el-row>
        <el-col :span="3">
            <!-- 菜单标签 -->
            <el-menu :router="true">
                <!-- 一级标签 -->
                <el-submenu index="1" >
                    <template slot="title">homework</template>
                    <el-menu-item-group>
                        <el-menu-item index="/homework/2021/0323">20210323</el-menu-item>
                        <el-menu-item index="/homework/2021/0324">20210324</el-menu-item>
                        <el-menu-item index="/homework/2021/0325">20210325</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <!-- 再来一个一级标签 -->
                <el-submenu index="2">
                    <template slot="title">study</template>
                <el-submenu index="03-25">
                    <template slot="title">0325</template>
                    <el-menu-item-group>
                        <el-menu-item index="/study/2021/0325/03?id=456">路由query传参</el-menu-item>
                        <el-menu-item index="/study/2021/0325/03/55">路由params传参</el-menu-item>
                        <el-menu-item index="/study/2021/0325/01">路由重定向1</el-menu-item>
                        <el-menu-item index="/study/2021/0325/02">路由重定向2</el-menu-item>
                        <el-menu-item index="/liebiao">路由重定向3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                 <el-submenu index="03-24">
                    <template slot="title">0324</template>
                    <el-menu-item-group>
                        <el-menu-item index="/study/2021/0324class">命名路由</el-menu-item>
                        <el-menu-item index="/study/2021/0324/老王">动态路由params</el-menu-item>
                        <el-menu-item index="/study/2021/0324?name=123">动态路由query</el-menu-item>
                        <el-menu-item index="123" @click="$router.push({path:'/study/2021/0324',query:{name:'编程导航query'}})">编程式导航</el-menu-item>
                        <el-menu-item index="1222" @click="$router.push({name:'编程导航',params:{name:'params编程导航'}})">编程式导航params</el-menu-item>
                    </el-menu-item-group>
                 </el-submenu>
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

<style lang="less">
    
</style>

<script>
export default {
    
}
</script>