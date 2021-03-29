(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229a06"],{ddf6:function(e,r,l){"use strict";l.r(r);var t=function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("div",[l("el-row",[l("el-col",{attrs:{span:10}},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[l("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),l("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[l("el-option",{attrs:{label:"区域一",value:"区域一"}}),l("el-option",{attrs:{label:"区域二",value:"区域二"}})],1)],1),l("el-form-item",{attrs:{label:"活动时间",required:""}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{prop:"date1"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{prop:"date2"}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间","value-format":"hh:mm:ss"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),l("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[l("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),l("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[l("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[l("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),l("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),l("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),l("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),l("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[l("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[l("el-radio",{attrs:{label:"线上品牌商赞助"}}),l("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),l("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),l("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:10}},[l("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}]},[l("h3",[e._v("活动内容")]),l("div",[e._v("活动名称: "+e._s(e.ruleForm.name))]),l("div",[e._v("活动区域: "+e._s(e.ruleForm.region))]),l("div",[e._v("活动时间: "+e._s(e.ruleForm.date1)+" ---- "+e._s(e.ruleForm.date2))]),l("div",[e._v("即时配送: "+e._s(e.delivery))]),l("div",[e._v(" 活动性质: "),e._l(e.ruleForm.type,(function(r,t){return l("span",{key:t},[e._v(" "+e._s(r)+" ")])}))],2),l("div",[e._v("特殊资源: "+e._s(e.ruleForm.resource))]),l("div",[e._v("活动形式: "+e._s(e.ruleForm.desc))])])])],1)],1)},a=[],o=l("bc73"),s={data:function(){return{ruleForm:{name:"",region:"",delivery:!1,type:[],resource:"",desc:"",date1:"",date2:""},flag:!1,delivery:!1,date1:"",date2:"",rules:{date1:[{required:!0,message:"请选择日期",trigger:"change"}],date2:[{required:!0,message:"请选择时间",trigger:"change"}],name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;o["a"].__file="2021/0328/submit/"+this.ruleForm,this.$refs[e].validate((function(e){if(r.flag=!1,!e)return console.log("error submit!!"),!1;console.log(e),r.flag=e,r.ruleForm.delivery?r.delivery="是":r.delivery="否"}))},resetForm:function(e){this.flag=!1,this.$refs[e].resetFields()}},watch:{ruleForm:{handler:function(){this.flag=!1},deep:!0}}},i=s,u=l("2877"),m=Object(u["a"])(i,t,a,!1,null,null,null);r["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d229a06.508dfc32.js.map