<template>
  <div>
    <!-- 获取参数的时候用的是 $route -->
    <p>动态路由:params {{$route.params.name}}</p>
    <p>动态路由:query {{$route.query.name}}</p>
  </div>
</template>