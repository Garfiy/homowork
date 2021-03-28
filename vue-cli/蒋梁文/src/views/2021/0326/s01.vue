<template>
    <transition name="el-fade-in-linear">
      <h1 v-show="$route.query.show||1">组件内部前置守卫{{ $route.meta.title }}</h1>
    </transition>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 config 前调用
    // 不能获取组件实例this
    // 因为当守卫执行前 组件实例还没被创建
    to, from, next();
    console.log("enter", to);
  },
  beforeRouterUpdate(to, from, next) {
    // 在当前路由但是该组件被服用时调用
    // 举例来说 对于一个带油动态参数的路径 /foo/:id在/foo/1和/foo/2之间跳转的时候
    // 由于会渲染同样的foo组件 因此组件实例会被复用 而这个钩子就会在这个情况下被调用
    // 可以访问组件实例 this
    to, from, next();
    console.log("update", to);
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例`this`
    to, from, next();
    console.log(to);
  },
};
</script>