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
        v-for="(item) in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
        
        添加小东西: <i :class="item.content"></i>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="less">
    .el-icon-user {
        margin-top: 50px;
    }
</style>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2', 
        distis:['el-icon-platform-eleme','el-icon-eleme','el-icon-delete-solid','el-icon-delete','el-icon-star-on','el-icon-s-goods','el-icon-success','el-icon-help','el-icon-picture-outline-round','el-icon-s-unfold','el-icon-s-management','el-icon-s-opportunity'],
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: this.distis[Math.floor(Math.random()*this.distis.length)]
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