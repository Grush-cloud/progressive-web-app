var cacheName = 'petstore-v1';
var cacheFiles = [

    'index.html',
    'lessons.js',
    'petstore.webmanifest',
    'images/art.jpg',
    'images/biology.jpg',
    'images/chem.jpg',
    'images/english.jpg',
    'images/french.jpg',
    'images/geography.jpg',
    'images/history.jpg',
    'images/iconstore.png',
    'images/maths.jpg',
    'images/music.jpg',
    'images/physics.jpg'
];

self.addEventListener('install', (e) =>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});