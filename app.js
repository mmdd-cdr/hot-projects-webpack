(()=>{var e,t,r,n,a,l,o,i={1726:(e,t,r)=>{"use strict";var n=r(7294),a=r(745),l=r(9711),o=r(6974);const i=()=>n.createElement("div",{className:"footer"},"版权所有 © GITHUB"),c=()=>{const e=(0,o.TH)();return n.createElement("div",{className:"header"},n.createElement("div",{className:"header-button"},n.createElement(l.rU,{className:"header-nav "+("/"===e.pathname?"active":""),to:"/"},"Popular")),n.createElement("div",{className:"header-button"},n.createElement(l.rU,{className:"header-nav "+("/battle"===e.pathname?"active":""),to:"/battle"},"Battle")))};r(693),r(6932);const s=(0,n.lazy)((()=>Promise.all([r.e(736),r.e(140)]).then(r.bind(r,2140)))),u=(0,n.lazy)((()=>Promise.all([r.e(736),r.e(874)]).then(r.bind(r,9874)))),d=(0,n.lazy)((()=>Promise.all([r.e(736),r.e(280)]).then(r.bind(r,3280)))),m=()=>(0,o.V$)([{path:"/",element:n.createElement(n.Suspense,{fallback:null},n.createElement(d,null))},{path:"/battle",element:n.createElement(n.Suspense,{fallback:null},n.createElement(s,null))},{path:"/battle/result/:playerOne/:playerTwo",element:n.createElement(n.Suspense,{fallback:null},n.createElement(u,null))}]);a.createRoot(document.getElementById("root")).render(n.createElement(l.VK,null,n.createElement("div",{className:"page"},n.createElement(c,null),n.createElement("div",{className:"app-router"},n.createElement(m,null)),n.createElement(i,null))))},6932:()=>{function e(){const e=document.documentElement.clientWidth/750;document.documentElement.style.fontSize=100*Math.min(e,2)+"px"}e(),window.onresize=function(){e()}}},c={};function s(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=i,e=[],s.O=(t,r,n,a)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],o=!0,i=0;i<r.length;i++)(!1&a||l>=a)&&Object.keys(s.O).every((e=>s.O[e](r[i])))?r.splice(i--,1):(o=!1,a<l&&(l=a));if(o){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);s.r(a);var l={};t=t||[null,r({}),r([]),r(r)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,s.d(a,l),a},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+".js",s.miniCssF=e=>"static/css/"+e+"."+{140:"1ce65883",280:"bafe0576",874:"aa75c82f"}[e]+".chunk.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},a="hot-projects-webpack:",s.l=(e,t,r,l)=>{if(n[e])n[e].push(t);else{var o,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+r){o=d;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",a+r),o.src=e),n[e]=[t];var m=(t,r)=>{o.onerror=o.onload=null,clearTimeout(p);var a=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),i&&document.head.appendChild(o)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),l=e=>new Promise(((t,r)=>{var n=s.miniCssF(e),a=s.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(o=r[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var l=document.getElementsByTagName("style");for(n=0;n<l.length;n++){var o;if((a=(o=l[n]).getAttribute("data-href"))===e||a===t)return o}})(n,a))return t();((e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=l=>{if(a.onerror=a.onload=null,"load"===l.type)r();else{var o=l&&("load"===l.type?"missing":l.type),i=l&&l.target&&l.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=i,a.parentNode.removeChild(a),n(c)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),o={143:0},s.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{140:1,280:1,874:1}[e]&&t.push(o[e]=l(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={143:0};s.f.j=(t,r)=>{var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var l=s.p+s.u(t),o=new Error;s.l(l,(r=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",o.name="ChunkLoadError",o.type=a,o.request=l,n[1](o)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[l,o,i]=r,c=0;if(l.some((t=>0!==e[t]))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(i)var u=i(s)}for(t&&t(r);c<l.length;c++)a=l[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},r=self.webpackChunkhot_projects_webpack=self.webpackChunkhot_projects_webpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var u=s.O(void 0,[736],(()=>s(1726)));u=s.O(u)})();
//# sourceMappingURL=app.js.map