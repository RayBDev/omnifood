"use strict";var precacheConfig=[["/omnifood/build/index.html","171c6ee4b90fbe2e3fc2b36ac87e5150"],["/omnifood/build/static/css/main.33b46bb9.css","2d60c1250432441789257782fe589552"],["/omnifood/build/static/js/main.b8a2fede.js","3c5473af2262815837936a9eecdb1e15"],["/omnifood/build/static/media/1-min.b433b004.jpg","b433b00499c169f012f41523a1881801"],["/omnifood/build/static/media/2-min.24727145.jpg","247271455f26896a71a760363c06bbb4"],["/omnifood/build/static/media/3-min.49715d2f.jpg","49715d2f3ef8d5bb4b82767e8aeb59e6"],["/omnifood/build/static/media/4-min.e1d9991c.jpg","e1d9991c04044cf8f780121d3a0025ae"],["/omnifood/build/static/media/5-min.230efd49.jpg","230efd495db4704a5c1e839ab2478c2f"],["/omnifood/build/static/media/6-min.3fff568e.jpg","3fff568e8117b2d2e7c9cfe3ccebaca7"],["/omnifood/build/static/media/7-min.b6415812.jpg","b6415812c74909a5378e659c2776d2b1"],["/omnifood/build/static/media/8-min.ca51b454.jpg","ca51b45416642734542855e7f5791a8f"],["/omnifood/build/static/media/app-iPhone-min.fb1cc7a5.png","fb1cc7a5d95b22854d78c790cceb1453"],["/omnifood/build/static/media/back-customers-min.cd8e0982.jpg","cd8e09829e91c566f92c4e6b396dfa2b"],["/omnifood/build/static/media/berlin-min.86043218.jpg","860432189f4381f14fa44ff8eddef33c"],["/omnifood/build/static/media/download-app.d0558d91.svg","d0558d91063038236b60e3ef71fdc1fd"],["/omnifood/build/static/media/hero-min.bc9b7aa7.jpg","bc9b7aa7061274fbd1a8361a205a4fe5"],["/omnifood/build/static/media/lisbon-3-min.9fb29ff7.jpg","9fb29ff73b125203f730902ca86a297a"],["/omnifood/build/static/media/logo-min.deaf6916.png","deaf69164dbfd3da10c9dd03f8a2dfea"],["/omnifood/build/static/media/logo-white-min.d74303bb.png","d74303bba1e24f392c97c0117e45c5c0"],["/omnifood/build/static/media/london-min.0fd15ecc.jpg","0fd15ecc4466dd08a6aeb690a5abb94a"],["/omnifood/build/static/media/san-francisco-min.7839e7e9.jpg","7839e7e9ca8af1c82236081bba654939"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var i=new URL(e);return a&&i.pathname.match(a)||(i.search+=(i.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),i=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var i="/omnifood/build/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});