// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import exp from "constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-1doohWI0yLFLrDXtYYKLXXqrnWioYlA",
  authDomain: "o-t-p-d8d36.firebaseapp.com",
  projectId: "o-t-p-d8d36",
  storageBucket: "o-t-p-d8d36.appspot.com",
  messagingSenderId: "597781320608",
  appId: "1:597781320608:web:19bc9bbc16c8319c1bcac5",
  measurementId: "G-9W42WMW7H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth }