// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUe9QukUuFYiNpDSmleyWVX1poTheeNec",
  authDomain: "tesseract-flex-fuel-555.firebaseapp.com",
  projectId: "tesseract-flex-fuel-555",
  storageBucket: "tesseract-flex-fuel-555.firebasestorage.app",
  messagingSenderId: "42693573543",
  appId: "1:42693573543:web:4085afb42193ea1eeb9482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };