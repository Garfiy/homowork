<template>
    <div>
        <!-- 获取参数是用的$router -->
        <p>动态路由 params:{{$route.params.name}}</p>
        <p>动态路由 query:{{$route.query.name}}</p>
    </div>
</template>