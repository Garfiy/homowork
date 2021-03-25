<template>
 <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <el-tab-pane 
    v-for="(item) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}<i :class="edit[Math.floor(Math.random()*edit.length)]"></i>
  </el-tab-pane>
</el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: '天气 1',
          name: '1',
          content: '天气 1'
        }, {
          title: '天气 2',
          name: '2',
          content: '天气 2'
        }],
        tabIndex: 2,
        edit:['el-icon-light-rain','el-icon-lightning','el-icon-heavy-rain','el-icon-sunrise','el-icon-sunny','el-icon-cloudy','el-icon-cloudy-and-sunny','el-icon-moon'],
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: '天气'+newTabName,
            name: newTabName,
            content: '天气'+newTabName,
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
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
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>