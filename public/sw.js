const CACHE = 'apexbyte-v2';
const CORE_ASSETS = [
  '/',
  '/icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE_ASSETS)).then(self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => (k !== CACHE ? caches.delete(k) : undefined)))).then(self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Cache Unsplash and same-origin images with a cap
  if (url.origin === location.origin || url.hostname.includes('images.unsplash.com')) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const resp = await fetch(request, { credentials: 'omit' });
        cache.put(request, resp.clone());
        // Evict old entries (best-effort)
        const keys = await cache.keys();
        if (keys.length > 80) await cache.delete(keys[0]);
        return resp;
      } catch (e) {
        return cached || Response.error();
      }
    })());
  }
});
