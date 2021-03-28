<template>
 <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <el-tab-pane
    :key="item.name"
    v-for="(item) in editableTabs"
    :label="item.title"
    :name="item.name">
    {{item.content}}
    <!-- <i :class="item.tub"></i> -->
    <i :class="getTub()">{{getTub()}}</i>
    <!-- <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i> -->
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
          content: 'Tab 1 content',
        //   tub:'el-icon-edit'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        }],
        tabIndex: 2,
        tub:['el-icon-edit','el-icon-share','el-icon-delete','el-icon-eleme','el-icon-platform-eleme','el-icon-star-off'],
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: this.getTub(),
            name: newTabName,
            content: 'Tab'
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
      },
      getTub(){ 
        let result= Math.floor(Math.random() * this.tub.length);
        // console.log(result);
        // return Math.round( Math.random(0,this.tub.length-1));
        return this.tub[result]
      }

    }
  }
</script>