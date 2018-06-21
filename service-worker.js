/* =============================================================== */
/* EXAMPLE FROM: https://developers.google.com/web/fundamentals/codelabs/offline/ */
/* =============================================================== */

const CACHE_NAME = 'my-site-cache-v3';
const urlsToCache = [
  '/Restaurant-Reviews-App/',
  '/Restaurant-Reviews-App/index.html',
  '/Restaurant-Reviews-App/restaurant.html?id=1',
  '/Restaurant-Reviews-App/restaurant.html?id=2',
  '/Restaurant-Reviews-App/restaurant.html?id=3',
  '/Restaurant-Reviews-App/restaurant.html?id=4',
  '/Restaurant-Reviews-App/restaurant.html?id=5',
  '/Restaurant-Reviews-App/restaurant.html?id=6',
  '/Restaurant-Reviews-App/restaurant.html?id=7',
  '/Restaurant-Reviews-App/restaurant.html?id=8',
  '/Restaurant-Reviews-App/restaurant.html?id=9',
  '/Restaurant-Reviews-App/restaurant.html?id=10',
  '/Restaurant-Reviews-App/js/main.js',
  '/Restaurant-Reviews-App/js/dbhelper.js',
  '/Restaurant-Reviews-App/js/restaurant_info.js',
  '/Restaurant-Reviews-App/css/styles.css',
  '/Restaurant-Reviews-App/css/styles-sm.css',
  '/Restaurant-Reviews-App/css/styles-md.css',
  '/Restaurant-Reviews-App/css/styles-lg.css',
  '/Restaurant-Reviews-App/data/restaurants.json',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }).catch((error) => console.log('Caching error: ', error))
  );
});

self.addEventListener('fetch', (event) => {
   console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});