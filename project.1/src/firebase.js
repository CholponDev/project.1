// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy3hwg3wDeDCEYO5MZ1_AIjXUV5wZ1u9E",
  authDomain: "project1-374c1.firebaseapp.com",
  projectId: "project1-374c1",
  storageBucket: "project1-374c1.firebasestorage.app",
  messagingSenderId: "823850323857",
  appId: "1:823850323857:web:bc08020031755feee95430",
  measurementId: "G-Z3H1S7QZZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);