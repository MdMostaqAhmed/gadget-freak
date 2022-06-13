import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlokko4iSrirg-e29uZr4yy-AlIBR0UaM",
    authDomain: "gadget-freak-561ee.firebaseapp.com",
    projectId: "gadget-freak-561ee",
    storageBucket: "gadget-freak-561ee.appspot.com",
    messagingSenderId: "636526207626",
    appId: "1:636526207626:web:95f386f8e7b70a1a100373"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
