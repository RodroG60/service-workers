console.log('Start SW');

self.addEventListener('install', function(e) {
  console.log('Install Event:', e);
});

self.addEventListener('activate', function(e) {
  console.log('Activate Event:', e);
});

self.addEventListener('statechange', function(e) {
  console.log('StateChange Event:', e);
});

console.log('End SW');
