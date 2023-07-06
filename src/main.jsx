import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
