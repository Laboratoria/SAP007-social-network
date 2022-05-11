import { initializeApp }
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import { getAuth }
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

import { getFirestore }
  from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEcRw-VST-DiVqt4Tjbjhdq5gjzcK1bqw",
  authDomain: "projeto-social-network-9aa96.firebaseapp.com",
  projectId: "projeto-social-network-9aa96",
  storageBucket: "projeto-social-network-9aa96.appspot.com",
  messagingSenderId: "1010304710305",
  appId: "1:1010304710305:web:04ce360783a12c256ce2e0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
