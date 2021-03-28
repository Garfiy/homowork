
<template>
  <!-- 保持template这个标签内容只有一个标签 -->
  <div>
    <el-row :gutter="10">
      <el-col :span="3">
        <el-input
          v-model="input1"
          placeholder="请输入数字"
          type="number"
          @change="onKeyupEnter1"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-select v-model="value" @change="onClickResult">
          <el-option
            v-for="item in options"
            :key="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="input2"
          placeholder="请输入数字"
          type="number"
          @change="onKeyupEnter2"
          ref="input2"
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
      options: ["+", "-", "*", "/"],
      value: "+",
      text: " ",
    };
  },
  methods: {
    onClickResult: function () {
      if (this.input1 && this.input2) {
        //eval 将字符串当做脚本执行
        this.text = eval(this.input1 + this.value + this.input2);
      }
    },
    onKeyupEnter1: function () {
      //$refs 可以绑定标签元素
      this.$refs.input2.focus();
    },
    onKeyupEnter2: function () {
      this.onClickResult();
      //$refs 可以绑定标签元素
      this.$refs.input2.blur();
    },
  },
};
</script>

<style lang="less">
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.el-tag {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
}
</style>