(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["483adab0"],{"2ae9":function(t,o,n){},5561:function(t,o,n){"use strict";var s=n("2ae9"),e=n.n(s);e.a},dc23:function(t){t.exports=[{title:"Welcome",content:"Hello World!\n===\n\nWelcome to my github io page! \n\n"}]},fb17:function(t,o,n){"use strict";n.r(o);var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("q-page",[n("div",{staticClass:"row"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"col-3 q-pa-md gt-xs"},[n("q-list",t._l(t.toc,function(o){return n("q-item",{key:o.id,attrs:{clickable:""},on:{click:function(n){return t.scrollTo(o.id)}}},[n("q-item-section",{style:{marginLeft:7*(o.level-1)+"%"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(o.label)+"\n\t\t\t\t\t\t")])],1)}),1)],1),n("div",{staticClass:"col"},[n("q-scroll-area",{style:t.scroll,attrs:{"thumb-style":t.thumbStyle}},[n("div",{staticClass:"row justify-center"},[n("q-markdown",{ref:"md",staticClass:"col-xs-11 col-sm-10",attrs:{"content-class":"text-body1",src:t.markdown,toc:"","toc-start":1,"toc-end":3},on:{data:t.onToc}})],1)])],1)]),n("q-page-sticky",{staticClass:"gt-xs",attrs:{position:"top-right",offset:[25,0]}},[n("q-btn",{attrs:{round:"",flat:"",color:"primary",icon:"menu"},on:{click:function(o){t.showNav=!t.showNav}}})],1)],1)},e=[],c=n("dc23"),a={name:"Posts",data:function(){return{markdown:"",toc:"",showNav:!1}},methods:{onToc:function(t){this.toc=t},scrollTo:function(t){document.getElementById(t).scrollIntoView()}},computed:{thumbStyle:function(){return{right:"2px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75}},scroll:function(){return{height:"calc(100vh - 48px)",width:"100%"}}},created:function(){var t=this.$route.params.post_id;this.markdown=c[t].content}},i=a,r=(n("5561"),n("2877")),l=Object(r["a"])(i,s,e,!1,null,null,null);o["default"]=l.exports}}]);