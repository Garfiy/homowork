<template>
  <h1>组件内前置守卫测试组件</h1>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(this);
    to, from;
    next((vm) => {
      console.log(vm);
    });
    console.log("enter", from);
  },
  beforeRouteLeave(to, from, next) {
    console.log("组件失活时会调用这个！即：离开这个组件时~" + this);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("路由改变，组件被复用时~，比如 about/:id 动态路由" + this);
    next();
  },
};
</script>
