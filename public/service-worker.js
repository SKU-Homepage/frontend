function registerServiceWorker() {
  if (typeof window !== "undefined") {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/firebase-messaging-sw.js");
  }
}
registerServiceWorker();
