if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>n(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"anym"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.1c1bb09c.css",revision:null},{url:"/css/app.5d4b8881.css",revision:null},{url:"/css/chunk-vendors.8da75437.css",revision:null},{url:"/index.html",revision:"4afd4fd4a4aa4ea7356ed003aea6f718"},{url:"/js/about.c7af1e17.js",revision:null},{url:"/js/app.e2eaf178.js",revision:null},{url:"/js/chunk-vendors.09e2c0fd.js",revision:null},{url:"/manifest.json",revision:"d5b00943390fa238ccbfe2759f4c72e0"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
