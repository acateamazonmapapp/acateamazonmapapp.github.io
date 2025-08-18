'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "22104bcfa1f02fd1b85a4762c2d51e16",
"assets/AssetManifest.bin.json": "92416e608810415f3cb425a81bad2d8f",
"assets/AssetManifest.json": "1c36c38a370505dc72a25543f150d995",
"assets/assets/data/updated_2_videos_data.xlsx": "43d591a8bb58d557f36daf3eff7510ee",
"assets/assets/data/updated_3_videos_data.xlsx": "4580552f90e4900370fa0f1b019dd64a",
"assets/assets/data/updated_videos_data.xlsx": "1e1bd9370d5680ff9262392cbb5b3bb0",
"assets/assets/data/updated_with_coordinates.xlsx": "8eb76eea4d0a3b46effc4621fd13ff8a",
"assets/assets/data/videos_data.xlsx": "43d591a8bb58d557f36daf3eff7510ee",
"assets/assets/images/loading.png": "501ea02dc341fd34b96f61e13d7d251d",
"assets/assets/images/placeholder.png": "1632e46a5c79d43f3125ca62c54189cb",
"assets/assets/images/video_img.png": "1a2828a3d33a6cd2db163c9921df7fde",
"assets/assets/videos/all_images/a%25C3%25B1uje%2520buscando%2520comida.jpg": "fa606846b90dccf120e07fc8ff649652",
"assets/assets/videos/all_images/a%25C3%25B1uje%2520comiendo.jpg": "051658d40a6c54a1b548508bb9276afe",
"assets/assets/videos/all_images/a%25C3%25B1uje%2520pasando.jpg": "2544e3abc8677f15f632c94a2cfb0a12",
"assets/assets/videos/all_images/achunis%2520comiendo%2520ungurahui.jpg": "29c46fbe42fc5331fd7020144505edf1",
"assets/assets/videos/all_images/carachupa%2520negra%2520comiendo%2520ungurahui.jpg": "b0fa7faea5fa2a3ed60c132558e1ce6f",
"assets/assets/videos/all_images/carachupa%2520negra%2520par%25C3%25A1ndose.jpg": "021b173a226fa72a8887435395a29326",
"assets/assets/videos/all_images/carachupa%2520osando.jpg": "a60af7e65056f513e703398e6b4db580",
"assets/assets/videos/all_images/cotos%2520en%2520la%2520colpa.jpg": "55e0b3add19fd94c622f5ff0eb9ba0eb",
"assets/assets/videos/all_images/dos%2520erizos.jpg": "80631563406d742c3431e30c0685033f",
"assets/assets/videos/all_images/dos%2520majases%2520andando%2520juntos.jpg": "eb05c0749fdafdc5cd7b59d51129f406",
"assets/assets/videos/all_images/dos%2520palomas%2520al%2520pie%2520de%2520ungurahui.jpg": "08d29ede2c429a678cf80bef60fc2fee",
"assets/assets/videos/all_images/dos%2520perdices%2520picando%2520ungurahui.jpg": "1637add01729b9b8d1cc193b6bef1fdc",
"assets/assets/videos/all_images/dos%2520sitarraco%2520mamas%2520volando.jpg": "be184a51327f01f8b3534d2575e56a94",
"assets/assets/videos/all_images/erizo%2520andando.jpg": "5de72cb0b2a695c97d7c5c3189dfd7cb",
"assets/assets/videos/all_images/erizo%2520en%2520la%2520colpa.jpg": "8b04a4e473a15c7354263b89b8bcf1cb",
"assets/assets/videos/all_images/huaihuasho%2520colorado.jpg": "6c87b6f4dc111a1c5efdf42330ab74c6",
"assets/assets/videos/all_images/maj%25C3%25A1s%2520con%2520rabo%2520con%2520su%2520cr%25C3%25ADa.jpg": "1956ca5f43b7ad725a4a3753d6082866",
"assets/assets/videos/all_images/maj%25C3%25A1s%2520saltando.jpg": "8603ab2978fd4c95fd54c32edc1e9e06",
"assets/assets/videos/all_images/mono%2520negro%2520andando%2520en%2520tierra.jpg": "fdf75238145f466a608b1fde4bccc6e0",
"assets/assets/videos/all_images/muchas%2520torcazas%2520en%2520la%2520colpa.jpg": "7b78dd877ae35ff339dfd4692d6adcec",
"assets/assets/videos/all_images/oso%2520hormiguero%2520llevando%2520cr%25C3%25ADa.jpg": "9961e66c9e3c29c4e2b589fc5a96dcdf",
"assets/assets/videos/all_images/oso%2520hormiguero%2520pasando.jpg": "5a166ff40950a85baffc8c410d05d3cd",
"assets/assets/videos/all_images/oso%2520hormiguero%2520raspando%2520%25C3%25A1rbol.jpg": "fe9425c590bab36c3f57e92a336b8fe1",
"assets/assets/videos/all_images/pavas%2520en%2520la%2520colpa.jpg": "a00dcd15bc2d1984cfb2f9a5d7a22aa6",
"assets/assets/videos/all_images/perdiz%2520grande%2520andando.jpg": "d075385960e43da65cbe5d96d82615a6",
"assets/assets/videos/all_images/perdiz%2520negra%2520buscando%2520comida.jpg": "3460d55a25591975ade51b16bdb5c393",
"assets/assets/videos/all_images/perdiz%2520peque%25C3%25B1a%2520andando.jpg": "50aea208667dd8e9b5e1cbb4d153d121",
"assets/assets/videos/all_images/perdiz%2520picando%2520ungurahui.jpg": "958b5f22c54b5d9bf028b88bb5e662c3",
"assets/assets/videos/all_images/pericote%2520andando.jpg": "09fd68491757b3aedbdd276df1e87eee",
"assets/assets/videos/all_images/pucacungas%2520corriendo.jpg": "1ee942d1c1e9692e096b4e081a4cc1b3",
"assets/assets/videos/all_images/puma%2520en%2520la%2520noche.jpg": "81b984e639c3fb65774b15b3492dd9a2",
"assets/assets/videos/all_images/ratas%2520andando.jpg": "4a3705c49b7942dd1432d761161b2afd",
"assets/assets/videos/all_images/sacha%2520perro%2520solo.jpg": "dc7a77259b379bdb8ce196ea497b955d",
"assets/assets/videos/all_images/sachavaca%2520de%2520cerca.jpg": "3edb3e260270bacec8a6b788ea92d7ef",
"assets/assets/videos/all_images/sachavaca%2520pasando.jpg": "32aebbc919fe9f3a5c0798426948da82",
"assets/assets/videos/all_images/sajino%2520escarbando%2520hojarasca.jpg": "b68c2b31a0d60dbfec3f806688ee9a80",
"assets/assets/videos/all_images/sajino%2520rasc%25C3%25A1ndose.jpg": "520757aac1380247da290400b42eeffb",
"assets/assets/videos/all_images/sajinos%2520comiendo%2520barro.jpg": "2f61fd4dac711dffc60a4210e3394073",
"assets/assets/videos/all_images/sajinos%2520con%2520cr%25C3%25ADas.jpg": "912764e7799a44211c7017250459d0c7",
"assets/assets/videos/all_images/sajinos%2520en%2520colpa%252001.jpg": "d634b9fa8848b98e992ad0cc3ca696c4",
"assets/assets/videos/all_images/sajinos%2520en%2520colpa%252002.jpg": "3bb06f75938ab7a59793654b26bf431e",
"assets/assets/videos/all_images/sajinos%2520peleando%2520en%2520la%2520colpa.jpg": "8a12c85fcc516080aace6ec0f1263f64",
"assets/assets/videos/all_images/sajinos%2520sob%25C3%25A1ndose.jpg": "0df4c1aaf3926b47f3e7b73847320e22",
"assets/assets/videos/all_images/siete%2520sajinos.jpg": "4fc37655e53e01e5a13ba874283d8914",
"assets/assets/videos/all_images/tigrillo%2520andando%2520de%2520noche.jpg": "21f4c1e5bc4fdaefe628d3d79f8db74d",
"assets/assets/videos/all_images/tigrillo%2520andando.jpg": "355c8606dd5f7fbbfe91f311e6701fc0",
"assets/assets/videos/all_images/tigrillo%2520caminando.jpg": "fa1aeaabf28eb5adbc75e8ff39125cb4",
"assets/assets/videos/all_images/tigrillo%2520pasando.jpg": "514d70a3981d12cf9453144a08c9dd17",
"assets/assets/videos/all_images/torcazas%2520en%2520la%2520colpa.jpg": "b0aa2037e306926b6ccb7a38a2736a00",
"assets/assets/videos/all_images/trompetero%2520comiendo.jpg": "06f88aac27b7339f9c483fa0c5e73308",
"assets/assets/videos/all_images/trompetero%2520pasando.jpg": "e627aab3d212c20854a2fcbb49c303fd",
"assets/assets/videos/all_images/trompeteros%2520viniendo.jpg": "79df69409ebfc929d699fedbd8db6d5d",
"assets/assets/videos/all_images/tuc%25C3%25A1n%2520volando.jpg": "8cb20a03a7de39dc4a9a514215ccbd24",
"assets/assets/videos/all_images/unchala%2520buscando%2520comida.jpg": "7f4dc68ad435470f2e09708162bac321",
"assets/assets/videos/all_images/venado%2520cenizo%2520macho.jpg": "0a85baaf96e3bbbc44c2bf7da91dcaf0",
"assets/assets/videos/all_images/venado%2520colorado%2520en%2520colpa.jpg": "29abce25ac9359515291cfeb68549b1c",
"assets/assets/videos/all_images/venado%2520colorado%2520hembra.jpg": "19de1fa4beb2b5838ac98625dca8e59f",
"assets/assets/videos/all_images/venado%2520colorado%2520macho.jpg": "9050b13a752d96c2c65f0030b0928570",
"assets/assets/videos/all_images/venado%2520colorado%2520mirando%2520la%2520c%25C3%25A1mara.jpg": "ddf354b305499bba9c80dfc40e4b6a9d",
"assets/assets/videos/all_images/venado%2520colorado%2520mirando.jpg": "4d5b8263f65822038e710fc5ee6b060e",
"assets/assets/videos/all_images/yangunturillo%2520comiendo%2520ungurahui.jpg": "036bf74cdcbd634067d66a7bacd2d39e",
"assets/assets/videos/all_images/yangunturo%2520andando.jpg": "b929d495fbd89a48f8c5594bb643f8a8",
"assets/assets/videos/all_images/yangunturo%2520comiendo%2520ungurahui.jpg": "e97c482982832d0c95a2217af7acb999",
"assets/assets/videos/all_images/zorro%2520con%2520cr%25C3%25ADas%2520y%2520un%2520erizo.jpg": "a24569b8cdf8c32732e62d77a453c78d",
"assets/assets/videos/hard_compressed_videos_all/a%25C3%25B1uje%2520buscando%2520comida.mp4": "9bd93d5e41d90c8fd02e0857cd40ac2d",
"assets/assets/videos/hard_compressed_videos_all/a%25C3%25B1uje%2520comiendo.mp4": "6a0bc9b97b35a422f7902353f1356823",
"assets/assets/videos/hard_compressed_videos_all/a%25C3%25B1uje%2520pasando.mp4": "df2296ed19724f17523edc890611f116",
"assets/assets/videos/hard_compressed_videos_all/achunis%2520comiendo%2520ungurahui.mp4": "f2ab800679f1b5eeb46300755c48b807",
"assets/assets/videos/hard_compressed_videos_all/carachupa%2520negra%2520comiendo%2520ungurahui.mp4": "55f389d86d1f369ed327bcc690cd5c9f",
"assets/assets/videos/hard_compressed_videos_all/carachupa%2520negra%2520par%25C3%25A1ndose.mp4": "2f44aab606176bd5109604f432175318",
"assets/assets/videos/hard_compressed_videos_all/carachupa%2520osando.mp4": "928e001724453488ad9f523a7e56a91b",
"assets/assets/videos/hard_compressed_videos_all/cotos%2520en%2520la%2520colpa.mp4": "bf231c62f5194e1da61418b1be967b08",
"assets/assets/videos/hard_compressed_videos_all/dos%2520erizos.mp4": "ea9416cb9062c12be14aebf3c6137be7",
"assets/assets/videos/hard_compressed_videos_all/dos%2520majases%2520andando%2520juntos.mp4": "d4e672c2af6bc2f2a1fff186d5a9b09a",
"assets/assets/videos/hard_compressed_videos_all/dos%2520palomas%2520al%2520pie%2520de%2520ungurahui.mp4": "8844fe01085d64b93595beeec201acb9",
"assets/assets/videos/hard_compressed_videos_all/dos%2520perdices%2520picando%2520ungurahui.mp4": "814dc2108da9335d893a1662fdc8c2ba",
"assets/assets/videos/hard_compressed_videos_all/dos%2520sitarraco%2520mamas%2520volando.mp4": "d00121eaaa6438ef0437ca6caa0fc33a",
"assets/assets/videos/hard_compressed_videos_all/erizo%2520andando.mp4": "57d54e8ea16039d75574c8f2418db15b",
"assets/assets/videos/hard_compressed_videos_all/erizo%2520en%2520la%2520colpa.mp4": "0152b5642b283572aa5c0ec8d8cf3b3b",
"assets/assets/videos/hard_compressed_videos_all/huaihuasho%2520colorado.mp4": "5593400cb7055ba967a44af6d9437c9d",
"assets/assets/videos/hard_compressed_videos_all/maj%25C3%25A1s%2520con%2520rabo%2520con%2520su%2520cr%25C3%25ADa.mp4": "4869eab0a58db478f535eec8db6f615f",
"assets/assets/videos/hard_compressed_videos_all/maj%25C3%25A1s%2520saltando.mp4": "f715ecc3ab39b3592d6f111c0f749a71",
"assets/assets/videos/hard_compressed_videos_all/mono%2520negro%2520andando%2520en%2520tierra.mp4": "f47f02f918b12eaea206ae879e6e9bf2",
"assets/assets/videos/hard_compressed_videos_all/muchas%2520torcazas%2520en%2520la%2520colpa.mp4": "1a0f5c49b38627c1ca1272ebad819621",
"assets/assets/videos/hard_compressed_videos_all/oso%2520hormiguero%2520llevando%2520cr%25C3%25ADa.mp4": "31be5d9aa74a7022bb0de9fb5099c86b",
"assets/assets/videos/hard_compressed_videos_all/oso%2520hormiguero%2520pasando.mp4": "fd577dc0aa4470c4844c951d57bee65f",
"assets/assets/videos/hard_compressed_videos_all/oso%2520hormiguero%2520raspando%2520%25C3%25A1rbol.mp4": "383210d73b56c4dfb37bd4f27d375d7c",
"assets/assets/videos/hard_compressed_videos_all/pavas%2520en%2520la%2520colpa.mp4": "e694ea24bf8b10ad4e5c7985c231dad3",
"assets/assets/videos/hard_compressed_videos_all/perdiz%2520grande%2520andando.mp4": "b20cd5fc13df648a120b9d6892c39b32",
"assets/assets/videos/hard_compressed_videos_all/perdiz%2520negra%2520buscando%2520comida.mp4": "891b5a765e8be0d93b8101a51a2b56d5",
"assets/assets/videos/hard_compressed_videos_all/perdiz%2520peque%25C3%25B1a%2520andando.mp4": "ae3f74c0cb243b7db5d787653a565b3f",
"assets/assets/videos/hard_compressed_videos_all/perdiz%2520picando%2520ungurahui.mp4": "213e9866a5fa64d913ff5e257eed97c0",
"assets/assets/videos/hard_compressed_videos_all/pericote%2520andando.mp4": "ebee97d500a883da87a0098ea09290f4",
"assets/assets/videos/hard_compressed_videos_all/pucacungas%2520corriendo.mp4": "cc8367c8ec48cf78fb5cf307662c4f99",
"assets/assets/videos/hard_compressed_videos_all/puma%2520en%2520la%2520noche.mp4": "d51e377d4c6894dc1c182d5277563ec6",
"assets/assets/videos/hard_compressed_videos_all/ratas%2520andando.mp4": "d11d7c8956276f6705118e7bb3e1ace0",
"assets/assets/videos/hard_compressed_videos_all/sacha%2520perro%2520solo.mp4": "4dfb9dc0518e47e6b260381b5e28899f",
"assets/assets/videos/hard_compressed_videos_all/sachavaca%2520de%2520cerca.mp4": "bdbc112d58bde3fca49a0e1e77ef6ba7",
"assets/assets/videos/hard_compressed_videos_all/sachavaca%2520pasando.mp4": "dc6b73744eca9da70edb9fb9bb8339f0",
"assets/assets/videos/hard_compressed_videos_all/sajino%2520escarbando%2520hojarasca.mp4": "45fe5d6ffd421f75321b62564f7150e2",
"assets/assets/videos/hard_compressed_videos_all/sajino%2520rasc%25C3%25A1ndose.mp4": "a067c961a11a3276be2713b0d3729379",
"assets/assets/videos/hard_compressed_videos_all/sajinos%2520comiendo%2520barro.mp4": "206aadc07fa615f92f2fa98df23bc419",
"assets/assets/videos/hard_compressed_videos_all/sajinos%2520con%2520cr%25C3%25ADas.mp4": "2d5aad4b25261daba0a8d41c16f4e08c",
"assets/assets/videos/hard_compressed_videos_all/sajinos%2520en%2520colpa%252001.mp4": "12fac1e42e8c056917b35bdebc33c737",
"assets/assets/videos/hard_compressed_videos_all/sajinos%2520en%2520colpa%252002.mp4": "1fd3544b53ad914480ef0e730d37bd43",
"assets/assets/videos/hard_compressed_videos_all/sajinos%2520peleando%2520en%2520la%2520colpa.mp4": "30ec1b40cf9af2cc575051341431949a",
"assets/assets/videos/hard_compressed_videos_all/sajinos%2520sob%25C3%25A1ndose.mp4": "5a1d3ae5f5eec1175b9d446bbf040049",
"assets/assets/videos/hard_compressed_videos_all/siete%2520sajinos.mp4": "98fddcdb000f8d875168fa9cb7dd3dbe",
"assets/assets/videos/hard_compressed_videos_all/tigrillo%2520andando%2520de%2520noche.mp4": "382f3591cb9bae6adfe93557f8978a0f",
"assets/assets/videos/hard_compressed_videos_all/tigrillo%2520andando.mp4": "45b5de16227fe9b51cb1c33f90eaa518",
"assets/assets/videos/hard_compressed_videos_all/tigrillo%2520caminando.mp4": "3bad51fb361919505dcd0a14f7f15801",
"assets/assets/videos/hard_compressed_videos_all/tigrillo%2520pasando.mp4": "122bbd3ba5a22aa64b58e2fc822091d0",
"assets/assets/videos/hard_compressed_videos_all/torcazas%2520en%2520la%2520colpa.mp4": "920bc7465c2c581a5c24cdf1f24b6fd5",
"assets/assets/videos/hard_compressed_videos_all/trompetero%2520comiendo.mp4": "0a5086e602458dccc7e8fcb5fe7cf17a",
"assets/assets/videos/hard_compressed_videos_all/trompetero%2520pasando.mp4": "7c8e983935d07d0e8e048ce33569a093",
"assets/assets/videos/hard_compressed_videos_all/trompeteros%2520viniendo.mp4": "279ad09112c55e525af55f9e70cef470",
"assets/assets/videos/hard_compressed_videos_all/tuc%25C3%25A1n%2520volando.mp4": "dc997c9295a941713f4fca38af9028d8",
"assets/assets/videos/hard_compressed_videos_all/unchala%2520buscando%2520comida.mp4": "79cefd3986590c6e9595f8f4b4896a56",
"assets/assets/videos/hard_compressed_videos_all/venado%2520cenizo%2520macho.mp4": "aa4aa68ca5f28f217ae05390780d2655",
"assets/assets/videos/hard_compressed_videos_all/venado%2520colorado%2520en%2520colpa.mp4": "2dfa9644a0425d9e240c2e5536e243b2",
"assets/assets/videos/hard_compressed_videos_all/venado%2520colorado%2520hembra.mp4": "a2e7c22ea2612d6c16a2bf38462ca4d9",
"assets/assets/videos/hard_compressed_videos_all/venado%2520colorado%2520macho.mp4": "be3b91fb1e6bce321e4d30b42b553cd3",
"assets/assets/videos/hard_compressed_videos_all/venado%2520colorado%2520mirando%2520la%2520c%25C3%25A1mara.mp4": "a3187647ebb4ed019b1408c48880aeef",
"assets/assets/videos/hard_compressed_videos_all/venado%2520colorado%2520mirando.mp4": "5e09fc36daac0fcb57683a7d5ac7e6ca",
"assets/assets/videos/hard_compressed_videos_all/yangunturillo%2520comiendo%2520ungurahui.mp4": "07d7d51a2afd98108d205acfdd0f7964",
"assets/assets/videos/hard_compressed_videos_all/yangunturo%2520andando.mp4": "05e309ca7ab49dc73fcb3df8b35fc139",
"assets/assets/videos/hard_compressed_videos_all/yangunturo%2520comiendo%2520ungurahui.mp4": "83686fe0e97f9cfd3e466fbc1609c65f",
"assets/assets/videos/hard_compressed_videos_all/zorro%2520con%2520cr%25C3%25ADas%2520y%2520un%2520erizo.mp4": "def7b4394df4daea9f02e7a6c5f77b9b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "02bfe659ea73c6be4a6f1518a83cc51b",
"assets/NOTICES": "707edd6593bd49d884b5b0ba731b2cfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/f6611948": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f207d5f5b90f7925ec9a1e9a81d53bf5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf6aa35a10ae6255af49aafba30ecf01",
"/": "bf6aa35a10ae6255af49aafba30ecf01",
"main.dart.js": "d0ec471a4e82a81a2eab51d1babbbbe0",
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
