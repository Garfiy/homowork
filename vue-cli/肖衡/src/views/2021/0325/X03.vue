<template>
    <div>
        params.id {{$route.params.id}}<br>
        query.id {{$route.query.id}}<br>
        父组件的值:{{id}}
    </div>
</template>

<script>
export default {
    //接收父组件的值
    props:["id"],
}
</script>