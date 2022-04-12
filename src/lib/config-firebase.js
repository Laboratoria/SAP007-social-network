import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA67hbBU9XpJYva3s_94wO5KasFRKw7iV8",
  authDomain: "leitoras.firebaseapp.com",
  projectId: "leitoras",
  storageBucket: "leitoras.appspot.com",
  messagingSenderId: "105182267346",
  appId: "1:105182267346:web:a9e72c8c1a031df4b42a0b",
};

const app = initializeApp(firebaseConfig);
console.log(app);


