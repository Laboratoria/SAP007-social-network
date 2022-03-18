// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAWnIJrGD7XNBEIDmno0Gda2LpElXmIU68",
  authDomain: "grrrl-talk.firebaseapp.com",
  projectId: "grrrl-talk",
  storageBucket: "grrrl-talk.appspot.com",
  messagingSenderId: "219826851050",
  appId: "1:219826851050:web:6bdf78b8a8b72d0117db93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

const dataBase = getDataBase();