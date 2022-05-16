export {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js'; // eslint-disable-line

export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js'; // eslint-disable-line

// eslint-disable-next-line import/no-unresolved
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js ';
