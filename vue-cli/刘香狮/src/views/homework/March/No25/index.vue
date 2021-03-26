<template>
  <div>
    <div style="margin-bottom: 20px">
      <el-button size="small" @click="addTab(value)" class="el-icon-plus">
        新添加
      </el-button>
    </div>
    <el-tabs
      v-model="value"
      type="card"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
       <span v-html="item.content"></span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: '<i class="el-icon-s-promotion"></i>'
        }, {
          title: 'Tab 2',
          name: '2',
          content: '<i class="el-icon-loading"></i>'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab() {
        let newTabName = ++this.tabIndex + '';
        console.log(this.tabIndex);
        this.editableTabs.push({
          title: 'Tab '+ ''+this.tabIndex,
          name: newTabName,
          content: '<i class="el-icon-message-solid"></i>'
        });
        this.value = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.value;
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
        
        this.value = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>

<style lang="less">
   i {
       font-size: 50px;
   }
   i:hover{
       color: #0ae;
   }
</style>