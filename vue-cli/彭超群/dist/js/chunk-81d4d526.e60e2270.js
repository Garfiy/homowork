(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81d4d526"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var i=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"2e2c":function(t,e,n){"use strict";n("6198")},"3f82":function(t,e,n){t.exports=n.p+"img/disc.e89e0c3e.png"},"446f":function(t,e,n){"use strict";n("bc91")},"498a":function(t,e,n){"use strict";var i=n("23e7"),a=n("58a8").trim,c=n("c8d2");i({target:"String",proto:!0,forced:c("trim")},{trim:function(){return a(this)}})},5754:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrap"},[i("div",{staticClass:"play_wrap",attrs:{id:"player"}},[i("div",{staticClass:"search_bar"},[i("img",{attrs:{src:n("78a5"),alt:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onKeyupEnterSearch(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}})]),i("div",{staticClass:"center_con"},[i("div",{staticClass:"song_wrapper"},[i("ul",{staticClass:"song_list"},t._l(t.songs,(function(e,n){return i("li",{key:n},[i("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.onClickPlayAudio(e.id)}}}),i("b",[t._v(t._s(e.name))]),i("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.mvid,expression:"k.mvid != 0"}],on:{click:function(n){return t.onClickMv(e.mvid)}}},[i("i")])])})),0),i("img",{staticClass:"switch_btn",attrs:{src:n("dd36"),alt:""}})]),i("div",{staticClass:"player_con",class:{playing:t.playAudio}},[i("img",{staticClass:"play_bar",attrs:{src:n("7ef4")}}),i("img",{staticClass:"disc autoRotate",attrs:{src:n("3f82")}}),i("img",{staticClass:"cover autoRotate",attrs:{src:t.musicCover}})]),i("div",{staticClass:"comment_wrapper"},[i("h5",{staticClass:"title"},[t._v("热门留言")]),i("div",{staticClass:"comment_list"},t._l(t.hotComments,(function(e,n){return i("dl",{key:n},[i("dt",[i("img",{attrs:{src:e.user.avatarUrl,alt:""}})]),i("dd",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),i("dd",{staticClass:"detail"},[t._v(" "+t._s(e.content)+" ")])])})),0),i("img",{staticClass:"right_line",attrs:{src:n("dd36")}})])]),i("div",{staticClass:"audio_con"},[i("audio",{ref:"audio",staticClass:"myaudio",attrs:{src:t.audioUrl,controls:"controls",autoplay:"autoplay",loop:"loop"},on:{playing:function(e){t.playAudio=!0},pause:function(e){t.playAudio=!1}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.playVideo,expression:"playVideo"}],staticClass:"video_con",staticStyle:{display:"none"}},[i("video",{ref:"video",attrs:{controls:"controls",src:t.videoUrl,autoplay:"autoplay",loop:"loop"},on:{playing:function(e){t.playVideo=!0}}}),i("div",{staticClass:"mask",on:{click:function(e){t.playVideo=!1}}})])])])])},a=[],c=(n("498a"),n("841c"),n("ac1f"),{data:function(){return{search:"",songs:[],audioUrl:"",musicCover:"",playAudio:"",hotComments:[],videoUrl:"",playVideo:"",playVideoNum:0}},methods:{onKeyupEnterSearch:function(){var t=this;""!=this.search.trim()&&this.$axios.get("https://autumnfish.cn/search?keywords="+this.search).then((function(e){if(200==e.data.code){var n=e.data.result.songs;t.songs=n}}))},onClickPlayAudio:function(t){var e=this;this.$axios.get("https://autumnfish.cn/song/url?id="+t).then((function(t){if(200==t.data.code){var n=t.data.data[0].url;e.audioUrl=n,console.log(e.audioUrl)}})),this.$axios.get("https://autumnfish.cn/song/detail?ids="+t).then((function(t){if(200==t.data.code){var n=t.data.songs[0];e.musicCover=n.al.picUrl}})),this.$axios.get("https://autumnfish.cn/comment/hot?type=0&id="+t).then((function(t){200==t.data.code&&(console.log(t),e.hotComments=t.data.hotComments)}))},onClickMv:function(t){var e=this;this.$axios.get("https://autumnfish.cn/mv/url?id="+t).then((function(t){200==t.data.code&&(console.log(t),e.videoUrl=t.data.data.url,e.playVideo=!0)}))}},watch:{playVideo:function(){1==this.playVideo?(0!=this.playVideoNum&&this.$refs.video.play(),this.$refs.audio.pause(),this.playVideoNum=1):this.$refs.video.pause()}}}),s=c,r=(n("446f"),n("2e2c"),n("2877")),o=Object(r["a"])(s,i,a,!1,null,"5de07cc4",null);e["default"]=o.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("5899"),c="["+a+"]",s=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},6198:function(t,e,n){},"78a5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVERjkwMjczOUNCMzExRTlBRjNDRTMyOEIxOUMyMkQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVERjkwMjc0OUNCMzExRTlBRjNDRTMyOEIxOUMyMkQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NURGOTAyNzE5Q0IzMTFFOUFGM0NFMzI4QjE5QzIyRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NURGOTAyNzI5Q0IzMTFFOUFGM0NFMzI4QjE5QzIyRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YqeldAAAB8klEQVR42sRXgZGCMBBEhwLswHTwdPCxAimBr+D5CqQDLQE7oASs4GMH2EGsgE/mLzP7N4EEFH9ndoQQzsvdZXOs+r5PAIWhMKwNu+QvNoY6+R9siF1iHQa2/S8kGy8NtWEGY3ZOQ+MWOXsnhhVR0L0gu5LGa0NF9q1vSRq5Qhftb8OLYUtjuWFjuPdkJAYH9juEO/1msQ43kBYNabLj0vDDUHnea2HBgq7tvJLN+/K833mDECiJCtLhUjMETfPRnkMNJdRTieFzGVtGa/LbRgl3X8XWJWhsNUJNqRWeSBcUbQXZmYX1wPg7S1tN6Y+pc7GkXGCEeZFXj0RiKeCmu7HNsicVeAVOkRqvUohwx1TBYfsCh0tQFAyaLc0dPlsP1J3TWDXhT50N/YqS2AaEv/DUOT86rY3rxEXOclhCCrhTNaQjMzzS9Q7ur5RSvbSzzmERkCqfXGG9aU/9LSprGRyZMTV6WcCPdo7DoeYlj5wXC8kam0kHxz0QYRvdN4/kPYJsjr00sPtRJdzh8gyHNdvss066sUgcQOBjTq2GOYJKc6P7I2W2eabDG5I2izMzrqBRKiBqn+S0kz8eWQV2yskHzUg/nMPnz2mgPy08ffEp0NPm0COPzfN+rqWB1Crq2obqrCZKFsGQOpxhX0zCjwADAMwYH/nVvLKYAAAAAElFTkSuQmCC"},"7ef4":function(t,e,n){t.exports=n.p+"img/player_bar.3b9b552f.png"},"841c":function(t,e,n){"use strict";var i=n("d784"),a=n("825a"),c=n("1d80"),s=n("129f"),r=n("14c3");i("search",1,(function(t,e,n){return[function(e){var n=c(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var c=a(t),o=String(this),l=c.lastIndex;s(l,0)||(c.lastIndex=0);var u=r(c,o);return s(c.lastIndex,l)||(c.lastIndex=l),null===u?-1:u.index}]}))},9263:function(t,e,n){"use strict";var i=n("ad6d"),a=n("9f7f"),c=RegExp.prototype.exec,s=String.prototype.replace,r=c,o=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||l;d&&(r=function(t){var e,n,a,r,d=this,p=l&&d.sticky,h=i.call(d),v=d.source,m=0,f=t;return p&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),f=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",f=" "+f,m++),n=new RegExp("^(?:"+v+")",h)),u&&(n=new RegExp("^"+v+"$(?!\\s)",h)),o&&(e=d.lastIndex),a=c.call(p?n:d,f),p?a?(a.input=a.input.slice(m),a[0]=a[0].slice(m),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&s.call(a[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)})),a}),t.exports=r},"9f7f":function(t,e,n){"use strict";var i=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var i=n("23e7"),a=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},bc91:function(t,e,n){},c8d2:function(t,e,n){var i=n("d039"),a=n("5899"),c="​᠎";t.exports=function(t){return i((function(){return!!a[t]()||c[t]()!=c||a[t].name!==t}))}},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),a=n("d039"),c=n("b622"),s=n("9263"),r=n("9112"),o=c("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=c("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var v=c(t),m=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),f=m&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!m||!f||"replace"===t&&(!l||!u||p)||"split"===t&&!h){var g=/./[v],A=n(v,""[t],(function(t,e,n,i,a){return e.exec===s?m&&!a?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),R=A[0],y=A[1];i(String.prototype,t,R),i(RegExp.prototype,v,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&r(RegExp.prototype[v],"sham",!0)}},dd36:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAG2CAYAAAC+rezwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZCNTc3RjRCQ0ZCMTFFOUJCRTJFNEM4MTRCRjY1OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZCNTc3RjNCQ0ZCMTFFOUJCRTJFNEM4MTRCRjY1OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEYyQjZEQzM5Q0MxMTFFOUJBRjNCNUIwM0VFODQ0QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEYyQjZEQzQ5Q0MxMTFFOUJBRjNCNUIwM0VFODQ0QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6i1oRfAAAAdklEQVR42uxTWwrAIAyLPWzvf4Jtf4JiR/oAEfwJSRMKthWqKgKgdcAoV0BEJpBYhKiZUmIRk2XCbKtqWdgvnUvPNL3uzJkFj7qV/C2M7MKZ8HaYpAse0mAlwVhjJc3av0G4/tz+BsH3EjP1b4tgfkkYNnwCDAAzuqSgfrmyhAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-81d4d526.e60e2270.js.map