"use strict";(self.webpackChunkhot_projects_webpack=self.webpackChunkhot_projects_webpack||[]).push([[140],{7790:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294);const r=function({id:e,className:t}){return l.createElement("svg",{className:`icon ${t}`,width:"1em",height:"1em",fill:"currentColor",overflow:"hidden","aria-hidden":"true"},l.createElement("use",{href:`#${e}`}))}},2140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7294),r=a(7790),c=a(3061),n=a(336),s=a(5504),m=a(8573),i=a(6974),d=a(5066),o=a(1216);const E="playerOne",p="playerTwo",u=()=>{const e=(0,l.useRef)(""),t=(0,l.useRef)(""),[a,u]=(0,l.useState)(""),[v,N]=(0,l.useState)(""),b=(0,i.s0)(),h=a=>{a===E?e.current?(u(e.current),e.current=""):n.ZP.error("请先填写后再提交"):t.current?(N(t.current),t.current=""):n.ZP.error("请先填写后再提交")},y=(e,t)=>l.createElement("div",{className:"render-player"},l.createElement("div",{className:"render-player-data"},l.createElement(o.ZP,{placeholder:l.createElement("img",{className:"item-image",src:d.Z,alt:"player"})},l.createElement("img",{src:`https://github.com/${e}.png?size=200`,alt:"player"})),l.createElement("div",{className:"player-name"},e)),l.createElement(c.Z,{onClick:()=>(e=>{e===E?u(""):N("")})(t),className:"render-player-icon"}));return l.createElement("div",{className:"battle"},l.createElement("div",{className:"battle-title"},"Instructions"),l.createElement("div",{className:"battle-step"},l.createElement("div",{className:"battle-step-item"},l.createElement("div",{className:"step-item-name"},"Enter two Github"),l.createElement("div",{className:"step-item-icon-user"},l.createElement(r.Z,{id:"icon-users"}))),l.createElement("div",{className:"battle-step-item"},l.createElement("div",{className:"step-item-name"},"Battle"),l.createElement("div",{className:"step-item-icon-battle"},l.createElement(r.Z,{id:"icon-battle"}))),l.createElement("div",{className:"battle-step-item"},l.createElement("div",{className:"step-item-name"},"See the winner"),l.createElement("div",{className:"step-item-icon-winner"},l.createElement(r.Z,{id:"icon-winner"})))),l.createElement("div",{className:"battle-player"},l.createElement("div",{className:"battle-player-title"},"Players"),l.createElement("div",{className:"battle-player-context"},a?y(a,E):l.createElement("div",{className:"battle-player-context-item"},l.createElement("div",{className:"context-item-title"},"Player One"),l.createElement("div",{className:"context-item-data"},l.createElement(s.Z,{onPressEnter:()=>h(E),onChange:t=>e.current=t.target.value,className:"context-item-data-input",placeholder:"github username"}),l.createElement(m.Z,{onClick:()=>h(E)},"Submit"))),v?y(v,p):l.createElement("div",{className:"battle-player-context-item"},l.createElement("div",{className:"context-item-title"},"Player Two"),l.createElement("div",{className:"context-item-data"},l.createElement(s.Z,{onPressEnter:()=>h(p),onChange:e=>t.current=e.target.value,className:"context-item-data-input",placeholder:"github username"}),l.createElement(m.Z,{onClick:()=>h(p)},"Submit")))),l.createElement("div",{className:"battle-button",style:a&&v?{}:{visibility:"hidden"}},l.createElement(m.Z,{type:"primary",onClick:()=>{b(`/battle/result/${a}/${v}`)}},"Battle"))))}},5066:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"images/loading.gif"}}]);
//# sourceMappingURL=140.js.map