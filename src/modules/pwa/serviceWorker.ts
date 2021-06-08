/// <reference lib="webworker" />

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore Injection point for Workbox-Webpack-Plugin.InjectManifest
self.__WB_MANIFEST

// Version Control
const version = 'v0.0.1'
const cacheName = '::WebpackPWATemplate'

// Files to be immediately cached. './build' is root
const cacheFiles = ['/', '/manifest.json', './index.bundle.js']

// On install, cache all listed files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(version + cacheName).then((cache) => {
      cache
        .addAll(cacheFiles)
        .then(() => {
          console.log(`[Service Worker] Assets added to cache`)
        })
        .catch((err) => {
          console.log(`[Service Worker] Error adding assets || ${err}`)
        })
    })
  )
})

// Delete old caches on activate
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      keys
        .filter((key) => {
          return key.indexOf(version) !== 0
        })
        .map((key) => {
          console.log('[Service Worker] Removing old cache...')
          return caches.delete(key)
        })
    })
  )
  console.log('[Service Worker] Activated')
})

// Intercept and resolve fetch requests
self.addEventListener('fetch', (e) => {
  //console.log(`[Service Worker] Fetching ${e.request.url}`)
  const response = fetch(e.request).then((res) => {
    return res
  })

  e.respondWith(response)
})

export type {}
