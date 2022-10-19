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

const v1 = 'Inicial';

self.addEventListener('fetch', function(event) {
  console.log('SW Fecth event');
  const url = new URL(event.request.url);
  console.log(url);
  console.log(url.pathname);
  
  console.log(v1);
  v1 = 'Cambiado';

  //
  if (url.pathname === '/main/res.css') {
    console.log('SW Prueba');
    event.respondWith('');
  }
});

console.log('End SW');
