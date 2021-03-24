
<template>
  <!-- 保持template这个标签内容只有一个标签 -->
  <div>
    <h1 v-text="msg"></h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "2021-0324",
    };
  },
};
</script>