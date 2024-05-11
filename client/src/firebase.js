// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1edab.firebaseapp.com",
  projectId: "mern-estate-1edab",
  storageBucket: "mern-estate-1edab.appspot.com",
  messagingSenderId: "550498276472",
  appId: "1:550498276472:web:e36544879d29ecd0fac98d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);