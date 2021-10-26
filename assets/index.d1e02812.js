import{d as b,u as te,r as m,a as j,o as f,c as q,w as c,b as n,e as s,N as oe,z as se,f as ae,g as re,h as ne,i as ie,j as le,k as ue,l as ce,m as de,n as g,p as pe,q as me,s as ve,t as y,v as C,x as fe,y as he,A as x,B as _e,C as w,D as ge,E as H,F as ke,G as ye,H as we,I as U,J as $e,K as xe,L as Ne,M as be,O as Ce,P as K,T as Fe,Q as Ee,R as Le,S as Pe,U as Be,V as Ae}from"./vendor.794127e5.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function u(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=u(o);fetch(o.href,i)}};Te();const De=b({setup(e){return window.$message=te(),(t,u)=>null}}),Me=b({setup(e){const t=m({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"}});return(u,a)=>{const o=j("router-view");return f(),q(s(re),{locale:s(se),"date-locale":s(ae),"theme-overrides":t.value},{default:c(()=>[n(s(oe),null,{default:c(()=>[n(De),n(o)]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ze="modulepreload",W={},Ie="/pikpak/",F=function(t,u){return!u||u.length===0?t():Promise.all(u.map(a=>{if(a=`${Ie}${a}`,a in W)return;W[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":ze,o||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),o)return new Promise((N,v)=>{l.addEventListener("load",N),l.addEventListener("error",v)})})).then(()=>t())};var Re="/pikpak/assets/logo1.08eb9157.png";const _=ne.create({});_.interceptors.request.use(e=>{const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&E.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},e.url="https://cors.z7.workers.dev/"+e.url,e});_.interceptors.response.use(e=>e,e=>{const{response:t}=e;if(t.status)switch(t.status){case 401:E.push("/login");break;case 400:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return Promise.reject(e)});const G=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],u=Math.floor(Math.log(e)/Math.log(2));u<1&&(u=0);let a=Math.floor(u/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const Se=w("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[w("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),w("div",{class:"logo-box__text"},"PikPak")],-1),Oe={key:0,class:"content-bottom"},Ve=y("\u4F1A\u5458\u7801"),je={class:"bottom-user-info"},qe={key:0,src:Re,class:"user-info-avatar"},He={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},Ue={class:"user-info-name"},Ke={key:0},We=y(" \u4F1A\u5458\u65F6\u95F4 "),Ge=y("\u6DFB\u52A0"),Je=b({setup(e){const t=m(!1),u=d=>()=>K(U,null,{default:()=>K(d)}),a=ie(),o=le(),i=m([{label:"\u6587\u4EF6",key:"list",icon:u(Ee)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:u(Fe)}]),l=m(),N=()=>{_.get("https://user.mypikpak.com/v1/user/me").then(d=>{l.value=d.data})},v=m(),P=()=>{_.get("https://api-drive.mypikpak.com/drive/v1/about").then(d=>{v.value=d.data})},h=m(),J=()=>{_.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(d=>{var r;h.value=(r=d.data)==null?void 0:r.data})},Z=(d,r)=>{console.log(r),a.push("/"+r.key)};ue(()=>{N(),P(),J()});const $=m(),k=m(!1),Q=()=>{_.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:$.value}).then(d=>{window.$message.success("\u5151\u6362\u6210\u529F"),P()}).finally(()=>{k.value=!1})},B=m(!1),X=d=>{B.value=d<800,t.value||(t.value=d<800)};return ce(o,()=>{B.value&&(t.value=!0)}),(d,r)=>{const Y=j("router-view"),ee=de("resize");return f(),g(Ce,null,[pe(n(s(H),{"has-sider":"",onResize:X},{default:c(()=>[n(s(me),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:r[1]||(r[1]=p=>t.value=!0),onExpand:r[2]||(r[2]=p=>t.value=!1),bordered:""},{default:c(()=>{var p,A,T,D,M,z,I,R,S,O,V;return[Se,n(s(ve),{options:i.value,value:String(s(o).name),"onUpdate:value":Z},null,8,["options","value"]),t.value?x("",!0):(f(),g("div",Oe,[y(C(s(G)((p=v.value)==null?void 0:p.quota.usage))+" / "+C(s(G)((A=v.value)==null?void 0:A.quota.limit))+" ",1),n(s(fe),{type:"primary",onClick:r[0]||(r[0]=Xe=>k.value=!0)},{default:c(()=>[Ve]),_:1}),((T=v.value)==null?void 0:T.quota)?(f(),q(s(he),{key:0,type:"line",percentage:Number((((D=v.value)==null?void 0:D.quota.usage)/((M=v.value)==null?void 0:M.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((z=h.value)==null?void 0:z.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):x("",!0)])),t.value?x("",!0):(f(),g("div",{key:1,class:_e(["sider-bottom",{vip:((I=h.value)==null?void 0:I.status)==="ok"}])},[w("div",je,[((R=h.value)==null?void 0:R.status)==="ok"?(f(),g("img",qe)):(f(),g("img",He)),w("div",Ue,[y(C((S=l.value)==null?void 0:S.name)+" ",1),((O=h.value)==null?void 0:O.status)==="ok"&&((V=h.value)==null?void 0:V.expire)?(f(),g("div",Ke,[We,n(s(ge),{to:new Date().getTime(),time:new Date(h.value.expire).getTime(),type:"relative"},null,8,["to","time"])])):x("",!0)])])],2))]}),_:1},8,["collapsed"]),n(s(H),null,{default:c(()=>[n(s(ke),{style:{height:"100vh"}},{default:c(()=>[n(s(ye),{style:{"max-height":"100vh"}},{default:c(()=>[n(Y)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ee]]),n(s(be),{show:k.value,"onUpdate:show":r[5]||(r[5]=p=>k.value=p)},{default:c(()=>[n(s(we),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(s(U),{onClick:r[3]||(r[3]=p=>k.value=!1)},{default:c(()=>[n(s($e))]),_:1})]),action:c(()=>[n(s(xe),{block:!0,type:"primary",disabled:!$.value,onClick:Q},{default:c(()=>[Ge]),_:1},8,["disabled"])]),default:c(()=>[n(s(Ne),{placeholder:"\u4F1A\u5458\u7801",value:$.value,"onUpdate:value":r[4]||(r[4]=p=>$.value=p)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),Ze=[{path:"/",name:"home",component:Je,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>F(()=>import("./list.55bbd0fe.js"),["assets/list.55bbd0fe.js","assets/list.0b5041c3.css","assets/vendor.794127e5.js"])},{path:"trash",name:"trash",component:()=>F(()=>import("./trash.e0751773.js"),["assets/trash.e0751773.js","assets/trash.1f5dfb16.css","assets/vendor.794127e5.js"])}]},{path:"/login",name:"login",component:()=>F(()=>import("./login.990ad606.js"),["assets/login.990ad606.js","assets/login.4934f30b.css","assets/vendor.794127e5.js"])}],Qe=Le({history:Pe(),routes:Ze});var E=Qe;const L=Be(Me);L.directive("resize",{mounted(e,t,u){e.$$erd=Ae({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let o=a.offsetWidth,i=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=u.props)==null||l.onResize(o,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});L.config.globalProperties.$http=_;L.use(E).mount("#app");export{G as b,_ as i};
