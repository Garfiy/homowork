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
import store from '../../../store/store';
console.log(store);
export default {
  data() {
    return {
      num: store.num,
    };
  },
  methods: {
    handleChange(value) {
      store.changeNum(value);
    },
  },
};
</script>