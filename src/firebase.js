// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhoQ7AHHqBvNB5IRo6F6ykfdT1dStcd04",
  authDomain: "form-adb4b.firebaseapp.com",
  projectId: "form-adb4b",
  storageBucket: "form-adb4b.appspot.com",
  messagingSenderId: "810648948554",
  appId: "1:810648948554:web:0361afd7ae4b25a7e7fbb3",
  measurementId: "G-232ECJ7ENN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
export const auth = getAuth();

export default app; 
