(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b07":function(e,t,n){},"15c9":function(e,t,n){"use strict";var o=n("fc9e"),i=n.n(o);i.a},"2c60":function(e,t,n){},4797:function(e,t,n){"use strict";var o=n("2c60"),i=n.n(o);i.a},"49c3":function(e,t,n){"use strict";var o=n("0b07"),i=n.n(o);i.a},"55ce":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("5530"),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Fragment",[e.mobile?e._e():n("main",{attrs:{id:"vue"}},[n("section",{attrs:{id:"s1"}},[n("Advisor"),n("GameMode")],1),n("section",{attrs:{id:"s2"}},[n("PlayersDisplay"),n("Cube")],1),n("section",{attrs:{id:"s3"}},[n("ColorSelect")],1)]),e.mobile?n("main",{class:{mobile:e.mobile},attrs:{id:"vue"}},[n("section",{attrs:{id:"s1"}},[n("GameMode")],1),n("section",{attrs:{id:"s2"}},[n("PlayersDisplay")],1),n("section",{attrs:{id:"s3"}},[n("Cube")],1),n("section",{attrs:{id:"s4"}},[n("ColorSelect")],1),n("section",{attrs:{id:"s5"}},[n("Advisor")],1)]):e._e()])},r=[],s=n("3f08"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"colorBox",class:{mobile:e.mobile}},[n("div",{staticClass:"colorWrapper"},e._l(e.colors,(function(t){return n("div",{key:t,staticClass:"color",class:{active:e.activeColor===t},style:{background:t},on:{click:function(n){return e.handleClick(t)}}})})),0)])},u=[],l={name:"ColorSelect",methods:{handleClick:function(e){this.activeColor=e,this.$store.commit("updateColor",e)}},data:function(){return{colors:["#FF0000","#FF8A00","#FFC700","#FFF500","#BDFF00","#00FF38","#00FFC2","#00FFFF","#0094FF","#1400FF","#EB00FF","#FF008A"],activeColor:"",mobile:this.$store.state.mobile}}},d=l,m=(n("4797"),n("2877")),f=Object(m["a"])(d,c,u,!1,null,"62adc6ac",null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Fragment",[n("div",{class:{mobile:e.mobile},attrs:{id:"cube"}})])},v=[],b=n("5a89"),w={name:"Cube",data:function(){return{mouseTop:0,mouseLeft:0,mouseDown:!1,manualPostion:{x:0,y:0},manualMode:!1,mobile:this.$store.state.mobile,freeSpin:!0}},components:{Fragment:s["a"]},methods:{init:function(){var e=document.querySelector("#cube"),t=new b["i"],n=new b["g"](75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5.5+1300/window.innerWidth;var o=new b["b"](14674943,1.75);o.position.set(1,1,1),o.position.multiplyScalar(1.3),o.castShadow=!0,t.add(o);var i=new b["c"];i.castShadow=!0,i.receiveShadow=!0;for(var a=[],r=1;r<=3;r++)for(var s=1;s<=3;s++)for(var c=1;c<=3;c++){var u=new b["a"](1,1,1),l=new b["e"]({color:"#b76c77"});l.shininess=300;var d=new b["d"](u,l);d.castShadow=!0,d.receiveShadow=!0;var m=1.5*s-3,f=1.5*r-3,p=1.5*c-3;d.position.set(m,f,p),i.add(d),a.push(d)}t.add(i);var h=new b["j"]({alpha:!0,antialias:!0});return h.shadowMapEnabled=!0,h.shadowMapType=b["f"],h.setSize(e.clientWidth,e.clientHeight),e.appendChild(h.domElement),this.camera=n,this.scene=t,this.renderer=h,this.cubes=a,this.cubeGroup=i,this.container=e,{camera:n,scene:t,renderer:h,cubes:a,cubeGroup:i,container:e}},animate:function(e){if(requestAnimationFrame(this.animate.bind(this,e)),this.freeSpin)e.cubeGroup.rotation.x+=.005,e.cubeGroup.rotation.y+=.005;else if(this.manualMode)this.manualMode&&(e.cubeGroup.rotation.x=this.manualPostion.lastPosition.x+.01*this.manualPostion.y,e.cubeGroup.rotation.y=this.manualPostion.lastPosition.y+.01*this.manualPostion.x);else{var t=2*-this.mouseTop,n=-7*this.mouseLeft;e.cubeGroup.rotation.x=t,e.cubeGroup.rotation.y=n,this.manualPostion.lastPosition={x:t,y:n}}e.renderer.render(e.scene,e.camera)},addEvents:function(){var e=this,t=document.querySelector("#cube");t.addEventListener("mousemove",(function(t){if(e.freeSpin=!1,e.canPick=!1,e.mouseDown)e.manualPostion.x+=t.movementX,e.manualPostion.y+=t.movementY;else{var n=t.srcElement.getBoundingClientRect();e.mouseLeft=(t.x-n.left)/(n.width/2)-1,e.mouseTop=(t.y-n.top)/(n.height/2)-1}})),t.addEventListener("mouseleave",(function(){e.mouseTop=0,e.mouseLeft=0,e.freeSpin=!0,e.manualMode=!1,e.manualPostion.x=0,e.manualPostion.y=0})),t.addEventListener("mouseup",(function(){e.mouseDown=!1})),t.addEventListener("mousedown",(function(){e.canPick=!0,e.mouseDown=!0,e.manualMode=!0})),t.addEventListener("click",(function(t){if(e.canPick){var n=new b["h"],o=e.container.getBoundingClientRect(),i={};i.x=(t.clientX-o.x)/o.width*2-1,i.y=-(t.clientY-o.y)/o.height*2+1,n.setFromCamera(i,e.camera);var a=n.intersectObjects(e.cubes);a.length&&a[0].object.material.color.setStyle(e.$store.state.userColor)}}))}},mounted:function(){this.addEvents();var e=this.init();this.animate(e)}},y=w,g=(n("15c9"),Object(m["a"])(y,h,v,!1,null,"b774fd04",null)),F=g.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{mobile:e.mobile}},[n("p",[e._v(e._s(e.progressText[e.progressIndex]))]),e.showInput?n("input",{attrs:{type:"text",placeholder:"Enter code here"}}):e._e()])},_=[],x={name:"Advisor",data:function(){return{showInput:!1,progressText:{0:"Select a color",1:"Pick a game mode"},progressIndex:0,mobile:this.$store.state.mobile}}},C=x,S=(n("a65f"),Object(m["a"])(C,P,_,!1,null,"0382da77",null)),M=S.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"gameMode"}},[n("div",{class:{active:e.robotMode},on:{click:function(t){return e.handleClick("robot")}}},[n("v-icon",{attrs:{size:"30"}},[e._v("android")])],1),n("div",{class:{active:e.humanMode},on:{click:function(t){return e.handleClick("human")}}},[n("v-icon",{attrs:{size:"30"}},[e._v("face")])],1)])},O=[],E={name:"GameMode",data:function(){return{robotMode:!1,humanMode:!1}},methods:{handleClick:function(e){"robot"===e?(this.robotMode=!0,this.humanMode=!1):(this.humanMode=!0,this.robotMode=!1)}}},k=E,$=(n("b62e"),Object(m["a"])(k,j,O,!1,null,"57ef1821",null)),G=$.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Fragment",[e.mobile?e._e():n("div",[n("p",{class:{active:e.p1}},[e._v("Player 1")]),n("p",{class:{active:e.p2}},[e._v("Player 2")])]),e.mobile?n("div",{class:{mobile:e.mobile}},[n("p",{class:{active:e.p1}},[e._v("P1")]),n("p",{class:{active:e.p2}},[e._v("P2")])]):e._e()])},z=[],D={name:"PlayersDisplay",components:{Fragment:s["a"]},data:function(){return{p1:!0,p2:!1,mobile:this.$store.state.mobile}}},T=D,A=(n("49c3"),Object(m["a"])(T,L,z,!1,null,"ee137f52",null)),W=A.exports,B={name:"App",data:function(){return{}},computed:{mobile:function(){return this.$store.state.mobile}},methods:{handleResize:function(){this.$store.commit("resize"),console.log(this.$store.state.mobile)}},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.handleResize()}))},components:{ColorSelect:p,Cube:F,Advisor:M,GameMode:G,PlayersDisplay:W,Fragment:s["a"]}},I=B,R=(n("5c0b"),Object(m["a"])(I,a,r,!1,null,null,null)),q=R.exports,H=n("ce5b"),J=n.n(H),X=n("2f62");i["default"].use(J.a),i["default"].use(X["a"]);var Y=new X["a"].Store({state:{mobile:window.innerWidth<880,userColor:""},mutations:{updateColor:function(e,t){e.userColor=t},resize:function(e){e.mobile=window.innerWidth<880}}});new i["default"](Object(o["a"])(Object(o["a"])({},q),{},{store:Y})).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},6543:function(e,t,n){},"9c0c":function(e,t,n){},a65f:function(e,t,n){"use strict";var o=n("6543"),i=n.n(o);i.a},b62e:function(e,t,n){"use strict";var o=n("55ce"),i=n.n(o);i.a},fc9e:function(e,t,n){}});
//# sourceMappingURL=app.b0d7f2ee.js.map