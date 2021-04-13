<template>
  <el-table
    :data="tableData"
    style="width: 80%"
    max-height="250">
    <el-table-column
      fixed
      prop="date2"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="活动名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="region"
      label="活动区域"
      width="120">
    </el-table-column>
    <el-table-column
      prop="type"
      label="活动性质"
      width="120">
    </el-table-column>
    <el-table-column
      prop="resource"
      label="特殊资源"
      width="300">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="活动形式"
      width="120">
    </el-table-column>
    <el-table-column
      prop="delivery"
      label="及时配送"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import store from '../../../store/store';
// import store from '../../store/store';
  export default {
      data() {
      return {
        tableData: store.arr
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
  
  }
</script>