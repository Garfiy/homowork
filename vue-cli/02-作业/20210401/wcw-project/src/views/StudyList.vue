<template>
  <div>
    <h1>学生成绩列表</h1>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="120"> </el-table-column>

      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>

      <el-table-column prop="result" label="成绩" width="120">
      </el-table-column>

      <el-table-column fixed="right" label="详情" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
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
  created() {
    this.tableData = this.$store.state.infoList;
  },
  methods: {
    handleClick(row) {
      // console.log(row);
      let id = row.id;
      if (id) {
        this.$router.push({
          name: "studyInfo",
          query: {
            id,
          },
        });
      }
    },
  },
};
</script>