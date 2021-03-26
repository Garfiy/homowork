<template>
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
      {{ item.content }}
      <i :class="test[Math.floor(Math.random() * test.length)]"></i>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "张云雷",
          name: "1",
          content: "杨九郎",
        },
        {
          title: "秦霄贤",
          name: "2",
          content: "孙九香",
        },
        {
          title: "尚九熙",
          name: "3",
          content: "何九华",
        },
      ],
      tabIndex: 3,
      test: [
        "el-icon-cold-drink",
        "el-icon-watermelon",
        "el-icon-grape",
        "el-icon-coffee",
      ],
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "德云社",
          name: newTabName,
          content: "孟鹤堂 周九良 王九龙 张九龄 关九海 郭麒麟 栾云平",
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