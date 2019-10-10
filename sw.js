//1
const staticCacheName = 'site-static';
//1
const recursos = [
	'/',
	'/index.html',
	'/js/app.js',
	'/js/ui.js',
	'/js/materialize.min.js',
	'/css/materialize.min.css',
	'/img/2810845dae5561a91562998ba4cf8939.jpg',
	'/img/Red-Velvet-Cake-8.jpg',
	'/img/Cheesecake.jpg',
];
//1
self.addEventListener('install', evt => {
	// console.log('Service worker foi instalado.');
	evt.waitUntil(
		caches.open(staticCacheName).then(cache => {
			console.log("Guardando dados em cache");
			cache.addAll(recursos);
		})
	);

});

self.addEventListener('activate', evt => {
	console.log('Service worker foi ativado.');
});

//2
self.addEventListener('fetch', evt => {
	// console.log('Service worker capturou um evento do tipo fetch.');
	evt.respondWith(
		caches.match(evt.request).then(cacheRes =>{
			return cacheRes || fetch(evt.request);
		})
	)

});

