if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const d=e=>n(e,a),l={module:{uri:a},exports:c,require:d};i[a]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"114.css",revision:"5484afdef9a23e03dd211d928228a49c"},{url:"28ceff39ee3e17dc99db.woff?t=1708865856766",revision:null},{url:"39.bundle.js",revision:"71ebd51848b42587bd0edca789075e2c"},{url:"39f4def56d0e8712909a.woff2?t=1708865856766",revision:null},{url:"465.bundle.js",revision:"6b77c97cd91d9e270d7d971a635975f5"},{url:"4c942de19d980993f612.ttf?t=1708865856766",revision:null},{url:"8542c1bb279bcd77063a.eot?t=1708865856766",revision:null},{url:"887.bundle.js",revision:"9a865ac6459c922b7fd09be376e0128c"},{url:"a174fcfb1a82c6b25273.jpg",revision:null},{url:"app.webmanifest",revision:"46e0be140e25c45a1671ce62abb7d3a3"},{url:"app~33eeb3ce.bundle.js",revision:"2af513ddfa18bae02ce4909604267818"},{url:"app~a51fa3f5.bundle.js",revision:"cdf7541261e20dea984aac60875fb39f"},{url:"app~c6d26e47.bundle.js",revision:"f3653b5d802ad9bd56235426153e52b8"},{url:"app~e4317507.bundle.js",revision:"2ec5e9937102591844ad8fbcd1f9769a"},{url:"app~ea9f8aa8.bundle.js",revision:"5b2d390d15b926e82ef6c0809f664740"},{url:"app~f6563343.bundle.js",revision:"5144d49341b2ae340bd1bf015fe03c95"},{url:"app~f6563343.css",revision:"ef766e0b886cfc75423b45113f851180"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"e21bf0619419a1f63192.jpg",revision:null},{url:"icons/128px.png",revision:"b3793b144cfe2ac38c242c6f41341880"},{url:"icons/144px.png",revision:"2732961a20488a3a816b9bcd8e8cfc62"},{url:"icons/152px.png",revision:"f7f8a36b4fb0283ae8e6e8ec6910c540"},{url:"icons/192px.png",revision:"be24a8c898f3884411e70c7807852e15"},{url:"icons/384px.png",revision:"3994684288cb98c1f45b10910bacbc2a"},{url:"icons/512px.png",revision:"21fab313a3bf18902a344f50378308de"},{url:"icons/72px.png",revision:"3b9d1e7b1f67703ab8467416afd02011"},{url:"icons/96px.png",revision:"45ef8788d4d6e6b685e36e5e27b8b959"},{url:"index.html",revision:"5d91e2f3a4018c41e2fbc4ae03a96e34"},{url:"webAssets/default_profile.png",revision:"538cd903431191b73464e05e97f330b8"},{url:"webAssets/faviconLaperzz.ico",revision:"71eeee91529d86fc6af21642b1859807"},{url:"webAssets/logo_laperzz.png",revision:"5f1c51840a805b4de8e984c5d9b5522a"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
