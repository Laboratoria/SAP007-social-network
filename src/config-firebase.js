import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getDataBase } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDYuZfFIZPCxXmDcw9j3_dlkuyM-57OKWA',
  authDomain: 'girl-talk-app.firebaseapp.com',
  projectId: 'girl-talk-app',
  storageBucket: 'girl-talk-app.appspot.com',
  messagingSenderId: '994363584873',
  appId: '1:994363584873:web:6cf262fb179661b8b00df8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getDataBase(app);
