if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const f=e=>s(e,t),l={module:{uri:t},exports:c,require:f};i[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-ed58f0de"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"d1c333ebfe842ba1941055e241426889"},{url:"install.bundle.js",revision:"34ea1e09bbaecb623cfb0a5bdf555785"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"4ada5c147043f9c1c7f14a95aba45815"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.css",revision:"55000d38b02080fb4cbf975ce66bb3a4"},{url:"src-sw.js",revision:"9dff00cb701158c307610ab42aaa7e1c"}],{}),e.registerRoute(/\.(png|svg|jpg|jpeg|gif)$/i,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));