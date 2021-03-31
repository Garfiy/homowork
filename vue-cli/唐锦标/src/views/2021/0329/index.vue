<template>
  <div>
    <el-table style="width: 100%" :data="newDate">
      <el-table-column prop="name" label="活动名称" width="120"></el-table-column>
      <el-table-column prop="region" label="活动区域" width="100"></el-table-column>
      <el-table-column prop="date2" width="150" label="时间"></el-table-column>
      <el-table-column prop="delivery" width="100" label="即时配送"></el-table-column>
      <el-table-column prop="type" width="200" label="活动性质"></el-table-column>
      <el-table-column prop="resource" width="100" label="特殊资源"></el-table-column>
      <el-table-column prop="desc" width="100" label="活动形式"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import store from '../../../store/stores'

export default {
  data() {
    return {
      newDate:[store.ruleForm]
    };
  },
  methods: {
    
  },
};
</script>