(function(e){function t(t){for(var n,o,a=t[0],c=t[1],u=t[2],d=0,h=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(h.length)h.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0554":function(e,t,i){var n=i("96a4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("499e").default;s("17611838",n,!0,{sourceMap:!1,shadowMode:!1})},"34f5":function(e,t,i){"use strict";i("9b62")},"39b5":function(e,t,i){"use strict";i("49e5")},"3faf":function(e,t,i){var n=i("fb98");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("499e").default;s("5edc82a9",n,!0,{sourceMap:!1,shadowMode:!1})},"49e5":function(e,t,i){var n=i("b569");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("499e").default;s("d047e3d4",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"quiz-card",attrs:{id:"questionTree"}},[i("progress-bar"),i("div",{staticClass:"body"},[1===e.questionTree.visited.length?i("div",[i("h3",[e._v("Find the right grant opportunity for you")]),i("p",[e._v(" This resource can help you determine which AOA grants you are eligible for. ")])]):e._e(),!e.currentQuestion&&e.message?i("message",{attrs:{message:e.result,"is-success":e.isSuccess}}):e._e(),e.currentQuestion?i("quiz-question",{attrs:{"the-question":e.questionTree.currentQuestion},on:{selected:e.handleSelected}}):e._e(),i("div",{staticClass:"actions"},[i("button",{staticClass:"btn btn-small btn-noborder",style:e.backStyle,on:{click:e.handleBack}},[e._v(" Back ")]),null!==e.currentQuestion?i("button",{staticClass:"btn btn-small",attrs:{type:"button",disabled:!e.selected},on:{click:e.handleNext}},[e._v(" Next ")]):e._e()])],1)],1)])},r=[],o=(i("c975"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"question"},[i("div",{staticClass:"question__question"},[e._v(e._s(e.theQuestion.question))]),e._l(e.theQuestion.choices,(function(t){return i("div",{key:t.value,staticClass:"question__answers"},[i("label",{attrs:{for:t.value}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",name:"pick",id:t.value},domProps:{value:t.value,checked:e._q(e.picked,t.value)},on:{change:[function(i){e.picked=t.value},function(t){return e.$emit("selected",t.target.value)}]}}),e._v(" "+e._s(t.display))])])})),e._t("default")],2)}),a=[],c={props:["theQuestion"],watch:{theQuestion:function(){this.picked=""}},data:function(){return{picked:""}}},u=c,l=i("2877"),d=Object(l["a"])(u,o,a,!1,null,"be150b30",null),h=d.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"message"},[e.isSuccess?i("checkmark"):e._e(),i("div",{domProps:{innerHTML:e._s(e.message)}})],1)},f=[],b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{staticClass:"checkmark",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[i("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),i("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})])},v=[],g={},m=g,y=(i("39b5"),Object(l["a"])(m,b,v,!1,null,"6dd232b0",null)),k=y.exports,q={props:["isSuccess","message"],components:{Checkmark:k}},_=q,w=(i("b24b"),Object(l["a"])(_,p,f,!1,null,"0707742a",null)),x=w.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"progress__container"},[i("div",{staticClass:"progress",style:{transform:"scaleX("+e.progress+")"}},[i("span",{staticClass:"progress__bar"})])])},T=[],j={props:["progress"]},Q=j,M=(i("34f5"),Object(l["a"])(Q,O,T,!1,null,"750782e3",null)),z=M.exports,C='\n  <p>You may be eligible for the <a target="_blank" rel="noopener" href="https://app.box.com/s/zssz9paw0jdecc9ifjgb4swafgptwwv0">Osteopathic Medical Student Research Grant</a>.</p>\n',A='\n  <p>You may be eligible for the <a target="_blank" rel="noopener" href="https://app.box.com/s/g7w49lrh00jtn256ge6xbj9yffys3ikc">AOA Physicians in Training Research Grant Program</a>.</p>\n',S='\n  <p>You may be eligible for the <strong>AOA Research Grant Program</strong>.</p>\n  <p>Review the RFAs for the AOA\'s research areas of focus:</p>\n  <ul>\n    <li><a href="https://app.box.com/s/c4axlx60zq9eu5yalfdl64dfz3mxhrvg" target="_blank" rel="noopener">OMM/OMT on the Prevention and Management of MSK RFA</a></li>\n    <li><a href="https://app.box.com/s/qvn6xjr07lmsdnvht5t4f09vtdijjddb" target="_blank" rel="noopener">Acute/Chronic Pain Management RFA</a></li>\n    <li><a href="https://app.box.com/s/a6m4fk1h2a9rqkupdjeudbicf2lw9etf" target="_blank" rel="noopener">The Impact of the Osteopathic Approach on Chronic Disease and Elderly Care RFA</a></li>\n    <li><a href="https://app.box.com/s/obk23rsbm2hhlv6yofiak8uf1j3ndhil" target="_blank" rel="noopener">Osteopathic Manipulative Medicine Observational & Explorative Research Studies RFA</a></li>\n  </ul>\n',P='\n  <p>In addition, you may be eligible for the New Investigator Research Program:</p>\n  <p><a href="#">Review the New Investigator Grant RFA</a></p>\n',R='\n  <p>We’re sorry, but you don’t qualify for this grant opportunity.</p><p>Review <a href="#">other research funding opportunities.</a></p>\n',N={question:"I am a ...",choices:[{display:"Osteopathic medical student",value:"student"},{display:"DO in practice",value:"do"},{display:"MD in practice or PhD",value:"mdphd"},{display:"Resident physician",value:"resident"}]},B={question:"Are you an investigator with an active AOA grant in the 1st year of your grant period?",choices:[{display:"Yes",value:"yes"},{display:"No",value:"no"}]},D={question:"Did you receive your terminal degree in 2011 or after?",choices:[{display:"Yes",value:"yes"},{display:"No",value:"no"}]},E={question:"Are you affiliated with a College of Osteopathic Medicine or osteopathic recognized program?",choices:[{display:"Yes",value:"yes"},{display:"No",value:"no"}]},F=i("d4ec"),G=function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};Object(F["a"])(this,e),this.display=t,this.value=i,this.resolve=n},Y=function(e){return new G("Yes","yes",e)},$=function(e){return new G("No","no",e)},I=i("bee2"),U=function(){function e(t){var i=t.question,n=t.choices,s=void 0===n?{}:n;Object(F["a"])(this,e),this.picked=null,this.question=i,this.choices=s}return Object(I["a"])(e,[{key:"resolve",value:function(e){return console.log("this.choices[pick]",this.choices[e]),this.choices[e].resolve()}},{key:"answer",value:function(e){this.picked=e}},{key:"toString",value:function(){}},{key:"setChoices",value:function(e){return this.choices=e,this}}]),e}(),V=(i("99af"),i("fb6a"),i("ac1f"),i("1276"),i("b85c")),J=i("53ca"),L=function(){function e(t){Object(F["a"])(this,e),this.id=t.id||"parent",this.questions=t.questions||{},this.children=t.children||{},this.initial=t.initial||"",this.visited=[],this.tree=this.questions,this.currentQuestion=this.tree[this.initial],this.responses={},this.visited=this.registerVisit(this.initial)}return Object(I["a"])(e,[{key:"registerVisit",value:function(e){return this.visited.concat(e)}},{key:"setCurrentQuestion",value:function(){}},{key:"maximumNodesUntilLeaf",value:function(e){}},{key:"canGoBack",value:function(){return this.visited.length>1}},{key:"next",value:function(e){this.responses[this.currentQuestion.question]=e;var t,i=this.currentQuestion.resolve(e);if("string"===typeof i||null===i)t=i;else{if("object"!==Object(J["a"])(i))throw new Error("Invalid resolve function");t=i.target}if(this.visited=this.registerVisit(t),null===t){var n=Object.assign({},{target:t},{payload:i.payload});return n}var s,r=t.split(".");return r.length>1?(this.tree=this.children[r[0]],s=this.tree.questions[r[1]]):s=this.tree.questions[t],this.currentQuestion=s,Object.assign({},{target:this.currentQuestion})}},{key:"retraceUntil",value:function(e){var t,i,n=this,s=Object(V["a"])(this.visited);try{for(s.s();!(i=s.n()).done;){var r=i.value,o=r.split(".");if(o.length>1?(n=this.children[o[0]],t=n.questions[o[1]]):t=n.questions[r],r==e)break}}catch(a){s.e(a)}finally{s.f()}return delete this.responses[t.question],t}},{key:"prev",value:function(){var e=this.visited.slice(0,this.visited.length-1),t=this.retraceUntil(e[e.length-1]);if(console.log("prevQuestion",t),t)return this.visited=e,this.currentQuestion=t,this.currentQuestion}}]),e}(),H={name:"App",components:{QuizQuestion:h,Message:x,ProgressBar:z},created:function(){var e=new U({question:N.question,choices:{student:new G("Osteopathic medical student","student",(function(){return"studentQs.q_first_year"})),do:new G("DO in practice","do",(function(){return"doQs.q_first_year"})),mdphd:new G("MD in practice or PhD","mdphd",(function(){return"mdphdQs.q_first_year"})),resident:new G("Resident physician","resident",(function(){return"residentQs.q_first_year"}))}}),t=B.question,i=function(){return{target:null,payload:R}},n=new U({question:E.question,choices:{yes:Y((function(){return"q_terminal_degree"})),no:$(i)}}),s=new U({question:D.question,choices:{yes:Y((function(){return{target:null,payload:S+P}})),no:$((function(){return{target:null,payload:S}}))}}),r=new L({id:"student",initial:"q_first_year",questions:{q_first_year:new U({question:t,choices:{yes:Y(i),no:$((function(){return{target:null,payload:C}}))}})}}),o=new L({id:"do",initial:"q_first_year",questions:{q_first_year:new U({question:t,choices:{yes:Y(i),no:$((function(){return"q_terminal_degree"}))}}),q_terminal_degree:s}}),a=new L({id:"mdphd",initial:"q_first_year",questions:{q_first_year:new U({question:t,choices:{yes:Y(i),no:$((function(){return"q_affiliated"}))}}),q_affiliated:n,q_terminal_degree:s}}),c=new L({id:"resident",initial:"q_first_year",questions:{q_first_year:new U({question:t,choices:{yes:Y(i),no:$((function(){return{target:null,payload:A}}))}})}});this.questionTree=new L({initial:"q_question_1",questions:{q_question_1:e},children:{studentQs:r,doQs:o,mdphdQs:a,residentQs:c}}),this.currentQuestion=this.questionTree.currentQuestion},mounted:function(){},methods:{handleSelected:function(e){this.selected=e},handleNext:function(){var e=this.questionTree.next(this.selected);null!==e.target?this.currentQuestion=e.target:(e.payload.indexOf("sorry")>0&&(this.isSuccess=!1),this.currentQuestion=e.target,this.result=e.payload),this.selected=""},handleBack:function(){this.currentQuestion=this.questionTree.prev(),this.isSuccess=!0,this.selected=""}},computed:{canGoBack:function(){return this.questionTree.canGoBack()},backStyle:function(){return{visibility:this.questionTree.visited.length>1?"visible":"hidden"}}},data:function(){return{progress:0,selected:"",nanobar:null,result:"",questionTree:null,currentQuestion:"",message:"hiya",hasNext:!0,isSuccess:!0}}},K=H,W=(i("5c0b"),Object(l["a"])(K,s,r,!1,null,null,null)),X=W.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("0554")},"96a4":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"#app{max-width:47.25rem;margin:0 auto;padding-top:2rem}#questionTree{position:relative;font-family:proxima-nova,sans-serif;color:#2a2a2a}#questionTree .body{font-size:1.375rem;line-height:1.5}#questionTree .body h3{margin:0 0 .375rem;font-size:1.75rem;color:#22a49c}#questionTree .body p{margin:0 0 1.75rem}#questionTree .body a{font-weight:600;color:#22a49c;text-decoration:none}#questionTree .body ul:last-child{margin-bottom:0}#questionTree.quiz-card{background-color:#f4fafa;padding:2.5rem}#questionTree label{display:block;padding:8px;font-weight:400;font-size:1.375rem;line-height:1.75;text-transform:none;letter-spacing:0;color:#2a2a2a;transition:background-color .2s}#questionTree label:hover{background-color:#fff;cursor:pointer}#questionTree .btn{display:inline-block;padding:14px 30px;width:auto;border-radius:5px;background:#22a49c;text-align:center;color:#fff;font-weight:700;font-size:16px;line-height:20px;letter-spacing:.5px;border:1px solid #22a49c;transition:background-color .2s,color .2s,border .2s;outline:none}#questionTree .btn:hover{background:#fff;color:#22a49c}#questionTree .btn:disabled,#questionTree .btn[disabled]{background:#d0d0d0;color:#a2a2a2;border-color:#d0d0d0}#questionTree .btn-noborder{color:#22a49c;background:transparent;border:none}#questionTree .btn-noborder:hover{background:rgba(34,164,156,.1)}#questionTree .btn-noborder:disabled,#questionTree .btn-noborder[disabled]{background:transparent;color:#a2a2a2;border-color:#d0d0d0}#questionTree .btn-small{padding:8px 20px!important;font-size:14px}#questionTree .question{margin-bottom:2rem}#questionTree .question input[type=radio]{position:relative;opacity:1}#questionTree .question__question{margin-bottom:1rem;font-size:2rem;line-height:1.3}#questionTree .question__answers{font-size:1.375rem;line-height:1.75}#questionTree .actions{display:flex;flex-direction:row;justify-content:space-between}",""]),e.exports=t},"9b62":function(e,t,i){var n=i("9d5e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("499e").default;s("1db7ec54",n,!0,{sourceMap:!1,shadowMode:!1})},"9d5e":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".progress__container[data-v-750782e3]{position:absolute;top:0;left:0;right:0;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity .25s cubic-bezier(.4,0,.6,1) 0ms}.progress[data-v-750782e3]{height:100%;-webkit-animation:none;animation:none;transform-origin:top left;transition:transform .25s cubic-bezier(.4,0,.6,1) 0ms}.progress[data-v-750782e3],.progress__bar[data-v-750782e3]{position:absolute;width:100%}.progress__bar[data-v-750782e3]{display:inline-block;border-top:4px solid #22a49c}",""]),e.exports=t},b24b:function(e,t,i){"use strict";i("3faf")},b569:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".checkmark__circle[data-v-6dd232b0]{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2;stroke-miterlimit:10;stroke:#22a49c;fill:none;-webkit-animation:stroke-data-v-6dd232b0 .6s cubic-bezier(.65,0,.45,1) forwards;animation:stroke-data-v-6dd232b0 .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark[data-v-6dd232b0]{width:56px;height:56px;border-radius:50%;display:block;stroke-width:2;stroke:#fff;stroke-miterlimit:10;margin:0 auto 2rem;box-shadow:inset 0 0 0 #22a49c;-webkit-animation:fill-data-v-6dd232b0 .4s ease-in-out .4s forwards,scale-data-v-6dd232b0 .3s ease-in-out .9s both;animation:fill-data-v-6dd232b0 .4s ease-in-out .4s forwards,scale-data-v-6dd232b0 .3s ease-in-out .9s both}.checkmark__check[data-v-6dd232b0]{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;-webkit-animation:stroke-data-v-6dd232b0 .3s cubic-bezier(.65,0,.45,1) .8s forwards;animation:stroke-data-v-6dd232b0 .3s cubic-bezier(.65,0,.45,1) .8s forwards}@-webkit-keyframes stroke-data-v-6dd232b0{to{stroke-dashoffset:0}}@keyframes stroke-data-v-6dd232b0{to{stroke-dashoffset:0}}@-webkit-keyframes scale-data-v-6dd232b0{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes scale-data-v-6dd232b0{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@-webkit-keyframes fill-data-v-6dd232b0{to{box-shadow:inset 0 0 0 30px #22a49c}}@keyframes fill-data-v-6dd232b0{to{box-shadow:inset 0 0 0 30px #22a49c}}",""]),e.exports=t},fb98:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".message[data-v-0707742a]{margin-bottom:1.5rem;padding:2.5rem;background-color:#fff;p:last-child{margin:0!important}}",""]),e.exports=t}});
//# sourceMappingURL=app.9aa3d4a2.js.map