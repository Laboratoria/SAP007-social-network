// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYuZfFIZPCxXmDcw9j3_dlkuyM-57OKWA",
    authDomain: "girl-talk-app.firebaseapp.com",
    databaseURL: "https://girl-talk-app-default-rtdb.firebaseio.com",
    projectId: "girl-talk-app",
    storageBucket: "girl-talk-app.appspot.com",
    messagingSenderId: "994363584873",
    appId: "1:994363584873:web:6cf262fb179661b8b00df8",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);