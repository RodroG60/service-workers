console.log('Start SW');

self.addEventListener('install', function(e) {
  console.log('SW Install Event:', e);
});

self.addEventListener('activate', function(e) {
  clients.claim();
  console.log('SW Activate Event:', e);
});

self.addEventListener('statechange', function(e) {
  console.log('SW StateChange Event:', e);
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  console.log(url);

  //
  if (url.pathname === 'Prueba') {
    console.log('Prueba');
    event.respondWith('');
  }
});

console.log('End SW');
