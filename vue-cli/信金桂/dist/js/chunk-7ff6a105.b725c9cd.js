(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff6a105"],{"0e94":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-tabs",{attrs:{type:"card",editable:""},on:{edit:t.handleTabsEdit},model:{value:t.editableTabsValue,callback:function(e){t.editableTabsValue=e},expression:"editableTabsValue"}},t._l(t.editableTabs,(function(e){return n("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name}},[t._v(" "+t._s(e.content)+" "),n("i",{class:t.getTub()},[t._v(t._s(t.getTub()))])])})),1)},r=[],i=(n("159b"),n("b0c0"),n("4de4"),{data:function(){return{editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2,tub:["el-icon-edit","el-icon-share","el-icon-delete","el-icon-eleme","el-icon-platform-eleme","el-icon-star-off"]}},methods:{handleTabsEdit:function(t,e){if("add"===e){var n=++this.tabIndex+"";this.editableTabs.push({title:this.getTub(),name:n,content:"Tab"}),this.editableTabsValue=n}if("remove"===e){var a=this.editableTabs,r=this.editableTabsValue;r===t&&a.forEach((function(e,n){if(e.name===t){var i=a[n+1]||a[n-1];i&&(r=i.name)}})),this.editableTabsValue=r,this.editableTabs=a.filter((function(e){return e.name!==t}))}},getTub:function(){var t=Math.floor(Math.random()*this.tub.length);return console.log(t),this.tub[t]}}}),o=i,c=n("2877"),u=Object(c["a"])(o,a,r,!1,null,null,null);e["default"]=u.exports},"159b":function(t,e,n){var a=n("da84"),r=n("fdbc"),i=n("17c2"),o=n("9112");for(var c in r){var u=a[c],l=u&&u.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(s){l.forEach=i}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,r=n("a640"),i=r("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var a=n("d039"),r=n("b622"),i=n("2d00"),o=r("species");t.exports=function(t){return i>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").filter,i=n("1dde"),o=i("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var a=n("861d"),r=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,o=i.toString,c=/^\s*function ([^ (]*)/,u="name";a&&!(u in i)&&r(i,u,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,n){var a=n("0366"),r=n("44ad"),i=n("7b0b"),o=n("50c4"),c=n("65f0"),u=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,s=4==t,f=6==t,b=7==t,d=5==t||f;return function(h,v,p,T){for(var m,y,g=i(h),x=r(g),E=a(v,p,3),w=o(x.length),V=0,_=T||c,A=e?_(h,w):n||b?_(h,0):void 0;w>V;V++)if((d||V in x)&&(m=x[V],y=E(m,V,g),t))if(e)A[V]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return V;case 2:u.call(A,m)}else switch(t){case 4:return!1;case 7:u.call(A,m)}return f?-1:l||s?s:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-7ff6a105.b725c9cd.js.map