import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBy3hwg3wDeDCEYO5MZ1_AIjXUV5wZ1u9E",
  authDomain: "project1-374c1.firebaseapp.com",
  projectId: "project1-374c1",
  storageBucket: "project1-374c1.firebasestorage.app",
  messagingSenderId: "823850323857",
  appId: "1:823850323857:web:bc08020031755feee95430",
  measurementId: "G-Z3H1S7QZZX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export { serverTimestamp};