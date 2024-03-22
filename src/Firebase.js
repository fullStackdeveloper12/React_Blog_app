// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "blog-app-c1206.firebaseapp.com",
  projectId: "blog-app-c1206",
  storageBucket: "blog-app-c1206.appspot.com",
  messagingSenderId: "441193405516",
  appId: "1:441193405516:web:250a387383a29cc22ae8e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
