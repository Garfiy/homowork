<template>
  <el-table
    :data="ruleForm"
    style="width: 100%"
    max-height="250">
    <el-table-column
      prop="name"
      label="活动名称"
      width="100">
    </el-table-column>
    <el-table-column
      prop="region"
      label="活动地点"
      width="100">
    </el-table-column>
    <!-- <el-table-column
      prop="date1"
      label="内容"
      width="100">
    </el-table-column>
    <el-table-column
      prop="date2"
      label="内容"
      width="120">
    </el-table-column> -->
    <el-table-column
      prop="delivery"
      label="及时配送"
      width="120">
    </el-table-column>
    <el-table-column
      prop="type"
      label="活动性质"
      width="200">
    </el-table-column>
      <el-table-column
      prop="resource"
      label="特殊资源"
      width="140">
    </el-table-column>
       <el-table-column
      prop="desc"
      label="活动形式"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, ruleForm)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// 引用仓库对象
import store from '../../../store/store';
store;

  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        ruleForm:[store.ruleForm],
      }
    },
  }

//   this.$router.push('/homework/2021/0329');
    // store.changeNum(this.ruleForm);

</script>