self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  const title = data.title || 'Habit Reminder';
  const options = {
    body: data.body,
    icon: '/icon-192.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
