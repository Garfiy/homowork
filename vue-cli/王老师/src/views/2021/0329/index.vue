<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column fixed prop="active_name" label="活动名称" width="150">
    </el-table-column>
    <el-table-column prop="active_city" label="活动区域" width="120">
    </el-table-column>
    <el-table-column
      prop="active_time"
      label="活动时间"
      width="200"
      :formatter="formatter1"
    >
    </el-table-column>
    <el-table-column prop="just_time" label="即时配送" width="120">
    </el-table-column>
    <el-table-column
      prop="active_nature"
      label="活动性质"
      width="100"
      :formatter="formatter2"
    >
    </el-table-column>
    <el-table-column prop="special_res" label="特殊资源" width="120">
    </el-table-column>
    <el-table-column prop="active_form" label="活动形式" width="120">
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
</template>

<script>
import store from "../../../store/store";

export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    formatter1(row) {
    //   console.log("formatter1");
    //   console.log(row);
    //   console.log(column);

      let str = row.active_time;
      let flag = "";
      if (str.indexOf("AM") > -1) {
        flag = "AM";
      } else if (str.indexOf("PM") > -1) {
        flag = "PM";
      }

      let ss = str.split(flag);
      ss = ss[0] + " " + flag + ss[1];
      ss;
      return ss;
    },
    formatter2(row) {
    //   console.log("formatter2");
    //   console.log(row);
    //   console.log(column);
      return row.active_nature.join(" , ");
    },
  },
  data() {
    return {
      tableData: store.tableData,
    };
  },
};
</script>