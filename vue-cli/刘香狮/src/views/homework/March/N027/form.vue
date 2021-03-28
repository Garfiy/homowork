<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date1" label="日期" width="100">
      </el-table-column>
      <el-table-column prop="name" label="活动名称" width="120">
      </el-table-column>
      <el-table-column prop="region" label="活动区域" width="120">
      </el-table-column>
      <el-table-column prop="date2" label="时间" width="120"> </el-table-column>
      <el-table-column prop="delivery" label="及时配送" width="80">
      </el-table-column>
      <el-table-column prop="type" label="活动性质" width="120">
      </el-table-column>
      <el-table-column prop="resource" label="特殊资源" width="120">
      </el-table-column>
      <el-table-column prop="desc" label="活动形式" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  data() {
    return {};
  },
  props: {
    tableData: [
      {
        date1: "2016-05-03",
        name: "王小虎",
        region: "上海",
        date2: "普陀区",
        delivery: "是",
        type: [],
        resource: "",
        desc: "",
      },
    ],
  },
};
</script>