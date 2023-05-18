// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    authDomain: "learning-firebase-3ada6.firebaseapp.com",
    projectId: "learning-firebase-3ada6",
    storageBucket: "learning-firebase-3ada6.appspot.com",
    messagingSenderId: "355945346757",
    appId: "1:355945346757:web:adbeb590e04371fdcde2ac",
    measurementId: "G-8XQ5HWK47E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
