<template>
  <div>
    <el-input
      class="calculate"
      placeholder="请输入内容"
      v-model="input"
      clearable
      size="large "
    >
    </el-input>
    <el-select
      v-model="value"
      placeholder="请选择"
      size="medium"
      class="select"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-input
      class="calculate"
      placeholder="请输入内容"
      v-model="input1"
      clearable
      size="large "
    >
    </el-input>
    <el-button :plain="true" @click="open" type="primary" :loading="flag"
      >=</el-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
      value: "",
      flag: false,
      options: [
        {
          value: 1,
          label: "+",
        },
        {
          value: 2,
          label: "-",
        },
        {
          value: 3,
          label: "*",
        },
        {
          value: 4,
          label: "/",
        },
      ],
      result: "",
    };
  },
  methods: {
    open: function () {
      this.result = "结果为";
      switch (this.value) {
        case 1:
          this.result += Number(this.input) + Number(this.input1);
          break;

        case 2:
          this.result += this.input - this.input1;
          break;
        case 3:
          this.result += this.input * this.input1;
          break;
        case 4:
          this.result += this.input / this.input1;
          break;
      }
      setTimeout(() => {
        this.flag = true;
      }, 1000);
      setTimeout(() => {
        this.flag = false;
        this.$message({
          showClose: true,
          message: this.result,
          duration: 1000,
          offset: 50,
        });
      }, 2000);
    },
  },
};
</script>
<style lang="less">
.calculate {
  width: 200px;
}
.select {
  width: 90px;
}
</style>