(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3b58646"],{1201:function(t,e,i){},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,i){var n=i("c6b6"),a=i("9263");t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var s=i.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"3f82":function(t,e,i){t.exports=i.p+"img/disc.e89e0c3e.png"},"498a":function(t,e,i){"use strict";var n=i("23e7"),a=i("58a8").trim,s=i("c8d2");n({target:"String",proto:!0,forced:s("trim")},{trim:function(){return a(this)}})},"52e5":function(t,e,i){"use strict";i("1201")},"571b":function(t,e,i){},5754:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrap"},[n("div",{staticClass:"play_wrap",attrs:{id:"player"}},[n("div",{staticClass:"search_bar"},[n("img",{attrs:{src:i("78a5"),alt:""}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onKeyupEnterSearch(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}})]),n("div",{staticClass:"center_con"},[n("div",{staticClass:"song_wrapper"},[n("ul",{staticClass:"song_list"},t._l(t.songs,(function(e,i){return n("li",{key:i},[n("a",{attrs:{href:"javascript:;"},on:{click:function(i){return t.onClickPlayAudio(e.id)}}}),n("b",[t._v(t._s(e.name))]),n("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.mvid,expression:"k.mvid != 0"}],on:{click:function(i){return t.onClickMv(e.mvid)}}},[n("i")])])})),0),n("img",{staticClass:"switch_btn",attrs:{src:i("dd36"),alt:""}})]),n("div",{staticClass:"player_con",class:{playing:t.playAudio}},[n("img",{staticClass:"play_bar",attrs:{src:i("7ef4")}}),n("img",{staticClass:"disc autoRotate",attrs:{src:i("3f82")}}),n("img",{staticClass:"cover autoRotate",attrs:{src:t.musicCover}})]),n("div",{staticClass:"comment_wrapper"},[n("h5",{staticClass:"title"},[t._v("热门留言")]),n("div",{staticClass:"comment_list"},t._l(t.hotComments,(function(e,i){return n("dl",{key:i},[n("dt",[n("img",{attrs:{src:e.user.avatarUrl,alt:""}})]),n("dd",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),n("dd",{staticClass:"detail"},[t._v(" "+t._s(e.content)+" ")])])})),0),n("img",{staticClass:"right_line",attrs:{src:i("dd36")}})])]),n("div",{staticClass:"audio_con"},[n("audio",{ref:"audio",staticClass:"myaudio",attrs:{src:t.audioUrl,controls:"controls",autoplay:"autoplay",loop:"loop"},on:{playing:function(e){t.playAudio=!0},pause:function(e){t.playAudio=!1}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.playVideo,expression:"playVideo"}],staticClass:"video_con",staticStyle:{display:"none"}},[n("video",{ref:"video",attrs:{controls:"controls",src:t.videoUrl,autoplay:"autoplay",loop:"loop"},on:{playing:function(e){t.playVideo=!0}}}),n("div",{staticClass:"mask",on:{click:function(e){t.playVideo=!1}}})])])])])},a=[],s=(i("498a"),i("841c"),i("ac1f"),{data:function(){return{search:"",songs:[],audioUrl:"",musicCover:"",playAudio:"",hotComments:[],videoUrl:"",playVideo:"",playAudioNum:0,playVideoNum:0,baseUrl:"",audioId:null,videoId:null,flag:!1}},created:function(){var t=this;this.baseUrl=this.$axios.defaults.baseURL,this.$axios.defaults.baseURL="https://autumnfish.cn/",window.addEventListener("keyup",(function(e){"Escape"==e.code&&(t.playVideo=!1)}))},destroyed:function(){this.$axios.defaults.baseURL=this.baseUrl},methods:{onKeyupEnterSearch:function(){var t=this;""!=this.search.trim()&&this.$axios.get("search?keywords="+this.search).then((function(e){if(200==e.data.code){var i=e.data.result.songs;t.songs=i}}))},onClickPlayAudio:function(t){var e=this;this.audioId!=t&&(this.$axios.get("song/url?id="+t).then((function(t){if(200==t.data.code){var i=t.data.data[0].url;e.audioUrl=i,console.log(e.audioUrl)}})),this.$axios.get("song/detail?ids="+t).then((function(t){if(200==t.data.code){var i=t.data.songs[0];e.musicCover=i.al.picUrl}})),this.$axios.get("comment/hot?type=0&id="+t).then((function(t){200==t.data.code&&(console.log(t),e.hotComments=t.data.hotComments)}))),0!=this.playAudioNum&&(1==this.playAudio?this.playAudio=!1:this.playAudio=!0,1==this.playAudio?this.$refs.audio.play():this.$refs.audio.pause()),this.playAudioNum=1,this.audioId=t},onClickMv:function(t){var e=this;this.flag=this.playAudio,this.videoId!=t?this.$axios.get("mv/url?id="+t).then((function(t){200==t.data.code&&(console.log(t),e.videoUrl=t.data.data.url,e.playVideo=!0)})):this.playVideo=!0,this.videoId=t}},watch:{playVideo:function(){1==this.playVideo?(0!=this.playVideoNum&&this.$refs.video.play(),this.$refs.audio.pause(),this.playVideoNum=1):(this.$refs.video.pause(),1==this.flag&&this.$refs.audio.play())}}}),o=s,c=(i("a29a"),i("52e5"),i("2877")),r=Object(c["a"])(o,n,a,!1,null,"3e03f1e1",null);e["default"]=r.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),a=i("5899"),s="["+a+"]",o=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),r=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:r(1),end:r(2),trim:r(3)}},"78a5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVERjkwMjczOUNCMzExRTlBRjNDRTMyOEIxOUMyMkQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVERjkwMjc0OUNCMzExRTlBRjNDRTMyOEIxOUMyMkQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NURGOTAyNzE5Q0IzMTFFOUFGM0NFMzI4QjE5QzIyRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NURGOTAyNzI5Q0IzMTFFOUFGM0NFMzI4QjE5QzIyRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YqeldAAAB8klEQVR42sRXgZGCMBBEhwLswHTwdPCxAimBr+D5CqQDLQE7oASs4GMH2EGsgE/mLzP7N4EEFH9ndoQQzsvdZXOs+r5PAIWhMKwNu+QvNoY6+R9siF1iHQa2/S8kGy8NtWEGY3ZOQ+MWOXsnhhVR0L0gu5LGa0NF9q1vSRq5Qhftb8OLYUtjuWFjuPdkJAYH9juEO/1msQ43kBYNabLj0vDDUHnea2HBgq7tvJLN+/K833mDECiJCtLhUjMETfPRnkMNJdRTieFzGVtGa/LbRgl3X8XWJWhsNUJNqRWeSBcUbQXZmYX1wPg7S1tN6Y+pc7GkXGCEeZFXj0RiKeCmu7HNsicVeAVOkRqvUohwx1TBYfsCh0tQFAyaLc0dPlsP1J3TWDXhT50N/YqS2AaEv/DUOT86rY3rxEXOclhCCrhTNaQjMzzS9Q7ur5RSvbSzzmERkCqfXGG9aU/9LSprGRyZMTV6WcCPdo7DoeYlj5wXC8kam0kHxz0QYRvdN4/kPYJsjr00sPtRJdzh8gyHNdvss066sUgcQOBjTq2GOYJKc6P7I2W2eabDG5I2izMzrqBRKiBqn+S0kz8eWQV2yskHzUg/nMPnz2mgPy08ffEp0NPm0COPzfN+rqWB1Crq2obqrCZKFsGQOpxhX0zCjwADAMwYH/nVvLKYAAAAAElFTkSuQmCC"},"7ef4":function(t,e,i){t.exports=i.p+"img/player_bar.3b9b552f.png"},"841c":function(t,e,i){"use strict";var n=i("d784"),a=i("825a"),s=i("1d80"),o=i("129f"),c=i("14c3");n("search",1,(function(t,e,i){return[function(e){var i=s(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var s=a(t),r=String(this),l=s.lastIndex;o(l,0)||(s.lastIndex=0);var u=c(s,r);return o(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},9263:function(t,e,i){"use strict";var n=i("ad6d"),a=i("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,c=s,r=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=r||u||l;d&&(c=function(t){var e,i,a,c,d=this,p=l&&d.sticky,h=n.call(d),v=d.source,f=0,m=t;return p&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",m=" "+m,f++),i=new RegExp("^(?:"+v+")",h)),u&&(i=new RegExp("^"+v+"$(?!\\s)",h)),r&&(e=d.lastIndex),a=s.call(p?i:d,m),p?a?(a.input=a.input.slice(f),a[0]=a[0].slice(f),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:r&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],i,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,i){"use strict";var n=i("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a29a:function(t,e,i){"use strict";i("571b")},ac1f:function(t,e,i){"use strict";var n=i("23e7"),a=i("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,i){"use strict";var n=i("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c8d2:function(t,e,i){var n=i("d039"),a=i("5899"),s="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||s[t]()!=s||a[t].name!==t}))}},d784:function(t,e,i){"use strict";i("ac1f");var n=i("6eeb"),a=i("d039"),s=i("b622"),o=i("9263"),c=i("9112"),r=s("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));t.exports=function(t,e,i,d){var v=s(t),f=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),m=f&&!a((function(){var e=!1,i=/a/;return"split"===t&&(i={},i.constructor={},i.constructor[r]=function(){return i},i.flags="",i[v]=/./[v]),i.exec=function(){return e=!0,null},i[v](""),!e}));if(!f||!m||"replace"===t&&(!l||!u||p)||"split"===t&&!h){var g=/./[v],A=i(v,""[t],(function(t,e,i,n,a){return e.exec===o?f&&!a?{done:!0,value:g.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=A[0],R=A[1];n(String.prototype,t,y),n(RegExp.prototype,v,2==e?function(t,e){return R.call(t,this,e)}:function(t){return R.call(t,this)})}d&&c(RegExp.prototype[v],"sham",!0)}},dd36:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAG2CAYAAAC+rezwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZCNTc3RjRCQ0ZCMTFFOUJCRTJFNEM4MTRCRjY1OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZCNTc3RjNCQ0ZCMTFFOUJCRTJFNEM4MTRCRjY1OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEYyQjZEQzM5Q0MxMTFFOUJBRjNCNUIwM0VFODQ0QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEYyQjZEQzQ5Q0MxMTFFOUJBRjNCNUIwM0VFODQ0QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6i1oRfAAAAdklEQVR42uxTWwrAIAyLPWzvf4Jtf4JiR/oAEfwJSRMKthWqKgKgdcAoV0BEJpBYhKiZUmIRk2XCbKtqWdgvnUvPNL3uzJkFj7qV/C2M7MKZ8HaYpAse0mAlwVhjJc3av0G4/tz+BsH3EjP1b4tgfkkYNnwCDAAzuqSgfrmyhAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-d3b58646.9084fc22.js.map