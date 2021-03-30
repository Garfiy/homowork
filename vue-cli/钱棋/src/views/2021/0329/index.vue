<template>
  <div>
    <el-table style="width: 100%" :data="tableData">
      <el-table-column prop="name" label="活动名称" width="120">
      </el-table-column>
      <el-table-column prop="region" label="活动区域" width="100">
      </el-table-column>
      <el-table-column prop="date1" width="150" label="日期"></el-table-column>
      <el-table-column prop="date2" width="150" label="时间"></el-table-column>
      <el-table-column prop="delivery" width="100" label="即时配送">
      </el-table-column>
      <el-table-column prop="type" width="200" label="活动性质">
      </el-table-column>
      <el-table-column prop="resource" width="100" label="特殊资源">
      </el-table-column>
      <el-table-column prop="desc" width="100" label="活动形式">
      </el-table-column>
      <el-table-column width="100" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import store from "../../../store/store";

export default {
  data() {
    return {
      tableData: store.dataObj,
    };
  },
  methods: {
    handleDelete: function (index, row) {
      console.log(index, row);
      store.removeData(index);
    },
  },
};
</script>