// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRlnzQyquPM53pMZzb17lcApnYaHDNM-Y",
  authDomain: "tutor-sheba.firebaseapp.com",
  projectId: "tutor-sheba",
  storageBucket: "tutor-sheba.appspot.com",
  messagingSenderId: "446973403586",
  appId: "1:446973403586:web:9df270f70769b839c8b65b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;