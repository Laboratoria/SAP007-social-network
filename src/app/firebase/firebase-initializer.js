// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

// Importacion de metodos
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  deleteDoc,
  orderBy,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyDYuZfFIZPCxXmDcw9j3_dlkuyM-57OKWA",
  authDomain: "girl-talk-app.firebaseapp.com",
  databaseURL: "https://girl-talk-app-default-rtdb.firebaseio.com",
  projectId: "girl-talk-app",
  storageBucket: "girl-talk-app.appspot.com",
  messagingSenderId: "994363584873",
  appId: "1:994363584873:web:6cf262fb179661b8b00df8"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);

export {
  db,
  storage,
  auth,
  getStorage,
  uploadBytes,
  ref,
  getFirestore,
  getDownloadURL,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  deleteDoc,
  orderBy,
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  initializeApp,
  onAuthStateChanged,
};
