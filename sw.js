const staticCacheName = 'site-static';

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

self.addEventListener('fetch', evt => {
	console.log('Service worker capturou um evento do tipo fetch.');
});

