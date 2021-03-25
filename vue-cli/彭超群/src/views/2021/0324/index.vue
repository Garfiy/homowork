
<template>
  <!-- 保持template这个标签内容只有一个标签 -->
  <div>
    <el-row>
      <el-col :span="3">
        <el-input
          v-model="input1"
          placeholder="请输入数字"
          type="number"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="input2"
          placeholder="请输入数字"
          type="number"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-button @click="onClickResult">=</el-button>
      </el-col>
      <el-col :span="3">
        <el-tag v-text="text"></el-tag>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      options: [
        {
          value: "+",
          label: "+",
        },
        {
          value: "-",
          label: "-",
        },
        {
          value: "*",
          label: "*",
        },
        {
          value: "/",
          label: "/",
        },
      ],
      value: "+",
      text: " ",
    };
  },
  methods: {
    onClickResult: function () {
      if (this.input1 && this.input2) {
          this.text = eval(this.input1 + this.value + this.input2);
      }
    },
  },
};
</script>

<style lang="css">

input[type=number] {
    -moz-appearance:textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>