"use strict";var precacheConfig=[["/RayBDev/omnifood/index.html","b9fac4c89f477b19b41e67ae213a77ac"],["/RayBDev/omnifood/static/css/main.9579c82f.css","23786946498e2f683684da124f3ee9a0"],["/RayBDev/omnifood/static/js/main.587a23f7.js","3715222e548d9d82fd987e2d640a3985"],["/RayBDev/omnifood/static/media/1.ec4871fa.jpg","ec4871fac5f8b622a6f5243352affdd7"],["/RayBDev/omnifood/static/media/2.5d8068eb.jpg","5d8068eb14cea195d405a361f4eecb66"],["/RayBDev/omnifood/static/media/3.b92586dc.jpg","b92586dc030ceb44bc304401ac8c4727"],["/RayBDev/omnifood/static/media/4.d2b48ab9.jpg","d2b48ab94a7b069460230c6a39f083f1"],["/RayBDev/omnifood/static/media/5.3a7dc31c.jpg","3a7dc31cd1986592c850f5c6efa48332"],["/RayBDev/omnifood/static/media/6.db4c17bf.jpg","db4c17bfcfd8568dd9716e1b264f900e"],["/RayBDev/omnifood/static/media/7.0d0e0bf3.jpg","0d0e0bf3945510b34f1c83a652eee2a8"],["/RayBDev/omnifood/static/media/8.30d387f1.jpg","30d387f17b860ae8c8afc5b8b5f91d4d"],["/RayBDev/omnifood/static/media/app-iPhone.2bf4f65e.png","2bf4f65ea58f7723da714750d68fd040"],["/RayBDev/omnifood/static/media/back-customers.a17c3da3.jpg","a17c3da3b81543f4e30bec3166fc6517"],["/RayBDev/omnifood/static/media/berlin.a3ec74fd.jpg","a3ec74fd5cc015af1da7118b130c5ffa"],["/RayBDev/omnifood/static/media/customer-1.b56b4351.jpg","b56b435116658f4521f1a9a16d482501"],["/RayBDev/omnifood/static/media/customer-2.9b6c894a.jpg","9b6c894aa65ca6695c00f356c02555bb"],["/RayBDev/omnifood/static/media/download-app.d0558d91.svg","d0558d91063038236b60e3ef71fdc1fd"],["/RayBDev/omnifood/static/media/lisbon-3.0fb4a5fe.jpg","0fb4a5fedca2d2524d41b03a37c8d74e"],["/RayBDev/omnifood/static/media/logo-white.93f9c925.png","93f9c92588a66b37be5b7ec4bc950858"],["/RayBDev/omnifood/static/media/logo.6762543a.png","6762543a5c1deed3472b676309560f77"],["/RayBDev/omnifood/static/media/london.f42da570.jpg","f42da5700bb50339bf6d09a18b820b1d"],["/RayBDev/omnifood/static/media/san-francisco.817c8935.jpg","817c89356d01e29c8789fdabf859ae7f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/RayBDev/omnifood/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});