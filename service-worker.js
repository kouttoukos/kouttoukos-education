const CACHE_NAME = "kouttoukos-education-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Προς το παρόν δεν κάνουμε offline caching.
  // Αφήνουμε τα requests να περνούν κανονικά στο Internet.
});
