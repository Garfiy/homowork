
<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="(item) in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        <i :class="getRandomIconClass()"></i>
       
      </el-tab-pane>
    </el-tabs>
  </div>
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
     
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content",

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
    getRandomIconClass() {
      let arr = [
        "star-off",
        "star-on",
        "s-platform",
        "bottom-left",
        "bottom-right",
        "refresh",
      ];
      return "el-icon-" + arr[Math.floor(Math.random() * arr.length)];
    },
  },
};
</script>