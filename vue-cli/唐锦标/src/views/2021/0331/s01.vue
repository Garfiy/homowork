<template>
    <div>
        <h1>{{$store.state.count}}</h1>
        <el-button @click="$store.state.count++">增加</el-button>
        <el-button @click="$store.commit('add')">增加2</el-button>
        <h1>姓名：{{$store.state.name}}</h1>
        <h1>年龄：{{$store.state.age}}</h1>
        <h1>性别：{{$store.state.sex}}</h1>
         <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
        <h1>性别：{{sex}}</h1>
        <el-input v-model="age"></el-input>
    </div>
</template>

<script>
export default {
    //计算属性
    computed:{
        name:function(){
            return this.$store.state.name
        },
        age:{
            get:function(){
                return this.$store.state.age;
            },
            set:function(value){
                this.$store.commit('setAge',value)
            }
        },
        sex:function(){
            return this.$store.state.sex;
        },
    }
}
</script>