import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNu5tg68pS65UVJ6vaUjYgYonYzfYvR7w",
  authDomain: "laboratoriafriends.firebaseapp.com",
  projectId: "laboratoriafriends",
  storageBucket: "laboratoriafriends.appspot.com",
  messagingSenderId: "1048862460473",
  appId: "1:1048862460473:web:7a932ebb5a4a76eccc9be8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

