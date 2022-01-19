var cacheName = 'appish';
var filesToCache = [
  './',
  './index.html',
  './assets/css/vendors/bootstrap.css',
  './assets/css/vendors/bootstrap.rtl.css',
  './assets/css/vendors/audioplayer.css',
  './assets/css/vendors/emoji.css',
  './assets/css/vendors/slick-theme.css',
  './assets/css/vendors/slick.css',
  './assets/css/vendors/leaflet-map.css',
  './assets/css/dark.css',
  './assets/css/date-picker.css',
  './assets/css/pricing-slider.css',
  './assets/css/prism.css',
  './assets/css/style.css',
  './assets/js/bootstrap.bundle.min.js',
  './assets/js/chart/apex-chart/apexcharts.js',
  './assets/js/chart/apex-chart/chart-custom.js',
  './assets/js/chart/apex-chart/graph-custom.js',
  './assets/js/date-picker/datepicker.js',
  './assets/js/date-picker/datepicker.en.js',
  './assets/js/date-picker/datepicker.custom.js',
  './assets/js/jquery-3.6.0.min.js',
  './assets/js/countdown.js',
  './assets/js/emoji.js',
  './assets/js/feather.min.js',
  './assets/js/infinityScroll.min.js',
  './assets/js/isotope.min.js',
  './assets/js/isotope.custom.js',
  './assets/js/jquery.background-video.js',
  './assets/js/jquery.fillcolor.js',
  './assets/js/jquery.min.js',
  './assets/js/leaflet-map-custom.js',
  './assets/js/leaflet-map.js',
  './assets/js/notify-custom.js',
  './assets/js/notify.js',
  './assets/js/otp.js',
  './assets/js/pricing-slider.js',
  './assets/js/prism.min.js',
  './assets/js/progress-bar.js',
  './assets/js/slick.js',
  './assets/js/slick.min.js',
  './assets/js/slick-custom.js',
  './assets/js/text-resizer.js',
  './assets/js/theme-setting.js',
  './assets/js/timer.js',
  './assets/js/wavesurfer.js',
  './assets/js/wavesurfer.regions.min.js',
  './assets/js/wavesurfer.custom.js',
  './assets/js/script.js',
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
