// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
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

const firebaseConfigInstinto = {
  apiKey: "AIzaSyAX_5MpUg66W80Fm69VGmA91ZrI2fpq7z8",
  authDomain: "instinto-bdsm.firebaseapp.com",
  projectId: "instinto-bdsm",
  storageBucket: "instinto-bdsm.appspot.com",
  messagingSenderId: "446023850411",
  appId: "1:446023850411:web:53897e01e6f9618199daee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Instinto
const appInstinto = initializeApp(firebaseConfigInstinto);
const storageInstinto = getStorage(appInstinto);
