// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b26ec.firebaseapp.com",
  projectId: "mern-blog-b26ec",
  storageBucket: "mern-blog-b26ec.appspot.com",
  messagingSenderId: "765474755221",
  appId: "1:765474755221:web:02f387324966979e07c19c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);