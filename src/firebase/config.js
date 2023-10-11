import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAPGCnN6Vy4r5FK25v9pJ7hdqzXY7PDhMI",
    authDomain: "olx-clone-4e88b.firebaseapp.com",
    projectId: "olx-clone-4e88b",
    storageBucket: "olx-clone-4e88b.appspot.com",
    messagingSenderId: "256624229754",
    appId: "1:256624229754:web:f274b923d5739a483aaac3",
    measurementId: "G-9D31H6YE72"
  };

export const Firebase = firebase.initializeApp(firebaseConfig)
