importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDJjwPhZWXD4gYrA__8MaC2FWm9iqbqrJo",
  authDomain: "skunotice.firebaseapp.com",
  projectId: "skunotice",
  storageBucket: "skunotice.firebasestorage.app",
  messagingSenderId: "348482936189",
  appId: "1:348482936189:web:b4aa38415b3f2771bd8014",
  measurementId: "G-G8K451G5ZB",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 백그라운드 푸시 알림 처리
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/icons/icon-192x192.png",
  };
  console.log(payload);

  self.registration.showNotification(notificationTitle, notificationOptions);
});
