
const CACHE='ap1-f26-v2';
const FILES=['./','./index.html','./learning_snacks.html','./prueferfragen.html','./icon.png','./manifest_learning.json'];
self.addEventListener('install', e=>{self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
