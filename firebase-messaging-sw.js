importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAYbNXkNQy32UnbsUUrTXyoJluZRS3wP1w",
  authDomain: "droos-33ede.firebaseapp.com",
  projectId: "droos-33ede",
  storageBucket: "droos-33ede.firebasestorage.app",
  messagingSenderId: "807210060374",
  appId: "1:807210060374:web:3bdf1e15e44a1795f289f7"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('إشعار خلفي:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
  });
});
