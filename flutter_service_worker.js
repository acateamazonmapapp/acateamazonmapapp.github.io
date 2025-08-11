'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "beca9ab18824ab91480751b788b7108d",
"assets/AssetManifest.bin.json": "6d21ce13c5ae51ad1e9771fad69d3c19",
"assets/AssetManifest.json": "1a13e3c5c32044a17630dddecc1af56f",
"assets/assets/data/updated_2_videos_data.xlsx": "43d591a8bb58d557f36daf3eff7510ee",
"assets/assets/data/updated_videos_data.xlsx": "1e1bd9370d5680ff9262392cbb5b3bb0",
"assets/assets/data/videos_data.xlsx": "43d591a8bb58d557f36daf3eff7510ee",
"assets/assets/images/loading.png": "501ea02dc341fd34b96f61e13d7d251d",
"assets/assets/images/placeholder.png": "1632e46a5c79d43f3125ca62c54189cb",
"assets/assets/images/video_img.png": "1a2828a3d33a6cd2db163c9921df7fde",
"assets/assets/videos/hard_compressed_videos/a%25C3%25B1uje%2520buscando%2520comida.mp4": "9bd93d5e41d90c8fd02e0857cd40ac2d",
"assets/assets/videos/hard_compressed_videos/a%25C3%25B1uje%2520comiendo.mp4": "6a0bc9b97b35a422f7902353f1356823",
"assets/assets/videos/hard_compressed_videos/achunis%2520comiendo%2520ungurahui.mp4": "f2ab800679f1b5eeb46300755c48b807",
"assets/assets/videos/hard_compressed_videos/carachupa%2520negra%2520comiendo%2520ungurahui.mp4": "55f389d86d1f369ed327bcc690cd5c9f",
"assets/assets/videos/hard_compressed_videos/carachupa%2520osando.mp4": "928e001724453488ad9f523a7e56a91b",
"assets/assets/videos/hard_compressed_videos/cotos%2520en%2520la%2520colpa.mp4": "bf231c62f5194e1da61418b1be967b08",
"assets/assets/videos/hard_compressed_videos/dos%2520palomas%2520al%2520pie%2520de%2520ungurahui.mp4": "8844fe01085d64b93595beeec201acb9",
"assets/assets/videos/hard_compressed_videos/dos%2520perdices%2520picando%2520ungurahui.mp4": "814dc2108da9335d893a1662fdc8c2ba",
"assets/assets/videos/hard_compressed_videos/dos%2520sitarraco%2520mamas%2520volando.mp4": "d00121eaaa6438ef0437ca6caa0fc33a",
"assets/assets/videos/hard_compressed_videos/erizo%2520andando.mp4": "57d54e8ea16039d75574c8f2418db15b",
"assets/assets/videos/hard_compressed_videos/erizo%2520en%2520la%2520colpa.mp4": "0152b5642b283572aa5c0ec8d8cf3b3b",
"assets/assets/videos/hard_compressed_videos/huaihuasho%2520colorado.mp4": "5593400cb7055ba967a44af6d9437c9d",
"assets/assets/videos/hard_compressed_videos/maj%25C3%25A1s%2520con%2520rabo%2520con%2520su%2520cr%25C3%25ADa.mp4": "4869eab0a58db478f535eec8db6f615f",
"assets/assets/videos/hard_compressed_videos/maj%25C3%25A1s%2520saltando.mp4": "f715ecc3ab39b3592d6f111c0f749a71",
"assets/assets/videos/hard_compressed_videos/oso%2520hormiguero%2520llevando%2520cr%25C3%25ADa.mp4": "31be5d9aa74a7022bb0de9fb5099c86b",
"assets/assets/videos/hard_compressed_videos/oso%2520hormiguero%2520pasando.mp4": "fd577dc0aa4470c4844c951d57bee65f",
"assets/assets/videos/hard_compressed_videos/oso%2520hormiguero%2520raspando%2520%25C3%25A1rbol.mp4": "383210d73b56c4dfb37bd4f27d375d7c",
"assets/assets/videos/hard_compressed_videos/palomas%2520en%2520la%2520colpa.mp4": "ea0d35cdbbf616a59eb90ceed5a85264",
"assets/assets/videos/hard_compressed_videos/perdiz%2520negra%2520buscando%2520comida.mp4": "891b5a765e8be0d93b8101a51a2b56d5",
"assets/assets/videos/hard_compressed_videos/perdiz%2520picando%2520ungurahui.mp4": "213e9866a5fa64d913ff5e257eed97c0",
"assets/assets/videos/hard_compressed_videos/pericote%2520andando.mp4": "ebee97d500a883da87a0098ea09290f4",
"assets/assets/videos/hard_compressed_videos/puma%2520en%2520la%2520noche.mp4": "d51e377d4c6894dc1c182d5277563ec6",
"assets/assets/videos/hard_compressed_videos/ratas%2520andando.mp4": "d11d7c8956276f6705118e7bb3e1ace0",
"assets/assets/videos/hard_compressed_videos/sacha%2520perro%2520solo.mp4": "4dfb9dc0518e47e6b260381b5e28899f",
"assets/assets/videos/hard_compressed_videos/sachavaca%2520de%2520cerca.mp4": "bdbc112d58bde3fca49a0e1e77ef6ba7",
"assets/assets/videos/hard_compressed_videos/sachavaca%2520pasando.mp4": "dc6b73744eca9da70edb9fb9bb8339f0",
"assets/assets/videos/hard_compressed_videos/sajinos%2520con%2520cr%25C3%25ADas.mp4": "2d5aad4b25261daba0a8d41c16f4e08c",
"assets/assets/videos/hard_compressed_videos/sajinos%2520en%2520colpa%252001.mp4": "12fac1e42e8c056917b35bdebc33c737",
"assets/assets/videos/hard_compressed_videos/sajinos%2520en%2520colpa%252002.mp4": "1fd3544b53ad914480ef0e730d37bd43",
"assets/assets/videos/hard_compressed_videos/sajinos%2520peleando%2520en%2520la%2520colpa.mp4": "30ec1b40cf9af2cc575051341431949a",
"assets/assets/videos/hard_compressed_videos/tigrillo%2520andando.mp4": "45b5de16227fe9b51cb1c33f90eaa518",
"assets/assets/videos/hard_compressed_videos/tigrillo%2520caminando.mp4": "3bad51fb361919505dcd0a14f7f15801",
"assets/assets/videos/hard_compressed_videos/torcazas%2520en%2520la%2520colpa.mp4": "920bc7465c2c581a5c24cdf1f24b6fd5",
"assets/assets/videos/hard_compressed_videos/trompetero%2520comiendo.mp4": "0a5086e602458dccc7e8fcb5fe7cf17a",
"assets/assets/videos/hard_compressed_videos/trompetero%2520pasando.mp4": "7c8e983935d07d0e8e048ce33569a093",
"assets/assets/videos/hard_compressed_videos/tuc%25C3%25A1n%2520volando.mp4": "dc997c9295a941713f4fca38af9028d8",
"assets/assets/videos/hard_compressed_videos/unchala%2520buscando%2520comida.mp4": "79cefd3986590c6e9595f8f4b4896a56",
"assets/assets/videos/hard_compressed_videos/venado%2520cenizo%2520macho.mp4": "aa4aa68ca5f28f217ae05390780d2655",
"assets/assets/videos/hard_compressed_videos/venado%2520colorado%2520en%2520colpa.mp4": "2dfa9644a0425d9e240c2e5536e243b2",
"assets/assets/videos/hard_compressed_videos/venado%2520colorado%2520hembra.mp4": "a2e7c22ea2612d6c16a2bf38462ca4d9",
"assets/assets/videos/hard_compressed_videos/venado%2520colorado%2520macho.mp4": "be3b91fb1e6bce321e4d30b42b553cd3",
"assets/assets/videos/hard_compressed_videos/yangunturillo%2520comiendo%2520ungurahui.mp4": "07d7d51a2afd98108d205acfdd0f7964",
"assets/assets/videos/hard_compressed_videos/yangunturo%2520andando.mp4": "05e309ca7ab49dc73fcb3df8b35fc139",
"assets/assets/videos/hard_compressed_videos/yangunturo%2520comiendo%2520ungurahui.mp4": "83686fe0e97f9cfd3e466fbc1609c65f",
"assets/assets/videos/light_compressed_videos/a%25C3%25B1uje%2520buscando%2520comida.mp4": "d7a5d72634a5b53c9e55ede66c0980bb",
"assets/assets/videos/light_compressed_videos/a%25C3%25B1uje%2520comiendo.mp4": "9a6c6a145a6f21d3cb734e4761b8abeb",
"assets/assets/videos/light_compressed_videos/achunis%2520comiendo%2520ungurahui.mp4": "cbe226efc5d8743b07648662e57a1e1d",
"assets/assets/videos/light_compressed_videos/carachupa%2520negra%2520comiendo%2520ungurahui.mp4": "c4406d3996c00394536161e73ec86025",
"assets/assets/videos/light_compressed_videos/carachupa%2520osando.mp4": "7b0aeb695358325d5f239a8083a13e39",
"assets/assets/videos/light_compressed_videos/cotos%2520en%2520la%2520colpa.mp4": "5fd9b6030faad8cd9243b01896a3f6e5",
"assets/assets/videos/light_compressed_videos/dos%2520palomas%2520al%2520pie%2520de%2520ungurahui.mp4": "0af68971f10ee28f58c1caabb27246fa",
"assets/assets/videos/light_compressed_videos/dos%2520perdices%2520picando%2520ungurahui.mp4": "a26bcd2c518979ed60c36ac7040b6ea0",
"assets/assets/videos/light_compressed_videos/dos%2520sitarraco%2520mamas%2520volando.mp4": "f21dfceff708fdd4f883ac70af6893bd",
"assets/assets/videos/light_compressed_videos/erizo%2520andando.mp4": "ef675783d14e075e955b100c0ac8b685",
"assets/assets/videos/light_compressed_videos/erizo%2520en%2520la%2520colpa.mp4": "90726394705adcfe92bf3dcc3c09821d",
"assets/assets/videos/light_compressed_videos/huaihuasho%2520colorado.mp4": "36f08079412f21eba11cee8487bf5791",
"assets/assets/videos/light_compressed_videos/maj%25C3%25A1s%2520con%2520rabo%2520con%2520su%2520cr%25C3%25ADa.mp4": "7413971bdbc8ed02e3ec70918236d4b1",
"assets/assets/videos/light_compressed_videos/maj%25C3%25A1s%2520saltando.mp4": "7297d6f0663f9e70eee0282662faebcb",
"assets/assets/videos/light_compressed_videos/oso%2520hormiguero%2520llevando%2520cr%25C3%25ADa.mp4": "d565a67266e45b301ee1946cdf605bda",
"assets/assets/videos/light_compressed_videos/oso%2520hormiguero%2520pasando.mp4": "540ecdbbaa67cb7cb4d72cbd0508b30a",
"assets/assets/videos/light_compressed_videos/oso%2520hormiguero%2520raspando%2520%25C3%25A1rbol.mp4": "ad01c4b2702aeaa916e180553c92e051",
"assets/assets/videos/light_compressed_videos/palomas%2520en%2520la%2520colpa.mp4": "eaeab533b84babfe35bfd62d8dc91df3",
"assets/assets/videos/light_compressed_videos/perdiz%2520negra%2520buscando%2520comida.mp4": "5f066264d7210670e349555a330792b9",
"assets/assets/videos/light_compressed_videos/perdiz%2520picando%2520ungurahui.mp4": "80d687cfe1960c3f8251cee62e49ba7a",
"assets/assets/videos/light_compressed_videos/pericote%2520andando.mp4": "2bf70d36a2923f7097792b19de17821e",
"assets/assets/videos/light_compressed_videos/puma%2520en%2520la%2520noche.mp4": "93ec3103f1e3d249e9197ca74288a1ce",
"assets/assets/videos/light_compressed_videos/ratas%2520andando.mp4": "3e2684d364a549f24b450e37e0575692",
"assets/assets/videos/light_compressed_videos/sacha%2520perro%2520solo.mp4": "97e647b3c313cd2315ca794840f01e96",
"assets/assets/videos/light_compressed_videos/sachavaca%2520de%2520cerca.mp4": "2c512727f9e2e7df3b59b36619ad4f71",
"assets/assets/videos/light_compressed_videos/sachavaca%2520pasando.mp4": "1af273c297643fb1e2775f581204f15b",
"assets/assets/videos/light_compressed_videos/sajinos%2520con%2520cr%25C3%25ADas.mp4": "9e87542e9a08a78dda5e6b1ecbb2014a",
"assets/assets/videos/light_compressed_videos/sajinos%2520en%2520colpa%252001.mp4": "4353216ed8bf5648c542a84943afac3e",
"assets/assets/videos/light_compressed_videos/sajinos%2520en%2520colpa%252002.mp4": "f4aa736aef36142c5f6f52a716000110",
"assets/assets/videos/light_compressed_videos/sajinos%2520peleando%2520en%2520la%2520colpa.mp4": "51b56a7347966611342c6eb686b31a27",
"assets/assets/videos/light_compressed_videos/tigrillo%2520andando.mp4": "fb85dfe761a80c4475403c6e13aa3cd9",
"assets/assets/videos/light_compressed_videos/tigrillo%2520caminando.mp4": "78fe5e2956f76554bd88db117dc0939c",
"assets/assets/videos/light_compressed_videos/torcazas%2520en%2520la%2520colpa.mp4": "9586390a94d341bce5e3745cb60fe34a",
"assets/assets/videos/light_compressed_videos/trompetero%2520comiendo.mp4": "bde667d115f5bbdbb501efe38df0f8ac",
"assets/assets/videos/light_compressed_videos/trompetero%2520pasando.mp4": "3b68bf7daee5ce928a1c40d13c31b912",
"assets/assets/videos/light_compressed_videos/tuc%25C3%25A1n%2520volando.mp4": "57e4bf4afa66dbdbc132c5a625f50339",
"assets/assets/videos/light_compressed_videos/unchala%2520buscando%2520comida.mp4": "1aa3f5b769ebfa6565df90f914ffdbd7",
"assets/assets/videos/light_compressed_videos/venado%2520cenizo%2520macho.mp4": "c7a9fbcc8ed5efb62d08ee36aaad6e23",
"assets/assets/videos/light_compressed_videos/venado%2520colorado%2520en%2520colpa.mp4": "ea9f7ee0f898d2b498196d7b2b9d5e02",
"assets/assets/videos/light_compressed_videos/venado%2520colorado%2520hembra.mp4": "7238708908c3bc599349c8b4677442ca",
"assets/assets/videos/light_compressed_videos/venado%2520colorado%2520macho.mp4": "3e076957ed666e69462c4b828c065525",
"assets/assets/videos/light_compressed_videos/yangunturillo%2520comiendo%2520ungurahui.mp4": "4ed2446dc9a8140c8cef18af64612bc8",
"assets/assets/videos/light_compressed_videos/yangunturo%2520andando.mp4": "373339dc0a967206bc1c3648aef21756",
"assets/assets/videos/light_compressed_videos/yangunturo%2520comiendo%2520ungurahui.mp4": "ec3ef29027ea063a4c2e7dfd5950ea24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "35b085e103e8cc8ae1cc9491c04c75d7",
"assets/NOTICES": "707edd6593bd49d884b5b0ba731b2cfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "93bb56e069e946c9c9bae924dfaff646",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf6aa35a10ae6255af49aafba30ecf01",
"/": "bf6aa35a10ae6255af49aafba30ecf01",
"main.dart.js": "08729b091f869539f322cf693f0b9d28",
"manifest.json": "e3f1359280196f60dcdcd73c4b7c62ed",
"version.json": "41182acee4ff5ebb2565195623bfdc7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
