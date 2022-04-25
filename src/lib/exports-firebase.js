import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js'; // eslint-disable-line

import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  getDocs,
  updateDoc,
  doc,
  where,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js'; // eslint-disable-line

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
};

export {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  // deleteDoc,
  getDocs,
  updateDoc,
  doc,
  where,
};
