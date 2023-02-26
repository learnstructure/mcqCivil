// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "civilengineering-mcq.firebaseapp.com",
    projectId: "civilengineering-mcq",
    storageBucket: "civilengineering-mcq.appspot.com",
    messagingSenderId: "840081321566",
    appId: "1:840081321566:web:ce09ab681d776017e20ecf",
    measurementId: "G-76898C6T74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);