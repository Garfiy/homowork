<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        :key="item.name"
        v-for="item in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }} <i :class="item.src"></i>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="less">
.select {
  display: inline-block;
  border: 1px solid beige;
  padding: 6px;
}

.select_active {
  background-color: aquamarine;
}
</style>
<script>
export default {
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
          src:'el-icon-goods'
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
          src:'el-icon-star-off'
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "Tab "+this.tabIndex,
          name: newTabName,
          content: "Tab "+this.tabIndex+" content",
          src:'el-icon-s-goods'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      }
    },
  },
};
</script>