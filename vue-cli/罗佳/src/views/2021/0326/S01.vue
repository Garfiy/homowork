<template>
  <transition name="el-fade-in-linear">
    <h1 v-show="$route.query.show || 1">
      组件内部前置守卫测试组件{{ $route.meta.title }}
    </h1>
  </transition>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(this);
    to, from;
    // 当我们需要使用this对象时
    // 可以以回调的形式获取到this指向的vm对象
    setTimeout(() => {
      next((vm) => {
        console.log(vm);
      });
    }, 2000);
    console.log("enter", from);
    console.log("to", to);
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    from;
    next();
    console.log("update", to);
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    from;
    // next;
    next();
    console.log("leave", to);
  },
};
</script>