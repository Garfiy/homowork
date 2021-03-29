<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date1" label="日期" width="100"></el-table-column>
      <el-table-column prop="name" label="活动名称" width="120"></el-table-column>
      <el-table-column prop="region" label="活动区域" width="120"></el-table-column>
      <el-table-column prop="date2" label="时间" width="120"></el-table-column>
      <el-table-column prop="delivery" label="及时配送" width="80"></el-table-column>
      <el-table-column prop="type" label="活动性质" width="120"></el-table-column>
      <el-table-column prop="resource" label="特殊资源" width="120"></el-table-column>
      <el-table-column prop="desc" label="活动形式" width="120"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    // deleteRow(index, rows) {
    //   rows.splice(index, 1);
    // },
    // 拷贝数据
    deepClone: function (obj) {
      let copy = Object.create(Object.getPrototypeOf(obj));
      let propNames = Object.getOwnPropertyNames(obj);
      propNames.forEach(function (items) {
        let item = Object.getOwnPropertyDescriptor(obj, items);
        Object.defineProperty(copy, items, item);
      });
      return copy;
    },
  },

  mounted() {
    this.tableData.push(this.deepClone(this.$route.params.tableData));
    if(this.tableData[0].delivery){
      this.tableData[0].delivery='是'
    }else {
      this.tableData[0].delivery='否'
    }
  },
};
</script>