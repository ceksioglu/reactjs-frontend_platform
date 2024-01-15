// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDxzXl5yJUYMxmk2X0HSS3yigMazIuJfv8",

    authDomain: "marmara-portal-dev.firebaseapp.com",

    projectId: "marmara-portal-dev",

    storageBucket: "marmara-portal-dev.appspot.com",

    messagingSenderId: "719555773086",

    appId: "1:719555773086:web:54b8219414b289da43f18f"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
   return createUserWithEmailAndPassword(auth, email, password)
}