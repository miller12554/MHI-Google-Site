// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaJg-Bpv8w3zdPYjbpBk9F0I4MpLVBXjo",
  authDomain: "realtor-clone-react-7c6f9.firebaseapp.com",
  projectId: "realtor-clone-react-7c6f9",
  storageBucket: "realtor-clone-react-7c6f9.appspot.com",
  messagingSenderId: "225391435347",
  appId: "1:225391435347:web:e7f1fe50297f32032970a6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
