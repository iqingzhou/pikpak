var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as b,u as me,r as _,o as G,a as K,b as v,c as Y,w as c,e as r,f as n,N as ge,g as fe,h as he,z as _e,i as ve,j as ke,k as q,l as Ee,m as ye,n as Fe,p as we,q as Ae,s as E,t as xe,v as Ce,x as De,y,A as I,B as Ne,C as be,D,E as f,F as Z,G as Ie,H as Pe,I as P,L as Le,J as X,K as $e,M as Se,O as Be,P as Oe,Q as Te,R as Ve,S as Re,T as Me,U as Q,V as je,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ge,a0 as Ke,a1 as Ye,a2 as qe}from"./vendor.b5f0e530.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Ze();const Xe=b({setup(e){return window.$message=me(),(t,o)=>null}}),Qe=["https://pikpak.qingzhou.workers.dev"],et=b({setup(e){const t=_({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(Qe))}),(o,a)=>{const s=K("router-view");return v(),Y(n(ke),{locale:n(_e),"date-locale":n(ve),"theme-overrides":t.value},{default:c(()=>[r(n(he),null,{default:c(()=>[r(n(ge),null,{default:c(()=>[r(n(fe),null,{default:c(()=>[r(Xe),r(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),tt="modulepreload",ee={},ot="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${ot}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":tt,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((x,g)=>{u.addEventListener("load",x),u.addEventListener("error",g)})})).then(()=>t())};var st="/pikpak/assets/logo1.08eb9157.png";const m=q.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let w=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const s=window.localStorage.getItem("pikpakLoginData"),i=s?JSON.parse(s):{};return i.username&&i.password&&!w?(console.log("wait",o.url),w=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),w=!1,m(o))).catch(()=>(N.push("/login"),!1))):i.username&&i.password&&w?new Promise((u,x)=>{const g=setInterval(()=>{w||(clearInterval(g),u(m(o)))},100)}):(N.push("/login"),!1);default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const at=q.create({});at.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const nt=f("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[f("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),f("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},it=y("\u4F1A\u5458\u7801"),ut={style:{"margin-bottom":"0"}},lt=f("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5\uFFE5119\u8D2D\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),ct=y(" 2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5 \u30101\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A119\u5143\uFF01\u539F\u4EF7450\u5143\u3011 2022\u5E741\u67081\u65E5\u8D77\uFF1A 1\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A169\u5143\uFF01\u539F\u4EF7450\u5143\u3011 -\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),pt={class:"bottom-user-info"},dt={key:0,src:st,class:"user-info-avatar"},mt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},gt={class:"user-info-name"},ft={key:0},ht={class:"action"},_t=y(" \u9000\u51FA\u767B\u5F55 "),vt=f("p",null,[f("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),kt=y("\u6DFB\u52A0"),Et=b({setup(e){const t=_(!1),o=l=>()=>Q(P,null,{default:()=>Q(l)}),a=Ee(),s=ye(),i=_([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u89C6\u9891",key:"video",icon:o(je)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ue)}]),u=_(),x=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},g=_(),L=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{g.value=l.data}).catch(l=>{console.log(l)})},k=_(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},se=(l,p)=>{console.log(p),a.push("/"+p.key)};G(()=>{x(),L(),oe()});const C=_(),F=_(!1),ae=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:C.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(l=>{console.log(l)}).finally(()=>{F.value=!1})},$=_(!1),ne=l=>{$.value=l<800,t.value||(t.value=l<800)};Fe(s,()=>{$.value&&(t.value=!0)});const re=we(),ie=()=>{re.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const ue=K("router-view"),le=Ae("resize");return v(),E(Me,null,[xe(r(n(X),{"has-sider":"",onResize:ne},{default:c(()=>[r(n(Ce),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=h=>t.value=!0),onExpand:p[2]||(p[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,S,B,O,T,V,R,M,j,z,J;return[nt,r(n(De),{options:i.value,value:String(n(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?D("",!0):(v(),E("div",rt,[y(I(n(te)((h=g.value)==null?void 0:h.quota.usage))+" / "+I(n(te)((S=g.value)==null?void 0:S.quota.limit))+" ",1),r(n(Ne),{type:"primary",onClick:p[0]||(p[0]=wt=>F.value=!0)},{default:c(()=>[it]),_:1}),((B=g.value)==null?void 0:B.quota)?(v(),Y(n(be),{key:0,type:"line",percentage:Number((((O=g.value)==null?void 0:O.quota.usage)/((T=g.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):D("",!0),f("p",ut,[r(n(Z),{width:600,placement:"right"},{trigger:c(()=>[lt]),default:c(()=>[ct]),_:1})])])),t.value?D("",!0):(v(),E("div",{key:1,class:Ie(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[f("div",pt,[((M=k.value)==null?void 0:M.status)==="ok"?(v(),E("img",dt)):(v(),E("img",mt)),f("div",gt,[y(I((j=u.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),E("div",ft,[r(n(Pe),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):D("",!0)]),f("div",ht,[r(n(Z),null,{trigger:c(()=>[r(n(P),{onClick:ie},{default:c(()=>[r(n(Le))]),_:1})]),default:c(()=>[_t]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(n(X),null,{default:c(()=>[r(n($e),{style:{height:"100vh"}},{default:c(()=>[r(n(Se),{style:{"max-height":"100vh"}},{default:c(()=>[r(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),r(n(Re),{show:F.value,"onUpdate:show":p[5]||(p[5]=h=>F.value=h)},{default:c(()=>[r(n(Be),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[r(n(P),{onClick:p[3]||(p[3]=h=>F.value=!1)},{default:c(()=>[r(n(Oe))]),_:1})]),action:c(()=>[r(n(Te),{block:!0,type:"primary",disabled:!C.value,onClick:ae},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[r(n(Ve),{placeholder:"\u4F1A\u5458\u7801",value:C.value,"onUpdate:value":p[4]||(p[4]=h=>C.value=h)},null,8,["value"]),vt]),_:1})]),_:1},8,["show"])],64)}}}),yt=[{path:"/",name:"home",component:Et,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.a7f790d8.js"),["assets/list.a7f790d8.js","assets/list.764e0448.css","assets/vendor.b5f0e530.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.a7f790d8.js"),["assets/list.a7f790d8.js","assets/list.764e0448.css","assets/vendor.b5f0e530.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.a7f790d8.js"),["assets/list.a7f790d8.js","assets/list.764e0448.css","assets/vendor.b5f0e530.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.993c2653.js"),["assets/trash.993c2653.js","assets/trash.99a3677d.css","assets/vendor.b5f0e530.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.3b56d1b0.js"),["assets/setting.3b56d1b0.js","assets/setting.f947579c.css","assets/vendor.b5f0e530.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.a9475969.js"),["assets/test.a9475969.js","assets/vendor.b5f0e530.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.c261217f.js"),["assets/shareInfo.c261217f.js","assets/shareInfo.678356c6.css","assets/vendor.b5f0e530.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.2be14c1a.js"),["assets/login.2be14c1a.js","assets/login.a8b45006.css","assets/vendor.b5f0e530.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.d1386b4b.js"),["assets/sms.d1386b4b.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.b5f0e530.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.31ad49ab.js"),["assets/register.31ad49ab.js","assets/register.5588ce76.css","assets/vendor.b5f0e530.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.928e4983.js"),["assets/testtest.928e4983.js","assets/vendor.b5f0e530.js"])}],Ft=We({history:Ge(),routes:yt});var N=Ft;const A=Ke(et);A.directive("resize",{mounted(e,t,o){e.$$erd=Ye({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,i=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(N);A.use(qe,{router:N,siteIdList:[1280510106]});A.mount("#app");export{te as b,m as i,Qe as p};
