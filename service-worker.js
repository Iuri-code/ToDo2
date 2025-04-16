self.addEventListener('install', event => {
  console.log('Service Worker installiert');
});
self.addEventListener('fetch', event => {
  // Standardmäßig wird aus dem Netzwerk geladen
});
