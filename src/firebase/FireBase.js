// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsIvGla05xe9oX8aXtUqwM1Jvn67Ka2JI",
  authDomain: "react-quiz-firestore-fin.firebaseapp.com",
  projectId: "react-quiz-firestore-fin",
  storageBucket: "react-quiz-firestore-fin.appspot.com",
  messagingSenderId: "835434506546",
  appId: "1:835434506546:web:2ce810a1605beff2358f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore()