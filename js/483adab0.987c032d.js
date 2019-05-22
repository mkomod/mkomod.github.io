(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["483adab0"],{"2ae9":function(t,n,e){},5561:function(t,n,e){"use strict";var o=e("2ae9"),s=e.n(o);s.a},dc23:function(t){t.exports=[{title:"How the site is built",content:'How the site is built\n===\n\nThis site is built using the [Quasar Framework](https://quasar-framework.org/) and deployed as a single page application\n\n## Pages \n\nPages such as this one are written in markdown. They are then automatically bundled together with a small script, doing so keeps everything static and means no database is needed to fetch content. It also provides a simple mechanism to update site content.\n\nThe following script is used bundle the markdown files and add them to the static files directory.\n\n```\nconst fs = require("fs")\nconst path = require("path")\n\nconst markdown_dir = "./markdown"\n\nconst markdown_files = fs.readdirSync(markdown_dir)\nconst index = []\nconst articles = []\nlet filePath\n\nmarkdown_files.forEach( (file, i) => {\n\tfilePath = path.join(__dirname, markdown_dir, file); \n\tlet content =\tfs.readFileSync(filePath, {encoding: \'utf-8\'})\n\tfile = file.replace(/\\.[^/.]+$/, "")\n\t// add articles to index\n\tindex.push({\n\t\ttitle: file,\n\t\tid: i\n\t})\n\n\t// add content \n\tarticles.push({\n\t\ttitle: file,\n\t\tcontent: content\n\t})\n\n\n})\n\nfs.writeFileSync(\'./src/statics/index.json\', JSON.stringify(index))\nfs.writeFileSync(\'./src/statics/content.json\', JSON.stringify(articles))\n```\n\n\n'},{title:"Welcome",content:"Hello World!\n===\n\nWelcome to my github io page! \n\nTo do:\n\n - [x] Image formatting \n - [x] Contents menu\n - [ ] Icons\n - [ ] About page / contact information\n - [ ] Projects page\n - [ ] Add content based on date \n\n\n"}]},fb17:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",[e("div",{staticClass:"row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"col-2 q-pa-md q-mt-xl gt-sm"},[e("q-list",t._l(t.toc,function(n){return e("q-item",{key:n.id,attrs:{clickable:""},on:{click:function(e){return t.scrollTo(n.id)}}},[e("q-item-section",{style:{marginLeft:7*(n.level-1)+"%"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n.label)+"\n\t\t\t\t\t\t")])],1)}),1)],1),e("div",{staticClass:"col"},[e("q-scroll-area",{style:t.scroll,attrs:{"thumb-style":t.thumbStyle}},[e("div",{staticClass:"row justify-center"},[e("q-markdown",{ref:"md",staticClass:"col-xs-11 col-sm-10",attrs:{"content-class":"text-body1",src:t.markdown,toc:"","toc-start":1,"toc-end":3},on:{data:t.onToc}})],1)])],1)]),e("q-page-sticky",{staticClass:"gt-sm",attrs:{position:"top-left",offset:[25,10]}},[e("q-btn",{attrs:{round:"",flat:"",color:"grey-10",icon:"menu"},on:{click:function(n){t.showNav=!t.showNav}}})],1)],1)},s=[],i=e("dc23"),a={name:"Posts",data:function(){return{markdown:"",toc:"",showNav:!1}},methods:{onToc:function(t){this.toc=t},scrollTo:function(t){document.getElementById(t).scrollIntoView()}},computed:{thumbStyle:function(){return{right:"2px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75}},scroll:function(){return{height:"calc(100vh - 50px)",width:"100%"}}},created:function(){var t=this.$route.params.post_id;this.markdown=i[t].content}},c=a,r=(e("5561"),e("2877")),l=Object(r["a"])(c,o,s,!1,null,null,null);n["default"]=l.exports}}]);