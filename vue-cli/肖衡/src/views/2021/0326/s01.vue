<template>
    <div>
        组件内部前置组件{{$route.meta.title}}
    </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        //不!能  获取组件实例this
        // 因为当守卫前  组件实例还没创建
        console.log(this);
        //当我们需要使用this对象时我们可以以回调形式获取到this指向的对象
        to,from,

        setTimeout(() =>{
             next((vm) => {
            console.log(vm);
            });
        },2000)
        console.log('enter',from);
        console.log('to',to);
    },
    beforRouteUpdate(to,from,next){
        //在当前路由改变  但是该组件被复用时调用

        //可以访问组件实例this
        console.log("updata",to);
        from,next();
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        //可以访问组件实例 this
        console.log("leave",to);
        from,next();
    }
}
</script>