(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cfa43b0"],{"19ef":function(t,e,n){"use strict";n.r(e);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:3}},[n("el-input",{attrs:{placeholder:"请输入数字",type:"number"},on:{change:t.onKeyupEnter1},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}})],1),n("el-col",{attrs:{span:1}},[n("el-select",{on:{change:t.onClickResult},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return n("el-option",{key:t,attrs:{value:t}})})),1)],1),n("el-col",{attrs:{span:3}},[n("el-input",{ref:"input2",attrs:{placeholder:"请输入数字",type:"number"},on:{change:t.onKeyupEnter2},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1),n("el-col",{attrs:{span:1}},[n("el-button",{on:{click:t.onClickResult}},[t._v("=")])],1),n("el-col",{attrs:{span:3}},[n("el-tag",{domProps:{textContent:t._s(t.text)}})],1)],1)],1)},l=[],o=n("eacd"),i=o["a"],a=(n("6a47"),n("2877")),s=Object(a["a"])(i,u,l,!1,null,null,null);e["default"]=s.exports},"6a47":function(t,e,n){"use strict";n("7a28")},"7a28":function(t,e,n){},eacd:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={data:function(){return{input1:"",input2:"",options:["+","-","*","/"],value:"+",text:" "}},methods:{onClickResult:function onClickResult(){this.input1&&this.input2&&(this.text=eval(this.input1+this.value+this.input2))},onKeyupEnter1:function(){this.$refs.input2.focus()},onKeyupEnter2:function(){this.onClickResult(),this.$refs.input2.blur()}}}}}]);
//# sourceMappingURL=chunk-3cfa43b0.438ba7be.js.map