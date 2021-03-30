<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date1" label="日期" width="100"></el-table-column>
      <el-table-column prop="name" label="活动名称" width="120"></el-table-column>
      <el-table-column prop="region" label="活动区域" width="120"></el-table-column>
      <el-table-column prop="date2" label="时间" width="120"></el-table-column>
      <el-table-column prop="delivery" label="及时配送" width="80"></el-table-column>
      <el-table-column prop="type" :formatter="formatter" label="活动性质" width="160"></el-table-column>
      <el-table-column prop="resource" label="特殊资源" width="120"></el-table-column>
      <el-table-column prop="desc" label="活动形式" width="120"></el-table-column>
      <el-table-column>
        <template #default="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import store from '../../../../store/store'
export default {
    data() {
        return {
            tableData:store.data
        }
    },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    formatter(row){
        
        // console.log(row.type);
        return row.type.join(' , ');
    }
  },
};

</script>