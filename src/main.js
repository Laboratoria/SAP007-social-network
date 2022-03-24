// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBABEU0B6sje9XrJfZ0wq1H64qqxX7shXY",
  authDomain: "eu-poesia---social-network.firebaseapp.com",
  projectId: "eu-poesia---social-network",
  storageBucket: "eu-poesia---social-network.appspot.com",
  messagingSenderId: "237220348475",
  appId: "1:237220348475:web:15fee5c697c2ba5bc7d21e"
};

const app = initializeApp(firebaseConfig);
myFunction();

