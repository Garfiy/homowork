<template>
  <div>123</div>
</template>

<script>
export default {
  created() {
    this.$axios.get("https://cdn.ycku.com/data.json").then(res => {
      console.log(res);
    });

    this.$axios.get("https://cdn.liyanhui.com/data.json").then(res => {
      console.log(res);
    });
  },
};
</script>