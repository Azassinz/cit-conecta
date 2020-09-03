/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "586c25051345b3f9a2ea8f82a92b98bf"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "96f75b5a0088b62b34a7d929419594cb"
  },
  {
    "url": "assets/css/0.styles.008f58af.css",
    "revision": "5b263318633087050982102375bffcd7"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.54e43f45.js",
    "revision": "78111b4dd92d83a1823fd6c43eea9453"
  },
  {
    "url": "assets/js/10.ffa035b5.js",
    "revision": "11a97b64b63cc75396aff29b59b594dd"
  },
  {
    "url": "assets/js/11.c134ef57.js",
    "revision": "0c2f57296a313e30584f7bcf2919bd1d"
  },
  {
    "url": "assets/js/12.751f79cf.js",
    "revision": "eafbf3b6db761bf6a135c31461200e37"
  },
  {
    "url": "assets/js/13.02349113.js",
    "revision": "4a1c65e649d1ec08e72d25665e673d17"
  },
  {
    "url": "assets/js/14.ac730457.js",
    "revision": "44479bc0a0b47b3b51acd2f7537e1b0c"
  },
  {
    "url": "assets/js/15.ceeeef1a.js",
    "revision": "f413abb7da2f87716472719dc0dc274d"
  },
  {
    "url": "assets/js/16.0deaa24d.js",
    "revision": "deb34eae83613f5feba8fbec9b4c0b96"
  },
  {
    "url": "assets/js/17.2c6a4ae4.js",
    "revision": "17b88c90cf7acbeaedadcfad498cff38"
  },
  {
    "url": "assets/js/18.5656cfe4.js",
    "revision": "798432df550646b987e4fbbe7d2c0da7"
  },
  {
    "url": "assets/js/19.5e564540.js",
    "revision": "efdb4d18e3f52e54c5a6946a011c523a"
  },
  {
    "url": "assets/js/2.af73b212.js",
    "revision": "a1d6e073a06aee639e0d485e6caf9197"
  },
  {
    "url": "assets/js/20.1e82d504.js",
    "revision": "7bdd9e3979d125947cbb0e69eb67d6f9"
  },
  {
    "url": "assets/js/21.c5a57af2.js",
    "revision": "a6b69703b8f51d95430bd29091090618"
  },
  {
    "url": "assets/js/22.b62dd353.js",
    "revision": "7f189ca0bc18e37275b313a003d10c69"
  },
  {
    "url": "assets/js/23.14eacb2d.js",
    "revision": "d9d80d77b130e4e4aff3f86d79234f76"
  },
  {
    "url": "assets/js/24.6629b352.js",
    "revision": "f8fd94d18879f5a592d87b96ff851c14"
  },
  {
    "url": "assets/js/25.df043fd9.js",
    "revision": "3dbfd2b436c9adf0409c9c358ca33aff"
  },
  {
    "url": "assets/js/26.a95e4bd6.js",
    "revision": "3d4e65987e96df31a9e3e599b2c22f9d"
  },
  {
    "url": "assets/js/27.6f190d13.js",
    "revision": "6021383ee6c616ed7a5299c7f857fd74"
  },
  {
    "url": "assets/js/28.e91be857.js",
    "revision": "709904119cdd6a21f7f73bab1cae9aa4"
  },
  {
    "url": "assets/js/29.90fca1d8.js",
    "revision": "292a607546f16161a9e682b044338d6f"
  },
  {
    "url": "assets/js/3.11bccd1f.js",
    "revision": "3d612c3c14512e1436e4b33b2abfe7ce"
  },
  {
    "url": "assets/js/30.84b2f83b.js",
    "revision": "2903b5f4f0836f32451c9216caf438e2"
  },
  {
    "url": "assets/js/31.cad78ac7.js",
    "revision": "b5ca299e7d3f20a6c0281fbc3ee8e2fd"
  },
  {
    "url": "assets/js/32.11640a4b.js",
    "revision": "f95c7fe4cab21b47dce16d10b7aeac1f"
  },
  {
    "url": "assets/js/33.760660b5.js",
    "revision": "2c7eef72c9d86e23de42ffb3982c1a7a"
  },
  {
    "url": "assets/js/34.bd345efa.js",
    "revision": "3ae9490d663dbd4cba1ce5bb221d11a5"
  },
  {
    "url": "assets/js/35.67bcb035.js",
    "revision": "cb1e8c97f7d8e90d9cbab1922097357b"
  },
  {
    "url": "assets/js/36.48be1e7f.js",
    "revision": "c2eb269b7111443961846932680ead95"
  },
  {
    "url": "assets/js/37.92ccf7a9.js",
    "revision": "ef4fe9f22a19d9b3ab8832f5bdaf851f"
  },
  {
    "url": "assets/js/38.15f4c232.js",
    "revision": "038decec0b7c20de612894560fc777dc"
  },
  {
    "url": "assets/js/39.ae0098fb.js",
    "revision": "92736ffa9d53a514de009ca4fdbaefc7"
  },
  {
    "url": "assets/js/4.8dfe2ccf.js",
    "revision": "dd754eefe0f6be16baadd6a817e09f2b"
  },
  {
    "url": "assets/js/40.8a0bd338.js",
    "revision": "0860feae38c88f2e31f582ba4f8e0ae2"
  },
  {
    "url": "assets/js/41.3a35b007.js",
    "revision": "bc1f7e7fa0f59350c67182775b52bfad"
  },
  {
    "url": "assets/js/42.fdee3d17.js",
    "revision": "b5699f2d2a8f9fc1d76282e1199428bb"
  },
  {
    "url": "assets/js/43.db872a97.js",
    "revision": "598ce5a4937dae5234d92d4268ea313e"
  },
  {
    "url": "assets/js/44.54106624.js",
    "revision": "7591696efad475237c7deed83b31ad9d"
  },
  {
    "url": "assets/js/45.bf9897c8.js",
    "revision": "37f3b9a8c255713764bf9d264c605f63"
  },
  {
    "url": "assets/js/46.0ef23258.js",
    "revision": "0f22d88a62e8d8d010f68e28d9463d59"
  },
  {
    "url": "assets/js/5.2d4603db.js",
    "revision": "cadafc5ac2284054ccca6d282b699b2f"
  },
  {
    "url": "assets/js/6.25b62129.js",
    "revision": "53496162bdfe7fe32931d224cbed4ee5"
  },
  {
    "url": "assets/js/7.7b77b9eb.js",
    "revision": "a7934b387fb586a21b086e161ef79f17"
  },
  {
    "url": "assets/js/9.d982c890.js",
    "revision": "9e0b1a25e4452defff0a6f9adaa93e69"
  },
  {
    "url": "assets/js/app.306a7331.js",
    "revision": "3617cc559f3a784d158a8c11769957e8"
  },
  {
    "url": "authors/David-López.html",
    "revision": "398002f6a5c258511a3a119a3a591266"
  },
  {
    "url": "authors/index.html",
    "revision": "d42b3222f1614c7feec45bb179045bcb"
  },
  {
    "url": "autores/david-lopez.png",
    "revision": "28ecc73636c83d5cf6174cef524b837f"
  },
  {
    "url": "brain.png",
    "revision": "825a930e5af553f568e26a1f0f387386"
  },
  {
    "url": "categories/index.html",
    "revision": "e0af0bf9355198c8ad6d87494f9e3424"
  },
  {
    "url": "categories/nvidia.html",
    "revision": "7c85f3d5ef4f42b5d3fc4120d1aa8397"
  },
  {
    "url": "contact/index.html",
    "revision": "b53a203dff2b5cc13f48b861e05204c1"
  },
  {
    "url": "es/autores/David-López.html",
    "revision": "488d684dacb1b30f3c3ea8c88949d4b0"
  },
  {
    "url": "es/autores/index.html",
    "revision": "e9715d537d6ac7154578aef2e63e568c"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "08f79dc4e6abe832696775b8d19368ca"
  },
  {
    "url": "es/categorias/nvidia.html",
    "revision": "7644d66d0eca4360626114edbaeb5500"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "d1ee195ea5fc1ed3675d3f82d6688762"
  },
  {
    "url": "es/index.html",
    "revision": "bf15d9764163ac2ddd8fc5980230af53"
  },
  {
    "url": "es/posts/index.html",
    "revision": "c760ba2469431622f446f97e63ef57e1"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "632e465f4b91c8acd31d6ab7a7aebe6f"
  },
  {
    "url": "es/posts/nvidia-rtx.html",
    "revision": "e7e6bbb641263406dc78dc25b35ac203"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "d5501d3c953934317438a798fb4163c4"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7e08591dd9884069040d2efe3b33534f"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "7af325fbbcc02bbbf173fcc6f8c2c054"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "images/posts/2020/8/nvidia-rtx,w_320.jpg",
    "revision": "1dd4e884e1998a8c527957bdb60ae4bd"
  },
  {
    "url": "images/posts/2020/8/nvidia-rtx,w_427.jpg",
    "revision": "7f225fb51ade6f83a0313913543b7214"
  },
  {
    "url": "images/posts/2020/8/nvidia-rtx,w_524.jpg",
    "revision": "3f08361d8815d4cecf76f5c2cdb0844b"
  },
  {
    "url": "images/posts/2020/8/nvidia-rtx,w_680.jpg",
    "revision": "03841f0d9b042df5a384057b79c03a64"
  },
  {
    "url": "images/posts/2020/8/nvidia-rtx.jpg",
    "revision": "90e36746507df637ab17ecf7f4c3031b"
  },
  {
    "url": "index.html",
    "revision": "e8cff010923d89a3be50205bf7b13b42"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "logo-cit.png",
    "revision": "989bb9678067c39879d26e9d5c84eed8"
  },
  {
    "url": "posts/index.html",
    "revision": "98e8890549f48dc55d2a6c552f827852"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "984de4b16a68d5f0bdab90ee196fb948"
  },
  {
    "url": "posts/nvidia-rtx.html",
    "revision": "7cc42ff64a16360367e74e653c2d51b4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
