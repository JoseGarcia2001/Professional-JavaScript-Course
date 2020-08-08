self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  event.respondWith(cachedResponse(request));

  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open("v1");
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPause.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/styles.css",
    "assets/media/BigBuckBunny.mp4",
    "assets/media/github.svg",
    "assets/media/icons8-linkedin-50.png",
    "assets/media/icons8-reproducir-grabación-96.png",
    "assets/media/twitter.svg",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open("v1");
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open("v1");
  const response = await fetch(request);
  return cache.put(request, response);
}
