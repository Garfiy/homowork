<template>
    <div>
        <!-- 获取参数的时候是用的 $route -->
        <p>动态路由:params   {{$route.params.name}}</p>
        <p>动态路由:query{{$route.query.name}}</p>
    </div>
</template>