// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv1zTMFh5C1ke_T6omep8aV1i6czZrUbM",
  authDomain: "netflix-gpt-3c1e0.firebaseapp.com",
  projectId: "netflix-gpt-3c1e0",
  storageBucket: "netflix-gpt-3c1e0.appspot.com",
  messagingSenderId: "1089348907632",
  appId: "1:1089348907632:web:5534b58ed1bfcc5faabab5",
  measurementId: "G-FWXQBW1T51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();