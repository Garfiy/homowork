<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane v-for="(item) in editableTabs" :key="item.name"
      :label="item.title"
      :name="item.name"
    >{{item.content}}<i :class="edit[Math.floor(Math.random()* edit.length)]"></i></el-tab-pane>
  </el-tabs>
</template>



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
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
      edit:["el-icon-platform-eleme","el-icon-phone","el-icon-more","el-icon-delete-solid","el-icon-picture-outline-round","el-icon-s-unfold"]
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        // console.log(newTabName);
        this.editableTabs.push({
          title: "Tab" + newTabName,
          name: newTabName,
          content:  "Tab"+ newTabName +" content",
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