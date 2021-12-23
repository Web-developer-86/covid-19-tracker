const CACHE_NAME = "version-1";
const urlToCache = ["index.html", "offline.html"];

const self = this;
//Install SW
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened All Cache");
      return cache.addAll(urlToCache);
    })
  );
});

//Lisitning SW
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match("offline.html"));
    })
  ); 
});

//Activate SW
self.addEventListener("activate", (e) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    e.waitUntil(
        caches.keys().then((cacheNames)=> Promise.all(
            cacheNames.map((cacheName)=>{
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheNames);
                }
            })
        ))
    )
});