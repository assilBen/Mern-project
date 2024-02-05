// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-8f7f7.firebaseapp.com",
  projectId: "mern-auth-8f7f7",
  storageBucket: "mern-auth-8f7f7.appspot.com",
  messagingSenderId: "1008054185285",
  appId: "1:1008054185285:web:ba62c4344eff2763ae222c",
  measurementId: "G-3BWRSG8CBD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);