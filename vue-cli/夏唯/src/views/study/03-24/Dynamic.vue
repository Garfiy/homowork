<template>
    <div>
        <!-- 获取参数的时候是用的 $route -->
        <p>动态路由params: {{$route.params.name}}</p>
        <p>动态路由query: {{$route.query.name}}</p>
    </div>
</template>