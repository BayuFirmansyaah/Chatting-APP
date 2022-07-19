const CACHE_NAME = 'chatty';
const urlsToCache = [
	'/',
	'/icons/icon-72x72.png',
	'/icons/icon-96x96.png',
	'/icons/icon-128x128.png',
	'/launch-screens/launch-screen-1242x2208.png',
	'/launch-screens/launch-screen-2208x1242.png',
	'/launch-screens/launch-screen-750x1334.png',
	'/launch-screens/launch-screen-1334x750.png',
	'/launch-screens/launch-screen-640x1136.png',
	'/launch-screens/launch-screen-1136x640.png',
	'/favicons/apple-touch-icon-57x57.png',
	'/favicons/apple-touch-icon-60x60.png',
	'/favicons/apple-touch-icon-72x72.png',
	'/favicons/apple-touch-icon-76x76.png',
	'/favicons/favicon-16x16.png',
	'/favicons/favicon-32x32.png',
	'/favicons/ms-tile-70x70.png',
	'/favicons/ms-tile-144x144.png',
	'/favicons/ms-tile-150x150.png',
	'/favicons/favicon.ico',
	'/css/call.css',
	'/css/root.css',
	'/css/chatting.css',
	'/css/index.css'
];

self.addEventListener('install', event => {
	self.skipWaiting();

	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) {
				return response;
			}

			const fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(response => {
				if (
					!response ||
					response.status !== 200 ||
					response.type !== 'basic'
				) {
					return response;
				}

				const responseToCache = response.clone();

				event.waitUntil(
					caches.open(CACHE_NAME).then(cache => {
						cache.put(event.request, responseToCache);
					})
				);

				return response;
			});
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches
			.keys()
			.then(cacheNames =>
				Promise.all(
					cacheNames
						.filter(cacheName => cacheName !== CACHE_NAME)
						.map(cacheName => caches.delete(cacheName))
				)
			)
	);
});
