import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
} from './export.js';
import { auth } from './start-firebase.js';

export function registerNewUser(name, email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => updateProfile(auth.currentUser, { displayName: name }));
}

export function authUserLabFriends(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function authUserWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function logout() {
  return signOut(auth).then();
}

export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function authChange(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user !== null);
  });
}
