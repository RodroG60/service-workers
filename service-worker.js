console.log('Start SW');

self.addEventListener('install', function(e) {
  console.log('SW Install Event:', e);
});

self.addEventListener('activate', function(e) {
  console.log('SW Activate Event:', e);
});

self.addEventListener('statechange', function(e) {
  console.log('SW StateChange Event:', e);
});

console.log('End SW');
