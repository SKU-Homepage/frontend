import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDJjwPhZWXD4gYrA__8MaC2FWm9iqbqrJo",
  authDomain: "skunotice.firebaseapp.com",
  projectId: "skunotice",
  storageBucket: "skunotice.firebasestorage.app",
  messagingSenderId: "348482936189",
  appId: "1:348482936189:web:b4aa38415b3f2771bd8014",
  measurementId: "G-G8K451G5ZB",
};
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// export const requestNotificationPermission = async () => {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === 'granted') {
//       const token = await getToken(messaging, {
//         vapidKey:
//           'BB6Xxmxhebp9JasaO5jvzIjLssA9LjcHWAUPAZKm388rpVzIxquoM1Ar988UiuhDp3rS-vZEmgoyj6lib01dVTc',
//       });
//       console.log('FCM Token:', token);
//       return token;
//     } else {
//       console.error('Notification permission not granted');
//     }
//   } catch (error) {
//     console.error('Error getting notification token:', error);
//   }
// };

export const requestNotificationPermission = async (): Promise<void | string> => {
  // 현재 알림 권한 상태 확인

  const permission = await Notification.requestPermission();
  const token = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
  });
  localStorage.setItem("fcmToken", token);
  return permission;

  // const currentPermission = Notification.permission;

  // if (currentPermission === 'granted') {
  //   const token = await getToken(messaging, {
  //     vapidKey: import.meta.env.VITE_FCM_KEY,
  //   });
  //   console.log('알림 권한이 이미 승인되었습니다.');
  //   localStorage.setItem('fcmToken', token);
  // }

  // if (currentPermission === 'denied') {
  //   console.log(
  //     '알림 권한이 거부되었습니다. 사용자가 직접 설정을 변경해야 합니다.'
  //   );
  // }

  // // "default" 상태일 때만 요청
  // if (currentPermission === 'default') {
  //   try {
  //     const permission = await Notification.requestPermission();
  //     if (permission === 'granted') {
  //       const token = await getToken(messaging, {
  //         vapidKey: import.meta.env.VITE_FCM_KEY,
  //       });
  //       alert(token);
  //       console.log('알림 권한이 승인되었습니다.');
  //       localStorage.setItem('fcmToken', token);
  //     } else {
  //       console.log('사용자가 알림 권한 요청을 거부했습니다.');
  //     }
  //   } catch (error) {
  //     console.error('알림 권한 요청 중 오류 발생:', error);
  //   }
  // }
};
