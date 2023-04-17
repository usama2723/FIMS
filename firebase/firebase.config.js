// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import ForgotPassword from "../pages/ForgotPassword";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhdFn_2xlhO1IplnB7HqX2RTTamEm7bgs",
  authDomain: "fir-yt-c4c93.firebaseapp.com",
  projectId: "fir-yt-c4c93",
  storageBucket: "fir-yt-c4c93.appspot.com",
  messagingSenderId: "389254618021",
  appId: "1:389254618021:web:8ad48e4f36f189f050e64c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);