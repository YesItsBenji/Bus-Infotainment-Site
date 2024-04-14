'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7559045ac730aa9f684af995135c7e27",
"assets/AssetManifest.bin.json": "9beb98379f91d298a5c30b8b9aae5f2d",
"assets/AssetManifest.json": "81002f7be8f4405b981383bd802b3c8c",
"assets/assets/audio/5-seconds-of-silence.mp3": "c80b2ce89d8e125f6b6e69c0f2015b22",
"assets/assets/audio/manual_announcements/buggysafety.mp3": "d7ebe58d12adb93dba83316a1208e90e",
"assets/assets/audio/manual_announcements/busondiversion.mp3": "3507be7273a1802ddee975f596600586",
"assets/assets/audio/manual_announcements/busterminateshere.mp3": "a3f117aa5c83794d3a62265b6fb1f4a7",
"assets/assets/audio/manual_announcements/cctvoperation.mp3": "73cb9a3b982666774a3a4433dedba4ff",
"assets/assets/audio/manual_announcements/destinationchange.mp3": "cce2c001a09f60f32be7725af2db8de0",
"assets/assets/audio/manual_announcements/driverchange.mp3": "4a2d85709c0e9fb2285c0fad46d65af8",
"assets/assets/audio/manual_announcements/envirobell.mp3": "fbf5f983bc1ad49d7a112d068e4d6539",
"assets/assets/audio/manual_announcements/facecovering.mp3": "aa2485225c80dd7f0ae9ef95f57f9921",
"assets/assets/audio/manual_announcements/movedownthebus.mp3": "64c6de8983ced79161a69f8ca0f49bcf",
"assets/assets/audio/manual_announcements/nextstopclosed.wav": "29b6fe43b0043c0d4a4f80a261c8ab88",
"assets/assets/audio/manual_announcements/nostanding.mp3": "1e7817a4568220c403f6e539e938cf45",
"assets/assets/audio/manual_announcements/readytodepart.mp3": "f6171fd2b82bba51639612d63e5363e2",
"assets/assets/audio/manual_announcements/safedooropening.mp3": "8b7fa5584129479bcf041068891d5d7a",
"assets/assets/audio/manual_announcements/seatsupstairs.mp3": "687d28a218f55a23b9db5764a1da0388",
"assets/assets/audio/manual_announcements/serviceregulation.mp3": "e66fc0fe3c3f2de7bf88be41dd068655",
"assets/assets/audio/manual_announcements/wheelchairspace1.mp3": "2aec89b623594cda3e8876d480a60b82",
"assets/assets/audio/manual_announcements/wheelchairspace2.mp3": "5213c163ab6e080955d4bf0066ebb645",
"assets/assets/audio/to_destination.wav": "6f2858f9cb242778cf0b4bf9d02b2774",
"assets/assets/datasets/bus-blinds.csv": "d8ac8d27133a04fbebedef04bed13121",
"assets/assets/datasets/bus-sequences.csv": "4dd3a8754e6542df67edec61357f2594",
"assets/assets/fonts/ibus/london-buses-ibus.ttf": "fd4492a2f3aba9f9f33f1065b18b7e8f",
"assets/assets/fonts/lcd/lcddot.ttf": "5bca0e6226c5efcdf97dcfb4793b9037",
"assets/assets/version.txt": "a2256b3f308f7598eb07abcb2f1fc340",
"assets/FontManifest.json": "d281ea49b2c235fc51c0966badaa73cb",
"assets/fonts/MaterialIcons-Regular.otf": "ffe305e8644031e04d20b84b4d91f462",
"assets/NOTICES": "abda41a19fc988a18b36c2e8775ea867",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0685769f72b5e6a4b60e6e8579b839e2",
"/": "0685769f72b5e6a4b60e6e8579b839e2",
"main.dart.js": "980a612ce1f2d7850327df94f23e47b9",
"manifest.json": "2202d416808dd8acb5fdd104d52fb6b1",
"version.json": "fd7e8466557d3b727c228a3ff60561f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
