if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>n(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"anym"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.599c429f.css",revision:null},{url:"/css/app.54e36c09.css",revision:null},{url:"/css/chunk-vendors.8da75437.css",revision:null},{url:"/index.html",revision:"4da854f25e223abf6232bf14a5d5b922"},{url:"/js/about.2ad540d9.js",revision:null},{url:"/js/app.03d1a8d4.js",revision:null},{url:"/js/chunk-vendors.aa6a6dc6.js",revision:null},{url:"/manifest.json",revision:"d5b00943390fa238ccbfe2759f4c72e0"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
