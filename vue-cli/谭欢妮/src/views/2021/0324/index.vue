
<template>
  <!-- 保持template这个标签内容只有一个标签 -->
  <div>
    <el-row>
      <el-col :span="3">
        <el-input
          v-model="test1"
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
          v-model="test2"
          placeholder="请输入数字"
          @keydown.enter="onClickResult"
          type="number"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-button @click="onClickResult">=</el-button>
      </el-col>
      <el-col :span="3">
        <el-alert v-text="text" type="success"> </el-alert>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test1: "0",
      test2: "0",
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
      text: "0",
    };
  },
  methods: {
    onClickResult: function () {
      if (this.test1 && this.test2) {
          this.text = eval(this.test1 + this.value + this.test2);
      }
    },
  },
};
</script>

