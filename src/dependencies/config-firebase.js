import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCHQm4GkaSIhilU-MdYk7iItd09BUzqFA0',
  authDomain: 'social-network-1df01.firebaseapp.com',
  projectId: 'social-network-1df01',
  storageBucket: 'social-network-1df01.appspot.com',
  messagingSenderId: '794846527579',
  appId: '1:794846527579:web:89c6446e30a6a972493f7e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
