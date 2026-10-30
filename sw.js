/* HFM — service worker mínimo (necessário para a instalação como app).
   Não guarda nada em cache: o app em si roda no Google Apps Script e sempre carrega a versão mais nova. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* rede direta */ });
