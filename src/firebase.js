import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQJsUjFnHB2yP7zN-OQ5SCIYzrdT8u4io",
  authDomain: "react-client-2023.firebaseapp.com",
  projectId: "react-client-2023",
  storageBucket: "react-client-2023.appspot.com",
  messagingSenderId: "677721699801",
  appId: "1:677721699801:web:964ec18a76f3d3064055c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const auth = getAuth();

export { app, auth, db };
