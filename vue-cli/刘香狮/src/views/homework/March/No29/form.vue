<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date1" label="日期" width="100" align="center"></el-table-column>
      <el-table-column prop="name" align="center" label="活动名称" width="120"></el-table-column>
      <el-table-column prop="region" align="center" label="活动区域" width="120"></el-table-column>
      <el-table-column prop="date2" align="center" label="时间" width="120"></el-table-column>
      <el-table-column prop="delivery" align="center" label="及时配送"  width="80"></el-table-column>
      <el-table-column prop="type" :formatter='formatter' label="活动性质" width="160" align="center"></el-table-column>
      <el-table-column prop="resource" label="特殊资源" width="120" align="center"></el-table-column>
      <el-table-column prop="desc" label="活动形式" width="120" align="center"></el-table-column>
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
  </div>
</template>
<script>
import form from "../../../../store/form";
export default {
  data() {
    return {
      tableData: form.data,
      yes:'',
    };
  },
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      formatter(row){
        console.log(row.type.join(',')); 
        if(row.delivery){
            row.delivery='是'
        }else{
            row.delivery='否'
        }
        return row.type.join(' , ')
    }
    },
    
    created() {
       
        
    },
};
</script>