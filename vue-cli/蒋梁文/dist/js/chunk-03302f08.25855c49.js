(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03302f08"],{"19ef":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",[l("el-col",{attrs:{span:3}},[l("el-input",{attrs:{type:"text",placeholder:"请输入内容"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.keyup1(t)}},model:{value:e.onefirst,callback:function(t){e.onefirst=t},expression:"onefirst "}})],1),l("el-col",{attrs:{span:1}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-col",{attrs:{span:3}},[l("el-input",{ref:"input2",staticClass:"input",attrs:{placeholder:"请输入内容",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.keyup2(t)}},model:{value:e.twofirst,callback:function(t){e.twofirst=t},expression:"twofirst "}})],1),l("el-col",{attrs:{span:1}},[l("el-button",{on:{click:e.onCcalculate}},[e._v("=")])],1),l("span",{staticClass:"box",domProps:{textContent:e._s(e.calculate)}})],1)],1)},a=[],s={data:function(){return{onefirst:"",select:"+",twofirst:"",calculate:"",options:[{value:"选择一",label:"+"},{value:"选择二",label:"-"},{value:"选择三",label:"*"},{value:"选择四",label:"/"}]}},methods:{keyup1:function(){this.$refs.input2.focus()},keyup2:function(){this.onCcalculate()},onCcalculate:function(){var e,t=this.select,l=parseInt(this.onefirst),n=parseInt(this.twofirst);switch(t){case"+":e=l+n;break;case"-":e=l-n;break;case"*":e=l*n;break;case"/":e=l/n;break}this.calculate=e}}},o=s,c=(l("8ba1"),l("2877")),u=Object(c["a"])(o,n,a,!1,null,null,null);t["default"]=u.exports},"8ba1":function(e,t,l){"use strict";l("ff1a")},ff1a:function(e,t,l){}}]);
//# sourceMappingURL=chunk-03302f08.25855c49.js.map