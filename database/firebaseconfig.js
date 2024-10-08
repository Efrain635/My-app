import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbNNZHa3b2f7QztMR-QRtQIk4f9SsZEX0",
  authDomain: "estadistica-58e58.firebaseapp.com",
  projectId: "estadistica-58e58",
  storageBucket: "estadistica-58e58.appspot.com",
  messagingSenderId: "202220896335",
  appId: "1:202220896335:web:dda61d87fdd0dd8674ea3a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;