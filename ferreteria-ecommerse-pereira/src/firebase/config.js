// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFDR3KiYZjtG0S4CB0HJCBD18ovHznZIQ",
  authDomain: "ferreteria-pereira.firebaseapp.com",
  projectId: "ferreteria-pereira",
  storageBucket: "ferreteria-pereira.appspot.com",
  messagingSenderId: "40216284307",
  appId: "1:40216284307:web:8e1d6a4dd6478ed301d166",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
