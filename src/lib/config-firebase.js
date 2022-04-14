import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

//import { loginUser } from '../lib/config-firebase.js';

const firebaseConfig = {
  apiKey: "AIzaSyBEcRw-VST-DiVqt4Tjbjhdq5gjzcK1bqw",
  authDomain: "projeto-social-network-9aa96.firebaseapp.com",
  projectId: "projeto-social-network-9aa96",
  storageBucket: "projeto-social-network-9aa96.appspot.com",
  messagingSenderId: "1010304710305",
  appId: "1:1010304710305:web:04ce360783a12c256ce2e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//login
/*export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/nav';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Coloque seus dados corretamente');
      window.location.hash = '#/login';
    });
};*/