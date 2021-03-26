<template>
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane :key="item.name" v-for="(item,index) in editableTabs" :label="item.title" :name="item.name">
            {{item.content}}
            <i :class="icon[index]"></i>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
  export default {
       data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        icon:['el-icon-platform-eleme','el-icon-eleme','el-icon-delete-solid','el-icon-delete','el-icon-s-tools','el-icon-setting','el-icon-user-solid','el-icon-user','el-icon-phone','el-icon-phone-outline','el-icon-more','el-icon-more-outline','el-icon-star-on','el-icon-star-off','el-icon-s-goods','el-icon-goods','el-icon-warning','el-icon-warning-outline'],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: ' Tab'+newTabName,
            name: newTabName,
            content: 'Tab' + newTabName + ' content'
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
  };
</script>