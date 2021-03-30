<template>
    <div>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
</template>

<script>
//引用仓库文件
import store from '../../../store/store';
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
        console.log(store);
      }
    }
  };
</script>
