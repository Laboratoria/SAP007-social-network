
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyD2D63k_E51u_kOMKhTWr5Xayd918X3-Sw",
    authDomain: "social-network-c3043.firebaseapp.com",
    projectId: "social-network-c3043",
    storageBucket: "social-network-c3043.appspot.com",
    messagingSenderId: "527202845610",
    appId: "1:527202845610:web:f385f21d089a6f388ea1d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

const db = getFirestore();