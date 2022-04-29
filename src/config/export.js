// eslint-disable-next-line
export { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js"; // eslint-disable-line

export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"; // eslint-disable-line

export { db, auth } from './start-firebase.js';

