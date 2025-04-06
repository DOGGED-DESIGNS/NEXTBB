// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_d8Lp5UX3yLH7ZTlTLjuTlN4vPVP6er8",
  authDomain: "dogged-insight.firebaseapp.com",
  projectId: "dogged-insight",
  storageBucket: "dogged-insight.firebasestorage.app",
  messagingSenderId: "766261712942",
  appId: "1:766261712942:web:d44e91be7a36f1232327bf",
  measurementId: "G-5320P10S0X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const analytics = getAnalytics(app);
