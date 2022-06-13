import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_AwSSNUF61C5rAAWBcYbm9UK6373Uv7g",
    authDomain: "simple-firebase-authenti-af7d6.firebaseapp.com",
    projectId: "simple-firebase-authenti-af7d6",
    storageBucket: "simple-firebase-authenti-af7d6.appspot.com",
    messagingSenderId: "540531998979",
    appId: "1:540531998979:web:25cf20b9bba7ac6281a936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
