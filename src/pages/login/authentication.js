// eslint-disable-next-line
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const auth = getAuth();

export function logar(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logarGmail() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
