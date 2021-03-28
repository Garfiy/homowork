<template>
    <div>
        <transition name="el-fade-in-linear">
        <h1 v-show="$route.query.show || 1">组件内部前置守卫测试组件{{$route.meta.title}}</h1>
        </transition>
        
    </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        // 在渲染组建的对应路由对 confirm 前调用
        // 不能 获取组建的 this
        // 因为当守卫执行之前，组件实例还没创建
        console.log(this);
        to,from
        // 当我们需要使用tish对象时 可以以回调的形式获取到this指向的vm对象
        next(vm=>{
            console.log(vm);
        })
        
        console.log('enter',from);
        console.log('to', to);

    },
    beforeUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 可以访问组件实例 this
        console.log('update',to);
        from, next;
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
         // 可以访问组件实例 this
          next(true),
         from,
        console.log('leave',to);
    }
}
</script>