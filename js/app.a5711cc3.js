(function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Togyepi/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a50":function(e,t,n){"use strict";n("f8af")},"396a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("v-main",[n("router-view",{staticClass:"app ma-auto"})],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-navigation-drawer",{attrs:{app:"",absolute:"",temporary:"",width:"300"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("router-link",{staticClass:"\n        d-flex\n        flex-column\n        justify-center\n        align-center\n        my-7\n        text-decoration-none\n      ",attrs:{to:"/"}},[a("v-img",{attrs:{"lazy-src":n("ee3e"),src:n("ee3e"),width:"60%"}}),a("h2",{staticClass:"mt-3 text--primary"},[e._v("토 계 피")])],1),a("v-divider"),a("v-list",[a("v-list-item-group",{attrs:{color:e.mainColor},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._l(e.items,(function(t,n){var r=t[0],o=t[1],i=t[2];return a("v-list-item",{key:o,attrs:{link:""},on:{click:function(t){return e.pushRouterLink(i,n)}}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(r))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[e._v(" "+e._s(o)+" ")])],1)],1)})),a("v-divider"),a("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/CaesiumY/Togyepi",target:"__blank"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-github")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[e._v("깃허브")])],1)],1)],1)],2)],1)],1),a("v-app-bar",{attrs:{app:"",color:e.mainColor,dark:""}},[a("v-app-bar-nav-icon",{staticClass:"text-h5",on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"text-h5 font-weight-bold",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.pushRouterLink()}}},[e._v(" 토질 계산 피료해? ")]),a("v-spacer"),a("info-dialog")],1)],1)},l=[],s=(n("fb6a"),n("c740"),"#80CBC4"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),a),[n("v-icon",[e._v("mdi-information")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[n("v-icon",{staticClass:"mr-3"},[e._v("mdi-information")]),e._v(" 계산 가이드 ")],1),n("v-card-text",{staticClass:"pb-0"},e._l(this.formula,(function(t){return n("div",{key:t.id},[n("section",{staticClass:"my-4"},[n("div",[n("h4",{staticClass:"text-h6"},[e._v(" "+e._s(t.name)+" : "+e._s(t.description)+" ")])]),n("div",{staticClass:"my-3"},e._l(t.params,(function(t,a){return n("p",{key:a,staticClass:"text-body-1"},[n("strong",[e._v(e._s(a))]),e._v(" : "+e._s(t)+" ")])})),0),n("ul",e._l(t.rules,(function(t,a){return n("li",{key:a},[e._v(" "+e._s(t)+" "),n("br")])})),0)]),n("v-divider")],1)})),0),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("OK")])],1)],1)],1)],1)},u=[],d={id:0,name:"CEC",description:"1N- Cacl2 치환침출법 계산",params:{a:"시료 적정에 소요된 황산 ml",b:"Blank 적정에 소요된 황산 ml"},rules:["황산 적정용액 규정농도 : 0.05","토양시료 무게 : 5g","단위 환산인자 cmol/kg(=me/100g) : 100g"],formula:function(e,t){return 5*(e-t)}},m={id:1,name:"Microwave",description:"중금속",params:{T:"시료 측정치 값",B:"Blank 측정치 값",S:"시료양"},rules:["100 = 100ml mess up량"],formula:function(e,t,n){return 100*(e-t)/n}},f={id:2,name:"Organic Carbon content of Soil",description:"토양의 유기탄소함량",params:{B:"Blank 적정치 0.2-N 황산제1철암모니움요액 소요량",T:"시료 적정치 0.2-N 황산제1철암모니움요액 소요량",F:"적정액의 농도보정계수",W:"토양무게"},rules:[],formula:function(e,t,n,a){return(e-t)*n*.003*(100/a)*1.724}},v={id:3,name:"Nitrogen",description:"전질소 계산",params:{T:"황산표준용액 적정에 쇼요된 ml수",B:"Blank 의 환산표준액 적정에 소요된 ml수",F:"황산표준액의 보정치(factor)",N:"황산표준액의 Normality",W:"토양시료의 무게(g)"},rules:[],formula:function(e,t,n,a,r){return(e-t)*n*a*14*.001*(1/r*100)}},p={id:4,name:"EC",description:"삼투압의 원리",params:{water:"증류수(ml)",weight:"토양무게",value:"측정치",factor:"온도보정계수"},rules:[],formula:function(e,t,n,a){return e/t*n*a}},h={id:5,name:"Salinity",description:"삼투압의 원리, 염농도 계산",params:{water:"증류수(ml)",weight:"토양무게",value:"측정치",factor:"온도보정계수"},rules:[],formula:function(e,t,n,a){return e/t*n*a*.064}},g={id:6,name:"Cl_2",description:"0.02-N AgNO3 적정 계산",params:{value:"측정치"},rules:["Cl_2(ppm) = 0.02-N AgNO3 일때 염소"],formula:function(e){return 141.82*e}},b={id:7,name:"Cl_1",description:"0.01-N AgNO3 적정 계산",params:{value:"측정치"},rules:["Cl_2(ppm) = 0.01-N AgNO3 일때 염소"],formula:function(e){return 70.9*e}},y={id:8,name:"Ammonia Nitrogen Kjeldahl",description:"암모니아태 질소(NH4+-N) Kjeldahl법",params:{T:"황산표준용액의 ml수",B:"Blank의 황산표준액의 ml수",F:"황산표준액의 보정치(factor)",N:"황산표준액의 Normality",W:"토양시료의 무게(g)",leachate:"침출액량",sample:"취한시료액량"},rules:[],formula:function(e,t,n,a,r,o,i){return(e-t)*n*a*14*.001*(r/o)*(1/i)*1e6}},x={id:9,name:"Nitrate Nitrogen Kjeldahl",description:"질산태 질소(NO3-N) Kjeldahl법",params:{T:"황산표준용액의 ml수",B:"Blank의 황산표준액의 ml수",F:"황산표준액의 보정치(factor)",N:"황산표준액의 Normality",W:"토양시료의 무게(g)",leachate:"침출액량",sample:"취한시료액량"},rules:[],formula:function(e,t,n,a,r,o,i){return(e-t)*n*a*14*.001*(r/o)*(1/i)*1e6}},_={id:10,name:"Ammonia Nitrogen Indophenol Blue Drysoil",description:"암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(건토)",params:{a:"기울기",dilution_factor:"희석배수",absorbance:"흡광도"},rules:[],formula:function(e,t,n){return 10*e*t*n}},k={id:11,name:"Ammonia Nitrogen Indophenol Blue Wetsoil",description:"암모니아태 질소(NH4+-N) Indophenol - Blue 비색법(습토)",params:{a:"기울기",dilution_factor:"희석배수",absorbance:"흡광도",wetsoil:"습토",drysoil:"건토"},rules:[],formula:function(e,t,n,a,r){return e*t*n*((a-r+50)/a)}},C={id:12,name:"Nitrate Nitrogen Brucine Drysoil",description:"질산태 질소(NO3-N) Brucine - 비색법(건토)",params:{a:"기울기",dilution_factor:"희석배수",absorbance:"흡광도"},rules:[],formula:function(e,t,n){return 10*e*t*n}},V={id:13,name:"Nitrate Nitrogen Brucine Wetsoil",description:"질산태 질소(NO3-N) Brucine - 비색법(습토)",params:{a:"기울기",dilution_factor:"희석배수",absorbance:"흡광도",wetsoil:"습토",drysoil:"건토"},rules:[],formula:function(e,t,n,a,r){return e*t*n*((a-r+50)/a)}},w={cec:d,microwave:m,organicCarbonContentOfSoil:f,nitrogen:v,ec:p,salinity:h,cl2:g,cl1:b,ammoniaNitrogenKjeldahl:y,nitrateNitrogenKjeldahl:x,ammoniaNitrogenIndophenolBlueDrysoil:_,ammoniaNitrogenIndophenolBlueWetsoil:k,nitrateNitrogenBrucineDrysoil:C,nitrateNitrogenBrucineWetsoil:V},O={data:function(){return{dialog:!1,formula:w}}},N=O,T=n("2877"),E=n("6544"),S=n.n(E),j=n("8336"),I=n("b0af"),D=n("99d9"),$=n("169a"),F=n("ce7e"),P=n("132d"),B=n("2fa4"),A=Object(T["a"])(N,c,u,!1,null,"96c73b1a",null),L=A.exports;S()(A,{VBtn:j["a"],VCard:I["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VDialog:$["a"],VDivider:F["a"],VIcon:P["a"],VSpacer:B["a"]});var M={components:{InfoDialog:L},data:function(){return{mainColor:s,drawer:!1,items:[["mdi-calculator","계산",""],["mdi-camera","사진","canvas"],["mdi-notebook","플랜","plan"]],selected:0}},methods:{pushRouterLink:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.$route.path.slice(1)!==e&&(this.$router.push("/".concat(e)),this.selected=t)},setSelectedPathIndex:function(){var e=this.$route.path.slice(1),t=this.items.findIndex((function(t){return t[2]===e}));this.selected=t}},mounted:function(){this.setSelectedPathIndex()}},q=M,R=n("40dc"),H=n("5bc1"),W=n("adda"),K=n("8860"),z=n("da13"),J=n("5d23"),U=n("1baa"),G=n("34c3"),Y=n("f774"),Q=n("2a7f"),X=Object(T["a"])(q,i,l,!1,null,"016eac02",null),Z=X.exports;S()(X,{VAppBar:R["a"],VAppBarNavIcon:H["a"],VDivider:F["a"],VIcon:P["a"],VImg:W["a"],VList:K["a"],VListItem:z["a"],VListItemContent:J["a"],VListItemGroup:U["a"],VListItemIcon:G["a"],VListItemTitle:J["b"],VNavigationDrawer:Y["a"],VSpacer:B["a"],VToolbarTitle:Q["a"]});var ee={name:"App",components:{Header:Z},metaInfo:{title:"토계피",titleTemplate:"%s | 토질 계산 피료해"}},te=ee,ne=(n("0a50"),n("7496")),ae=n("f6c4"),re=Object(T["a"])(te,r,o,!1,null,"1c39cdec",null),oe=re.exports;S()(re,{VApp:ne["a"],VMain:ae["a"]});var ie=n("9483");Object(ie["a"])("".concat("/Togyepi/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var le=n("8c4f"),se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("calculator-container")},ce=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"d-flex flex-column justify-center text-center px-5"},[n("calculator-selector",{attrs:{formulaNames:e.formulaNames,onChangeSelect:e.onChangeSelect}}),n("calculator-form",{ref:"form",attrs:{currentFormula:e.currentFormula}})],1)},de=[],me=(n("d81d"),n("07ac"),n("99af"),n("b0c0"),n("a4d3"),n("e01a"),n("7db0"),n("498a"),n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"mt-10"},[n("v-autocomplete",{attrs:{"auto-select-first":"",rounded:"","solo-inverted":"",label:"공식을 선택하세요",items:e.formulaNames,color:"white"},on:{change:e.onChangeSelect}})],1)}),fe=[],ve={props:{formulaNames:{type:Array,required:!0},onChangeSelect:{type:Function,required:!0}}},pe=ve,he=n("c6a6"),ge=Object(T["a"])(pe,me,fe,!1,null,"5aa808ba",null),be=ge.exports;S()(ge,{VAutocomplete:he["a"]});var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return Object.keys(e.currentFormula).length>0?n("article",[n("v-text-field",{attrs:{label:"결과 값",suffix:e.unit,"prepend-inner-icon":"mdi-beaker-check-outline",outlined:"",dense:"",readonly:"",type:"text"},model:{value:e.resultValue,callback:function(t){e.resultValue=t},expression:"resultValue"}}),e._l(e.currentFormula.params,(function(t,a,r){return n("div",{key:a},[n("v-text-field",{attrs:{label:t,placeholder:a,type:"number","prepend-icon":"mdi-beaker-plus-outline",suffix:e.unit,clearable:""},model:{value:e.inputValues[r],callback:function(t){e.$set(e.inputValues,r,t)},expression:"inputValues[index]"}})],1)})),e.currentFormula.rules&&e.currentFormula.rules.length>0?n("notification-expansion",{attrs:{title:"참고사항",icon:"mdi-information-outline",rules:e.currentFormula.rules}}):e._e()],2):e._e()},xe=[],_e=n("2909"),ke=(n("b64b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panels",{staticClass:"mt-5",attrs:{focusable:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[e._v(" "+e._s(e.icon)+" ")])]},proxy:!0}])},[e._v(" "+e._s(e.title)+" ")]),n("v-expansion-panel-content",{staticClass:"pt-4"},[n("ul",e._l(e.rules,(function(t,a){return n("li",{key:a,staticClass:"text-left"},[e._v(" "+e._s(t)+" ")])})),0)])],1)],1)}),Ce=[],Ve={props:{title:{type:String,required:!0},icon:{type:String},rules:{type:Array}}},we=Ve,Oe=n("cd55"),Ne=n("49e2"),Te=n("c865"),Ee=n("0393"),Se=Object(T["a"])(we,ke,Ce,!1,null,"01299cd4",null),je=Se.exports;S()(Se,{VExpansionPanel:Oe["a"],VExpansionPanelContent:Ne["a"],VExpansionPanelHeader:Te["a"],VExpansionPanels:Ee["a"],VIcon:P["a"]});var Ie={components:{NotificationExpansion:je},props:{currentFormula:{type:Object,required:!0}},data:function(){return{unit:"g/ml",inputValues:[],resultValue:0}},methods:{initData:function(){this.inputValues=[],this.resultValue=0},onCalculate:function(e){var t;e.length<Object.keys(this.currentFormula.params).length||(this.resultValue=(t=this.currentFormula).formula.apply(t,Object(_e["a"])(e)))}},watch:{inputValues:function(e){this.onCalculate(e.map((function(e){return parseFloat(e,10)}))),isNaN(this.resultValue)&&(this.resultValue=0)}}},De=Ie,$e=n("8654"),Fe=Object(T["a"])(De,ye,xe,!1,null,"2960c305",null),Pe=Fe.exports;S()(Fe,{VTextField:$e["a"]});var Be={components:{CalculatorSelector:be,CalculatorForm:Pe},data:function(){return{formulaNames:Object.values(w).map((function(e){return"".concat(e.name," (").concat(e.description,")")})),currentFormula:{},rules:[]}},methods:{onChangeSelect:function(e){var t=Object.values(w).find((function(t){return t.name===e.split("(")[0].trim()}));this.currentFormula=t,this.rules=t.rules,this.$refs.form.initData()}}},Ae=Be,Le=Object(T["a"])(Ae,ue,de,!1,null,"120dc85c",null),Me=Le.exports,qe={components:{CalculatorContainer:Me},metaInfo:{title:"토계피"}},Re=qe,He=Object(T["a"])(Re,se,ce,!1,null,"18ce90b2",null),We=He.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas-container")},ze=[],Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"d-flex flex-column justify-center text-center my-5"},[n("canvas-input",{ref:"canvasInput",model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}),n("canvas-form",{attrs:{image:e.image,isLoading:e.isLoading},on:{drawCanvas:e.drawCanvas},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})],1)},Ue=[],Ge=n("1da1"),Ye=(n("96cf"),n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"mx-5"},[n("canvas",{ref:"snapshot",staticClass:"my-5"}),e.image?n("img",{ref:"preview",staticClass:"my-5 captured-image",attrs:{src:e.image}}):e._e(),0===e.image.length?n("v-file-input",{attrs:{accept:"image/png, image/jpeg","prepend-icon":"mdi-camera",label:"사진을 넣어주세요","show-size":""},on:{change:e.setImageInput}}):n("v-btn",{attrs:{color:"error"},on:{click:e.removeDrawing}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-minus ")]),e._v(" 그림 지우기 ")],1)],1)}),Qe=[],Xe={props:{value:{type:String,required:!0}},data:function(){return{image:""}},mounted:function(){this.image=this.value},methods:{setImageInput:function(e){var t=this,n=new FileReader;n.onload=function(e){t.image=e.target.result,t.$emit("input",e.target.result)},n.readAsDataURL(e)},removeDrawing:function(){this.image=""}}},Ze=Xe,et=(n("8a5d"),n("23a7")),tt=Object(T["a"])(Ze,Ye,Qe,!1,null,"6ed029db",null),nt=tt.exports;S()(tt,{VBtn:j["a"],VFileInput:et["a"],VIcon:P["a"]});var at=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("v-card",{ref:"form",staticClass:"ma-5"},[n("v-card-text",[0===e.value.position.length?n("v-btn",{staticClass:"mx-auto my-3 font-weight-bold text-button",attrs:{outlined:"",rounded:"",large:"",color:e.mainColor},on:{click:e.getCurrentPosition}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-crosshairs-gps ")]),e._v(" 내 위치 받아오기 ")],1):n("v-btn",{staticClass:"mx-12 my-3 font-weight-bold text-button",attrs:{outlined:"",rounded:"",large:"",color:"error"},on:{click:e.removeCurrentPosition}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-crosshairs-gps ")]),e._v(" 내 위치 지우기 ")],1),e.value.position?n("v-text-field",{ref:"position",attrs:{"prepend-icon":"mdi-map-marker",label:"현재 위도 경도",readonly:""},model:{value:e.value.position,callback:function(t){e.$set(e.value,"position",t)},expression:"value.position"}}):e._e(),n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"날짜","prepend-icon":"mdi-calendar",readonly:"",clearable:""},model:{value:e.value.date,callback:function(t){e.$set(e.value,"date",t)},expression:"value.date"}},"v-text-field",r,!1),a))]}}]),model:{value:e.isDatePicker,callback:function(t){e.isDatePicker=t},expression:"isDatePicker"}},[n("v-date-picker",{attrs:{locale:"ko-KR","day-format":function(e){return parseInt(e.split("-")[2])}},on:{input:function(t){e.isDatePicker=!1}},model:{value:e.value.date,callback:function(t){e.$set(e.value,"date",t)},expression:"value.date"}})],1),e._l(e.value.contents,(function(t,a){return n("v-text-field",{key:a,ref:"content",refInFor:!0,attrs:{rules:[function(){return!!t||"내용을 입력하세요"}],"prepend-icon":"mdi-pencil",label:"내용 "+(a+1)},model:{value:e.value.contents[a],callback:function(t){e.$set(e.value.contents,a,t)},expression:"value.contents[index]"}})}))],2),n("v-card-actions",{staticClass:"d-flex justify-center pb-5"},[n("v-btn",{attrs:{color:"success"},on:{click:function(){return e.value.contents.push([])}}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-plus ")]),e._v(" 더하기 ")],1),0!==e.value.contents.length?n("v-btn",{attrs:{color:"error"},on:{click:e.removeContentOne}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-minus ")]),e._v(" 빼기 ")],1):e._e()],1)],1),n("v-btn",{staticClass:"mx-3 font-weight-bold",attrs:{large:"",color:"primary",disabled:!e.image,loading:e.isLoading},on:{click:function(t){return e.$emit("drawCanvas")}}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-pencil ")]),e._v(" 그리기 ")],1)],1)},rt=[],ot=(n("b680"),n("a434"),{props:{value:{type:Object,required:!0},image:{type:String,required:!0},isLoading:{type:Boolean,required:!0}},data:function(){return{mainColor:s,isDatePicker:!1}},methods:{removeCurrentPosition:function(){this.value.position=""},getCurrentPosition:function(){var e=this;if(!navigator.geolocation)return alert("위치 정보가 지원되지 않는 환경입니다.");var t=function(t){var n=t.coords,a=n.latitude,r=n.longitude;e.value.position="위도: ".concat(a.toFixed(7)," 경도: ").concat(r.toFixed(7))},n=function(t){alert("위치를 불러오는데 실패했습니다.\n 이유: ".concat(t.message)),e.value.position=""};navigator.geolocation.getCurrentPosition(t,n)},removeContentOne:function(){this.value.contents.splice(this.value.contents.length-1,1)}}}),it=ot,lt=n("2e4b"),st=n("e449"),ct=Object(T["a"])(it,at,rt,!1,null,"5375b72b",null),ut=ct.exports;S()(ct,{VBtn:j["a"],VCard:I["a"],VCardActions:D["a"],VCardText:D["b"],VDatePicker:lt["a"],VIcon:P["a"],VMenu:st["a"],VTextField:$e["a"]});var dt={components:{CanvasInput:nt,CanvasForm:ut},data:function(){return{image:"",isLoading:!1,form:{position:"",date:"",contents:[]}}},watch:{date:function(){null===this.date&&(this.date="")}},methods:{drawCanvas:function(){var e=this;return Object(Ge["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o,i,l,s,c,u,d,m,f,v,p,h,g,b,y,x;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.form,a=n.position,r=n.date,o=n.contents,(a||r||0!==o.length)&&e.image){t.next=3;break}return t.abrupt("return");case 3:return e.isLoading=!0,i=e.$refs.canvasInput,l=i.$refs.snapshot,s=l.getContext("2d"),c=new Promise((function(t){var n=new Image;n.src=e.image,t(n)})),t.next=10,c;case 10:u=t.sent,l.width=u.width,l.height=u.height,d=u.width/30,m=d/2,f=r||a?1.5*d:0,s.fillStyle="white",s.lineWidth="1",s.font="".concat(d,"px roboto"),s.drawImage(u,0,0,l.width,l.height),(r||a)&&(v=Math.round(s.measureText(r).width)+m,p=Math.round(s.measureText(a).width)+m,s.fillRect(0,0,v+p,f)),h=0;case 22:if(!(h<o.length)){t.next=29;break}if(0!==o[h].length){t.next=25;break}return t.abrupt("continue",26);case 25:s.fillRect(0,f+h*d,s.measureText(o[h]).width+m,1.2*d);case 26:h++,t.next=22;break;case 29:for(s.fillStyle="black",s.fillText("".concat(r||""," ").concat(a),0,d),g=0;g<o.length;g++)s.fillText(o[g],0,(g+1)*d+f);b=i.$refs.preview,y=l.toDataURL("image/png"),x="data:,",y===x?alert("다시 한 번 시도해주세요."):b.src=y,e.isLoading=!1;case 37:case"end":return t.stop()}}),t)})))()}}},mt=dt,ft=Object(T["a"])(mt,Je,Ue,!1,null,"21ed7bbb",null),vt=ft.exports,pt={components:{CanvasContainer:vt},metaInfo:{title:"사진"}},ht=pt,gt=Object(T["a"])(ht,Ke,ze,!1,null,"2f933102",null),bt=gt.exports,yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("calendar-container")},xt=[],_t=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("v-row",{staticClass:"fill-height ma-1"},[n("v-col",[n("calendar-header",{attrs:{setToday:e.setToday,type:e.type,setType:e.setType,calendarRef:e.$refs.calendar}}),n("v-sheet",[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.onClickEvent,"click:more":e.viewDay},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),n("calendar-card",{ref:"calendarCard",attrs:{removeEvent:e.removeEvent}})],1)],1)],1),n("div",{staticClass:"modal-container mt-5"},[n("calendar-modal",{attrs:{addEvent:e.addEvent}})],1)],1)},kt=[],Ct=n("5530"),Vt=(n("4de4"),n("ec26")),wt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-3",attrs:{fab:"",text:"","x-small":"",color:"grey darken-2"},on:{click:e.setToday}},[e._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"","x-small":"",color:"grey darken-2"},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-left ")])],1),n("v-btn",{attrs:{fab:"",text:"","x-small":"",color:"grey darken-2"},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-right ")])],1),n("v-spacer"),n("v-toolbar-title",{staticClass:"mx-auto"},[e._v(" "+e._s(this.getTitle)+" ")]),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),a),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),n("v-icon",{attrs:{right:""}},[e._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",e._l(e.calendarType,(function(t){return n("v-list-item",{key:t,on:{click:function(){return e.setType(""+t)}}},[n("v-list-item-title",[e._v(e._s(t.toUpperCase()))])],1)})),1)],1)],1)],1)},Ot=[],Nt=(n("a15b"),{props:{setToday:{type:Function,required:!0},type:{type:String,required:!0},setType:{type:Function,required:!0},calendarRef:{required:!0}},data:function(){return{typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},calendarType:["day","week","month","4day"]}},computed:{getTitle:function(){return this.calendarRef&&this.calendarRef.title.split(" ").reverse().join("년 ")}},methods:{prev:function(){this.calendarRef.prev()},next:function(){this.calendarRef.next()}}}),Tt=Nt,Et=n("8dd9"),St=n("71d9"),jt=Object(T["a"])(Tt,wt,Ot,!1,null,"70cf1ee7",null),It=jt.exports;S()(jt,{VBtn:j["a"],VIcon:P["a"],VList:K["a"],VListItem:z["a"],VListItemTitle:J["b"],VMenu:st["a"],VSheet:Et["a"],VSpacer:B["a"],VToolbar:St["a"],VToolbarTitle:Q["a"]});var Dt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}}),n("v-spacer"),n("v-btn",{staticClass:"mx-1",attrs:{icon:""},on:{click:e.removeSelectedEvent}},[n("v-icon",[e._v("mdi-trash-can-outline")])],1)],1),e.selectedEvent.details?n("v-card-text",[n("span",{domProps:{innerHTML:e._s(e.selectedEvent.details)}})]):e._e()],1)],1)},$t=[],Ft={props:{removeEvent:{type:Function,required:!0}},data:function(){return{selectedEvent:{},selectedElement:null,selectedOpen:!1}},methods:{showEvent:function(e){var t=this,n=e.nativeEvent,a=e.event,r=function(){t.selectedEvent=a,t.selectedElement=n.target,requestAnimationFrame((function(){return requestAnimationFrame((function(){return t.selectedOpen=!0}))}))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return r()}))}))):r(),n.stopPropagation()},removeSelectedEvent:function(){var e=confirm("".concat(this.selectedEvent.name," 일정을 삭제하시겠습니까?"));if(e){var t=this.selectedEvent.id;this.removeEvent(t),this.selectedOpen=!1}}}},Pt=Ft,Bt=Object(T["a"])(Pt,Dt,$t,!1,null,"25bf46f4",null),At=Bt.exports;S()(Bt,{VBtn:j["a"],VCard:I["a"],VCardText:D["b"],VIcon:P["a"],VMenu:st["a"],VSpacer:B["a"],VToolbar:St["a"],VToolbarTitle:Q["a"]});var Lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:e.mainColor,dark:"",absolute:"",top:"",right:"",fab:""}},"v-btn",r,!1),a),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v("📅일정 추가하기")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"일정 이름*","prepend-icon":"mdi-format-title",required:""},model:{value:e.schedule.title,callback:function(t){e.$set(e.schedule,"title",t)},expression:"schedule.title"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"날짜*","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.schedule.date,callback:function(t){e.$set(e.schedule,"date",t)},expression:"schedule.date"}},"v-text-field",r,!1),a))]}}]),model:{value:e.isDatePicker,callback:function(t){e.isDatePicker=t},expression:"isDatePicker"}},[n("v-date-picker",{on:{input:function(t){e.isDatePicker=!1}},model:{value:e.schedule.date,callback:function(t){e.$set(e.schedule,"date",t)},expression:"schedule.date"}})],1)],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"상세 내용",type:"text","prepend-icon":"mdi-subtitles-outline"},model:{value:e.schedule.details,callback:function(t){e.$set(e.schedule,"details",t)},expression:"schedule.details"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-autocomplete",{attrs:{items:e.colors,label:"색",chips:"","item-text":"name","item-value":"color","prepend-icon":"mdi-palette"},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",e._b({attrs:{"input-value":t.selected},on:{click:t.select}},"v-chip",t.attrs,!1),[n("v-avatar",{attrs:{left:"",color:t.item.color,size:"28"}}),e._v(" "+e._s(t.item.name)+" ")],1)]}},{key:"item",fn:function(t){return[[n("v-list-item-avatar",[n("v-avatar",{attrs:{color:t.item.color,size:"28"}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}})],1)]]}}]),model:{value:e.schedule.color,callback:function(t){e.$set(e.schedule,"color",t)},expression:"schedule.color"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 취소 ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.onSubmit}},[e._v(" 저장 ")])],1)],1)],1)],1)},Mt=[],qt={props:{addEvent:{type:Function,required:!0}},data:function(){return{dialog:!1,mainColor:s,schedule:{title:"",date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),color:"blue",details:""},colors:[{name:"파랑",color:"blue"},{name:"빨강",color:"red"},{name:"주황",color:"orange"},{name:"초록",color:"green"},{name:"인디고",color:"indigo"},{name:"딥 퍼플",color:"deep-purple"},{name:"싸이온",color:"cyan"},{name:"회색",color:"grey darken-1"}],isAllday:!1,isDatePicker:!1}},methods:{onSubmit:function(){if(!this.schedule.title)return alert("제목을 입력하세요");this.addEvent(this.schedule),this.dialog=!1,this.schedule={title:"",date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),color:"blue",details:""}}}},Rt=qt,Ht=n("8212"),Wt=n("cc20"),Kt=n("62ad"),zt=n("a523"),Jt=n("8270"),Ut=n("0fd9"),Gt=Object(T["a"])(Rt,Lt,Mt,!1,null,"258cadf8",null),Yt=Gt.exports;S()(Gt,{VAutocomplete:he["a"],VAvatar:Ht["a"],VBtn:j["a"],VCard:I["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VChip:Wt["a"],VCol:Kt["a"],VContainer:zt["a"],VDatePicker:lt["a"],VDialog:$["a"],VIcon:P["a"],VListItemAvatar:Jt["a"],VListItemContent:J["a"],VListItemTitle:J["b"],VMenu:st["a"],VRow:Ut["a"],VSpacer:B["a"],VTextField:$e["a"]});var Qt="EVENTS",Xt=function(e){return JSON.parse(localStorage.getItem(e))},Zt=function(e,t){localStorage.setItem(e,JSON.stringify(t))},en={components:{CalendarHeader:It,CalendarCard:At,CalendarModal:Yt},data:function(){return{focus:"",type:"month",events:[],isShowModal:!1}},mounted:function(){this.$refs.calendar.checkChange(),this.fetchData()},methods:{fetchData:function(){var e=Xt(Qt);e&&(this.events=e)},setType:function(e){this.type=e},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},onClickEvent:function(e){this.$refs.calendarCard.showEvent(e)},toggleModal:function(){this.isShowModal=!this.isShowModal},addEvent:function(e){var t=e.date,n=e.title,a=Object(Ct["a"])(Object(Ct["a"])({},e),{},{id:Object(Vt["a"])(),name:n,start:t,end:t});this.events.push(a),Zt(Qt,this.events)},removeEvent:function(e){var t=Xt(Qt),n=t.find((function(t){return t.id==e})),a=t.filter((function(e){return e.id!==n.id}));Zt(Qt,a),this.fetchData()}}},tn=en,nn=(n("f0ee"),n("a4f6")),an=Object(T["a"])(tn,_t,kt,!1,null,"37503cec",null),rn=an.exports;S()(an,{VCalendar:nn["a"],VCol:Kt["a"],VRow:Ut["a"],VSheet:Et["a"]});var on={components:{CalendarContainer:rn},metaInfo:{title:"플랜"}},ln=on,sn=Object(T["a"])(ln,yt,xt,!1,null,null,null),cn=sn.exports;a["a"].use(le["a"]);var un=[{path:"*",redirect:"/"},{path:"/",name:"CalcView",component:We},{path:"/canvas",name:"CanvasView",component:bt},{path:"/plan",name:"PlanView",component:cn}],dn=new le["a"]({mode:"history",base:"/Togyepi/",routes:un}),mn=dn,fn=n("f309");a["a"].use(fn["a"]);var vn=new fn["a"]({}),pn=n("58ca");a["a"].config.productionTip=!1,a["a"].use(pn["a"]),new a["a"]({router:mn,vuetify:vn,render:function(e){return e(oe)}}).$mount("#app")},"8a5d":function(e,t,n){"use strict";n("396a")},ac97:function(e,t,n){},ee3e:function(e,t,n){e.exports=n.p+"img/logo_only.eb2c9e69.png"},f0ee:function(e,t,n){"use strict";n("ac97")},f8af:function(e,t,n){}});
//# sourceMappingURL=app.a5711cc3.js.map