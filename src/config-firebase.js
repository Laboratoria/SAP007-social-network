import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1PM6Kq8qggIFKLEd8zqXex_WTnde7sCw",
  authDomain: "alem-91779.firebaseapp.com",
  projectId: "alem-91779",
  storageBucket: "alem-91779.appspot.com",
  messagingSenderId: "1076428810136",
  appId: "1:1076428810136:web:f57b204570eb0f7953aded",
  measurementId: "G-JW8812E11M"
};

const app = initializeApp(firebaseConfig);

//Login de novos usuários
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });