// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAux0ZPLV_5PApAvuUkjnbPPz1k5oc4ss4",
  authDomain: "millers-home-improvement-5d1ca.firebaseapp.com",
  projectId: "millers-home-improvement-5d1ca",
  storageBucket: "millers-home-improvement-5d1ca.appspot.com",
  messagingSenderId: "598698205886",
  appId: "1:598698205886:web:c0ca1d35c3190cda5174ef",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
