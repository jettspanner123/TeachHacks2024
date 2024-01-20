import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyALGqAHZb2QqIhw5WoLMWiD4wSg5G6yJdA",
    authDomain: "techhack-40.firebaseapp.com",
    projectId: "techhack-40",
    storageBucket: "techhack-40.appspot.com",
    messagingSenderId: "136188192701",
    appId: "1:136188192701:web:4d20561e9adf1e2dda14d4"
};

export const FirebaseApplication = initializeApp(firebaseConfig);
export const FirebaseAuthentication = getAuth(FirebaseApplication);
export const FirebaseDatabase = getDatabase(FirebaseApplication);
