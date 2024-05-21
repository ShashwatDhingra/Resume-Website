'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4e313d6532727e9fab88c7e4ad786ca0",
".git/config": "cf61e772d30813043e4ad2581b12bb91",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9087752d85886b1d420981fa2f634419",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8147be66ea3abca286b61f592cda1c57",
".git/logs/refs/heads/main": "0e3666cab11731c3c7ed9f1d206a52be",
".git/logs/refs/remotes/origin/main": "c586d697fd423425bc2c1dbf3f678781",
".git/objects/01/29b805c0aa40f64e17212a29942d8f2002fe7f": "baf03ec3707543ca891eacb7fccf1f5f",
".git/objects/01/71a95a1dc72682271b5ba69b7c2f94b94b1a66": "4238cca2c7bcb0dc1c251294d0681bdb",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/d5127c04b17a9a62121d12aeb00b701e920500": "e2a9bf3fec6e17ec821e8b25c7bd1280",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/704f6b1e31ed4b84222a08fea8fa5841de04b0": "7022d781277265a3ae44eadf8e9fe6be",
".git/objects/2a/700bd769687928dfe0a516a1549aa84451e4d2": "caf9caeb20119dc76b2d393fa6e1f66b",
".git/objects/2a/f169e83d16206e50e729b4e5227706ec720f85": "29c0a6a10fc61990acb67925f205d12c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/ca58cbac2f4241cedd3ec665789dd2308b6ebb": "adc3857f5dc4ef447c353a34ea6e9108",
".git/objects/33/b6043b571f5e73e96fbd2348aa737a2bda1183": "0fa225c53a551dab48922fa605fc4471",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3d/efbfe71d400fb50abc11aded55c33de3f886f2": "109153e88c7b7ead6bea2998c933eee0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/5c1dd8279b2f092b205d220b6af8d26f3385f5": "dc1e816aa5ae0c7cb327d830ab8ac06a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/41bf10f9ca43503f3c8353b9b8b6e7d398243d": "000b1356f2054c916e9ce61b036a4cfe",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/4327185d00e97aa36e09c90297174114d7692d": "392e3b3df338f02088376bf47e8f4b87",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/ecf897e9b087281f4f7ddaad72814e7f8ca8b3": "6e9c85cac6335120182b2727ce764ce7",
".git/objects/52/059c3a3da3fed017096a7f9b6189264bda150b": "cc21ad1b7a7096a79889ec3cd9661684",
".git/objects/54/a2ea09bebd861cce218dcfb4aa93a34903b826": "19ade651235e97d5571e7f136d479588",
".git/objects/57/15e7858982283248fe36765f21ad61e907ac12": "c7be074850e06ae77018af2df66d178b",
".git/objects/58/50db80adae0dd682f896e13ee89c04628466bf": "4edbabb773a561f28e8f68173522d3a8",
".git/objects/5f/319a3a77e3ed38c0ce08f9ba306bfbce0c5a3c": "2bf23bc5bc3935625515320918f106ed",
".git/objects/60/323ed6abdf13d27724c20971cae30198b4bebc": "9a2cc7330c419dd0255f26dcd8250b07",
".git/objects/61/230e918ee24455d8e6d0eb642b258877f8b90f": "bff18ff3d7f96a3b2cd143c754cae016",
".git/objects/64/dcc01ed950aafd0930e667c9640089ccb96807": "941a12b8991d7a58720a5fe8103c8454",
".git/objects/64/ddce0d9d569809206dec16b79d46f93cb93e33": "705db339506b38953e5aae10da8657ee",
".git/objects/80/0531084fa6cecc3b7ee732bc66582d0f889aed": "18ca3ebee6bd116d77e00864e95360f4",
".git/objects/82/1d51766ae5d367a10b4602a48825a083b95736": "a86ae0cffd3055b9da52fe463e666209",
".git/objects/85/204e3b1b5632634af321fc8f27ad1a1e974269": "905ee90175bba1e12ac0cea4d2405660",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/ceb0bd6680afc8007f283476a5f5523aed7187": "f8dbf1eae318025288e08aab40afe912",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/98468a58d3e80f085c9c79c62911f7cce43f48": "ba6044ca4864a5d14b2f1e63f4243d10",
".git/objects/9f/0e1f99cef4f37944f9f70479e726ba66cae5fc": "0baf1e8364e3ee92f48fdfaad6842e18",
".git/objects/9f/f437e1c5234bb6ec4274e8f1acf5c9996d37cb": "cc0ebce015f008166a8ed8cabaafb1b4",
".git/objects/a4/fc559e9610efc698245564fd4b220f989aed6e": "8fcb415a35cbc83e9f24b617d6914c5c",
".git/objects/a5/634a9d3b92d76e88d76e950e9cec4742bb72da": "48c34abb2393583b9526a8efacfff477",
".git/objects/a6/5ad44b7144ca5a770747fefb11f29ad97ca7e8": "892e62fc55a8cdd583a708f11c1f0e5b",
".git/objects/ac/00a86c4a1db118c2e287a584ca6e6a31af5b48": "d1eeeb5e523e011dac06c850be16f8e7",
".git/objects/b3/1b83348ebb4fb921fea5ed9ce9bccc1205a731": "d8821db34186c98dfdc2eb993030f9a4",
".git/objects/b4/8d99f0f563b29b626e6a21bd427dcb5d956baf": "5d7b34048b74028cb21f5536d2403a9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1c1577f09f28e99290b06855dc9e17a0b5dd21": "ab67551a5f083f915e1980bd4ea36982",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/3d8128c7673dd9e7f812d1c68fbca52827695c": "44f9f9b14d8f2e32b190a26000401b40",
".git/objects/cb/4e39d2ee4b6271edd8ab4ffb12c5835436b71a": "73997bfca6b95f61f0a86239fd8aa415",
".git/objects/cc/a54aad1cd7236d23e8523dc562fd54ffbe2397": "0791b747be9ee33bab2f5c069cfbd035",
".git/objects/d4/0589a08d72b1fd9e521d732d402313f27c7fef": "27e4659bf5f8bad1cd10463c2b2ded8b",
".git/objects/d5/548e92ccc83fffba2d80b8849f46675429df5b": "ff343ea564a10664c5d2982daff7e941",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/2150ba153ad0698ebebf687c57d8dea11250d5": "4db83f04e408bfa2e38e209754f38e70",
".git/objects/e6/32451f2c2b4a3ad6bb88f18b6dda6ff1ad95e8": "f1a7efb709a4e67acecb16b87e5e8705",
".git/objects/e7/07c4da822081ca26b8265cc088c50314a34121": "96fec6fb701863942ca2923d4b9c3627",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e2cea5b545b0e2bc321004440f20f3524c92ef": "243816540529dfeb20af0f083c5a859b",
".git/objects/f4/634cd7c3f16e8b1ffd01f2ea4a824b3b25991d": "b81b0f4a4b2e3399239e4b475a3d1a96",
".git/objects/f8/e3d5abfaab1eceab7694bb74d08aafce0ae545": "c4ebf474bbbc1604a139a946201ea12f",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/2bacab8342ad5ee1ea64597d7a53abd78f1a0d": "cc29593e45b0c410f097cfa500d02bf5",
".git/refs/heads/main": "bc1205f69f100b3da31b4039be0be54e",
".git/refs/remotes/origin/main": "bc1205f69f100b3da31b4039be0be54e",
"assets/AssetManifest.bin": "47b4138755bc27914c025c981dc7cff9",
"assets/AssetManifest.bin.json": "2e15212d406e8fe6074ab5a768a34414",
"assets/AssetManifest.json": "963c28c377648e545ea52ada225a9cce",
"assets/assets/anims/anim.riv": "bb49371e6980b4b4265c58fc920e460b",
"assets/assets/fonts/quicksand/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/assets/fonts/quicksand/Quicksand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"assets/assets/fonts/quicksand/Quicksand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/assets/fonts/quicksand/Quicksand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/assets/fonts/quicksand/Quicksand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/assets/images/bg_img.png": "62af7543a56b4d65f9f0da15bd87e6c2",
"assets/assets/logos/arrow_right.png": "d85dacebca16913aa8b2af4a70eefbb4",
"assets/assets/logos/drive_logo.png": "4545e93a58b9533119fcc19533084cde",
"assets/assets/logos/git_hub_logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/logos/laptop.png": "bb728251d9d8535ed60a4406113b0e79",
"assets/assets/logos/mail_logo.svg": "20e8982ec7e03638afe27f5c3e897681",
"assets/assets/logos/map_pin_logo.svg": "b2f804bda31dee415fc2b1ff7ba9315f",
"assets/assets/logos/phone_logo.svg": "2b9903504f576446fc7c2bc64d64790f",
"assets/assets/logos/profile_image_logo.png": "c6acce6bcafd8c54f63729630c02b694",
"assets/FontManifest.json": "4a5074c4657d40e653eed5868b80a862",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "445908c02017cd3a803c5698e6a8f173",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "308fd376cccead1d86e798c574dc36a1",
"/": "308fd376cccead1d86e798c574dc36a1",
"main.dart.js": "f38baa47c959c148702094fe527e1c4d",
"manifest.json": "63a14fde13fe24a3673a2a5d2fdf45b0",
"version.json": "389e58e210a0376be374527a5d3970c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
