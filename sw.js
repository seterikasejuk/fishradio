self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fishcast').then(cache =>
      cache.addAll([
        'index.html',
        'manifest.json',
        'icon.png',
        'episode.mp3'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
