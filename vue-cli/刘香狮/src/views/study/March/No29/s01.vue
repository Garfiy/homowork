<template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template>
<script>
// 引用仓库对象
import store from "../../../../store/store";

export default {
  data() {
    return {
        // 初始化的时候获取到仓库的数据
      num: store.num,
    };
  },
  methods: {
    handleChange(value) {
        // 在数据同步到仓库内去
      store.changeNam(value);
      // console.log(store.num);
      //   value;
    },
  },
};
</script>