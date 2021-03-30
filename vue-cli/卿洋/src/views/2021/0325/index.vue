<template>
  <div>
    <el-row>
      <el-col :span="10">
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
            icon:   <i :class="item.content"></i>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
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
          content: "el-icon-platform-eleme",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "el-icon-eleme",
        },
      ],
      tabIndex: 2,
      list: [
        "el-icon-platform-eleme",
        "el-icon-eleme",
        "el-icon-user-solid",
        "el-icon-phone",
        "el-icon-star-off",
        "el-icon-s-goods"
      ],
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: this.list[Math.floor(Math.random() * this.list.length)],
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
<style lang="less">
.el-tab-pane i {
  font-size: 30px;
}
.el-tabs__new-tab {
  border: 1px solid #666;
}
.el-tabs__new-tab i{
    color: #666;
}
</style>