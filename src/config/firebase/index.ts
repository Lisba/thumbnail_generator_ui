import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig: object = {
  apikey: import.meta.env.VITE_FIREBASE_APP_APIKEY,
  authdomain: import.meta.env.VITE_FIREBASE_APP_AUTHDOMAIN,
  projectid: import.meta.env.VITE_FIREBASE_APP_PROJECTID,
  storagebucket: import.meta.env.VITE_FIREBASE_APP_STORAGEBUCKET,
  messagingsenderid: import.meta.env.VITE_FIREBASE_APP_MESSAGINGSENDERID,
  appid: import.meta.env.VITE_FIREBASE_APP_APPID,
  measurementid: import.meta.env.VITE_FIREBASE_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export default getAnalytics(app);
