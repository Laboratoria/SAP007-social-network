// aqui é o DOM

// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { getDataBase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";


const firebaseConfig = {
  apiKey: 'AIzaSyDYuZfFIZPCxXmDcw9j3_dlkuyM-57OKWA',
  authDomain: 'girl-talk-app.firebaseapp.com',
  databaseURL: 'https://girl-talk-app-default-rtdb.firebaseio.com',
  projectId: 'girl-talk-app',
  storageBucket: 'girl-talk-app.appspot.com',
  messagingSenderId: '994363584873',
  appId: '1:994363584873:web:6cf262fb179661b8b00df8',
};

const app = initializeApp(firebaseConfig);
const auth = getDataBase();

myFunction();