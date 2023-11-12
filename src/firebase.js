// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl4UzFD1TvVf28TpeS65-Ajk-2PNJotVc",
  authDomain: "auth-5f103.firebaseapp.com",
  projectId: "auth-5f103",
  storageBucket: "auth-5f103.appspot.com",
  messagingSenderId: "734433666509",
  appId: "1:734433666509:web:1cde1004fffdeabdfad084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
export const auth = getAuth();

export default app;
