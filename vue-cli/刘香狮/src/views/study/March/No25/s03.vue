<template>
  <div>
    <p>父组件的值：{{id}}</p>
    <p>params.id : {{$route.params.id}}</p>
    <p>query.id : {{$route.query.id}}</p>
  </div>
</template>
<script>
export default {
  // 接收父组件的值
  props: ["id"],
};
</script>