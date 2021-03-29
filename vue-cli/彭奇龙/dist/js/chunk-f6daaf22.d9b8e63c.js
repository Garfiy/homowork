(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6daaf22"],{"07a4":function(e,r,t){"use strict";r["a"]={num:1,changeNum:function(e){this.num=e},arr:[]}},"159b":function(e,r,t){var o=t("da84"),l=t("fdbc"),a=t("17c2"),n=t("9112");for(var s in l){var u=o[s],i=u&&u.prototype;if(i&&i.forEach!==a)try{n(i,"forEach",a)}catch(c){i.forEach=a}}},"17c2":function(e,r,t){"use strict";var o=t("b727").forEach,l=t("a640"),a=l("forEach");e.exports=a?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},"65f0":function(e,r,t){var o=t("861d"),l=t("e8b5"),a=t("b622"),n=a("species");e.exports=function(e,r){var t;return l(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!l(t.prototype)?o(t)&&(t=t[n],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===r?0:r)}},"835d":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"上海",value:"上海"}}),t("el-option",{attrs:{label:"北京",value:"北京"}})],1)],1),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),t("span",{domProps:{innerHTML:e._s(e.summed)}})],1)},l=[],a=(t("159b"),t("b0c0"),t("07a4")),n={data:function(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},summed:""}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var t=r.formatTime(r.ruleForm.date2);r.ruleForm.date2=t,a["a"].arr.push(r.ruleForm),console.log(r.ruleForm);var o="";r.ruleForm.type.forEach((function(e){o+=e+"&nbsp"})),r.ruleForm.delivery?r.ruleForm.delivery="是":r.ruleForm.delivery="否",r.summed="活动名称："+r.ruleForm.name+"<br>活动区域："+r.ruleForm.region+"<br>活动时间："+t+"<br>活动性质："+o+"<br>及时配送："+r.ruleForm.delivery,r.ruleForm.resource,r.ruleForm.desc,r.$router.push({path:"/homework/2021/0329/12"})}))},resetForm:function(e){this.$refs[e].resetFields()},formatTime:function(e){var r=e.getFullYear(),t=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0"+e.getDate():e.getDate(),l=e.getHours()<10?"0"+e.getHours():e.getHours(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),n=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),s=e.getMilliseconds()<10?"0"+e.getMilliseconds():e.getMilliseconds();return r+"-"+t+"-"+o+" "+l+":"+a+":"+n+":"+s}}},s=n,u=t("2877"),i=Object(u["a"])(s,o,l,!1,null,null,null);r["default"]=i.exports},a640:function(e,r,t){"use strict";var o=t("d039");e.exports=function(e,r){var t=[][e];return!!t&&o((function(){t.call(null,r||function(){throw 1},1)}))}},b0c0:function(e,r,t){var o=t("83ab"),l=t("9bf2").f,a=Function.prototype,n=a.toString,s=/^\s*function ([^ (]*)/,u="name";o&&!(u in a)&&l(a,u,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})},b727:function(e,r,t){var o=t("0366"),l=t("44ad"),a=t("7b0b"),n=t("50c4"),s=t("65f0"),u=[].push,i=function(e){var r=1==e,t=2==e,i=3==e,c=4==e,m=6==e,d=7==e,f=5==e||m;return function(p,g,b,h){for(var F,v,y=a(p),x=l(y),k=o(g,b,3),w=n(x.length),$=0,M=h||s,E=r?M(p,w):t||d?M(p,0):void 0;w>$;$++)if((f||$ in x)&&(F=x[$],v=k(F,$,y),e))if(r)E[$]=v;else if(v)switch(e){case 3:return!0;case 5:return F;case 6:return $;case 2:u.call(E,F)}else switch(e){case 4:return!1;case 7:u.call(E,F)}return m?-1:i||c?c:E}};e.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6),filterOut:i(7)}},e8b5:function(e,r,t){var o=t("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);
//# sourceMappingURL=chunk-f6daaf22.d9b8e63c.js.map