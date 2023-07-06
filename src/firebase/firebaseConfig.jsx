import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo7dZ9NTt_edj4AmB-Zbmko38X2J8HQ1s",
  authDomain: "macetaslulopaz.firebaseapp.com",
  projectId: "macetaslulopaz",
  storageBucket: "macetaslulopaz.appspot.com",
  messagingSenderId: "252033716410",
  appId: "1:252033716410:web:c4e321c200c97c10683283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);