/* =============================================================== */
/* EXAMPLE FROM: https://developers.google.com/web/fundamentals/codelabs/offline/ */
/* =============================================================== */
/*
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
});*/

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('Restaurant-Reviews-App').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './restaurant.html?id=1',
        './restaurant.html?id=2',
        './restaurant.html?id=3',
        './restaurant.html?id=4',
        './restaurant.html?id=5',
        './restaurant.html?id=6',
        './restaurant.html?id=7',
        './restaurant.html?id=8',
        './restaurant.html?id=9',
        './restaurant.html?id=10',       
         './main.js',
         './dbhelper.js',
         './restaurant_info.js',
         './css/styles.css',
         './css/styles-sm.css',
         './css/styles-md.css',
         './css/styles-lg.css',
         './data/restaurants.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

/*
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('service_worker.js')
    .then(registration =>
      console.log(`Registration succeeded with ${registration.scope}`)
    ).catch(error =>
      console.log(`Registration failed with + ${error}`)
    )
};

const cacheVersion = 'cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheVersion).then(cache =>
      cache.addAll([
        './',
        './js/main.js',
        './js/dbhelper.js',
        './js/restaurant_info.js',
        './css/styles.css',
        './css/small.css',
        './css/medium.css',
        './css/large.css',
        './data/restaurants.json',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './index.html',
        './restaurant.html',
        './restaurant.html?id=1',
        './restaurant.html?id=2',
        './restaurant.html?id=3',
        './restaurant.html?id=4',
        './restaurant.html?id=5',
        './restaurant.html?id=6',
        './restaurant.html?id=7',
        './restaurant.html?id=8',
        './restaurant.html?id=9',
        './restaurant.html?id=10'
      ]))
  );
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});*/