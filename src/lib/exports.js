export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js'; // eslint-disable-line

export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';// eslint-disable-line

export {
  initializeApp,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
