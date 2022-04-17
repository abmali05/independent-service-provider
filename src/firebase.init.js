// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCedY-2j16t0d3YfpOr15PODxJiAgwLNQY",
    authDomain: "lawyer-portfolio-1d1a7.firebaseapp.com",
    projectId: "lawyer-portfolio-1d1a7",
    storageBucket: "lawyer-portfolio-1d1a7.appspot.com",
    messagingSenderId: "624746118882",
    appId: "1:624746118882:web:e1760239e1d54f3a2e68bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;