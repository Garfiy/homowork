(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a261da7"],{"3df2":function(e,r,t){"use strict";t.r(r);var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"上海",value:"上海"}}),t("el-option",{attrs:{label:"北京",value:"北京"}})],1)],1),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),t("span",{domProps:{innerHTML:e._s(e.summed)}})],1)},o=[],a=(t("b0c0"),{data:function(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},summed:""}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(r.ruleForm),r.summed="活动名称："+r.ruleForm.name+"<br>活动区域："+r.ruleForm.region+"<br>活动时间："+r.formatTime(r.ruleForm.date2)+"<br>活动性质："+r.ruleForm.type[0]+"<br>特殊资源："+r.ruleForm.resource+"<br>活动形式："+r.ruleForm.desc}))},resetForm:function(e){this.$refs[e].resetFields()},formatTime:function(e){var r=e.getFullYear(),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,l=e.getDate()<10?"0"+e.getDate():e.getDate(),o=e.getHours()<10?"0"+e.getHours():e.getHours(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),n=e.getMilliseconds()<10?"0"+e.getMilliseconds():e.getMilliseconds();return r+"-"+t+"-"+l+" "+o+":"+a+":"+s+":"+n}}}),s=a,n=t("2877"),u=Object(n["a"])(s,l,o,!1,null,null,null);r["default"]=u.exports},b0c0:function(e,r,t){var l=t("83ab"),o=t("9bf2").f,a=Function.prototype,s=a.toString,n=/^\s*function ([^ (]*)/,u="name";l&&!(u in a)&&o(a,u,{configurable:!0,get:function(){try{return s.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-2a261da7.07bcc20a.js.map