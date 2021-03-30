<template>
  <el-input-number
    v-model="num"
    @change="handleChange"
    :min="1"
    :max="10"
    label="描述文字"
  ></el-input-number>
</template>
<script>
// 引用仓库对象
import store from "../../../store/store";
export default {
  data() {
    return {
      // 初始化的时候获取仓库中的数据
      num: store.num,
    };
  },
  methods: {
    handleChange(value) {
      // 数据改变时,同步调整仓库中数据
      store.changeNum(value);
    },
  },
};
</script>   