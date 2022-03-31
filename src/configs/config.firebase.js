import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBIU6ZhMszzUh8PI3-3d44c-zui3zYLBYw',
  authDomain: 'dev-cooks.firebaseapp.com',
  projectId: 'dev-cooks',
  storageBucket: 'dev-cooks.appspot.com',
  messagingSenderId: '192116692519',
  appId: '1:192116692519:web:a26c843ce7dbd4d8612002',
};

const app = initializeApp(firebaseConfig);
