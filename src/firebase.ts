// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1HLRaqvhFqAzi18oiA6h0jAOVK5RkzI8",
  authDomain: "store-comagic.firebaseapp.com",
  projectId: "store-comagic",
  storageBucket: "store-comagic.appspot.com",
  messagingSenderId: "116795093120",
  appId: "1:116795093120:web:b977554cc9c21cd0967665",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
