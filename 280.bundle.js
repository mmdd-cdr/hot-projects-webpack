"use strict";(self.webpackChunkhot_projects_webpack=self.webpackChunkhot_projects_webpack||[]).push([[280],{7790:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}const c=({id:e,...t})=>r.createElement("svg",s({className:"icon",width:"1em",height:"1em",fill:"currentColor",overflow:"hidden","aria-hidden":"true"},t),r.createElement("use",{href:`#${e}`}))},3280:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(7294),s=a(336),c=a(1382),n=a(9669),l=a.n(n),i=a(1216),o=a(7790),m=a(5066),u=a(6486);const d={All:"All",JavaScript:"JavaScript",Ruby:"Ruby",Java:"Java",CSS:"CSS"},p=()=>{const e=sessionStorage.getItem("popularTab"),[t,a]=(0,r.useState)(null!==e?e:d.All),[n,p]=(0,r.useState)([]),[f,v]=(0,r.useState)(1),[E,g]=(0,r.useState)(!1),h=(0,r.useRef)(1),N=(0,r.useRef)(!1),b=(0,r.useRef)([]);(0,r.useEffect)((()=>{h.current=f,y()}),[f,t]),(0,r.useEffect)((()=>{b.current=n}),[n]),(0,r.useEffect)((()=>{N.current=E}),[E]);const w=e=>{E||(h.current=1,N.current=!1,b.current=[],a(e),sessionStorage.setItem("popularTab",e),p([]),g(!1),v(1))},y=async function(){if(E)return;g(!0);const e={All:"",JavaScript:"language:javascript",Ruby:"language:ruby",Java:"language:java",CSS:"language:css"};try{const a=await l()({method:"get",url:"https://api.github.com/search/repositories",params:{page:h.current,q:"stars:>1 "+e[t],sort:"stars",order:"desc",type:"Repositories"}});let r=b.current;r=r.concat(a.data.items),g(!1),p(r)}catch(e){s.ZP.error(e?.response?.data?.message)}};return(e=>{const t=(0,u.throttle)((()=>{"function"==typeof e&&(e=>{const t=window.innerHeight,a=document.body.scrollTop||document.documentElement.scrollTop;document.body.scrollHeight<=t+a&&e()})(e)}),500);(0,r.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[])})((()=>{v(h.current+1)})),r.createElement("div",{className:"popular"},r.createElement("div",{className:"popular-menu"},(()=>{let e=[];for(let a in d)e.push(r.createElement("div",{onClick:()=>{w(a)},className:"popular-menu-item "+(t===a?"active":"")},a));return e})()),r.createElement("div",{className:"popular-content"},n.map(((e,t)=>r.createElement("div",{className:"popular-content-item",key:t},r.createElement("div",{className:"item-index"},"#",t+1),r.createElement(i.ZP,{className:"item-image-lazy",placeholder:r.createElement("img",{className:"item-image",src:m.Z,alt:e.owner.login})},r.createElement("img",{className:"item-image",src:e.owner.avatar_url,alt:e.owner.login})),r.createElement("a",{className:"item-fullName",href:e.clone_url,target:"_blank",rel:"noreferrer"},e.full_name),r.createElement("div",{className:"item-text"},r.createElement("div",{className:"item-text-child"},r.createElement("div",{className:"icon"},r.createElement(o.Z,{className:"icon-account",id:"icon-account"})),r.createElement("a",{className:"item-name item-text-info",href:e.clone_url,target:"_blank",rel:"noreferrer"},e.full_name)),r.createElement("div",{className:"item-text-child"},r.createElement("div",{className:"icon"},r.createElement(o.Z,{className:"icon-start",id:"icon-start"})),r.createElement("div",{className:"item-text-info"},e.stargazers_count," stars")),r.createElement("div",{className:"item-text-child"},r.createElement("div",{className:"icon"},r.createElement(o.Z,{className:"icon-fork",id:"icon-fork"})),r.createElement("div",{className:"item-text-info"},e.forks," forks")),r.createElement("div",{className:"item-text-child"},r.createElement("div",{className:"icon"},r.createElement(o.Z,{className:"icon-issues",id:"icon-issues"})),r.createElement("div",{className:"item-text-info"},e.open_issues_count," Open issues"))))))),r.createElement(c.Z,null,r.createElement("div",{className:"loading"})))}},5066:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"images/loading.gif"}}]);
//# sourceMappingURL=280.bundle.js.map