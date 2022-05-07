// eslint-disable-next-line
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence, sendPasswordResetEmail } from  '../../configurafirebase/exports.js';

const auth = getAuth();

export function logar(email, password) {
  return setPersistence(auth, browserSessionPersistence)
    .then(() => signInWithEmailAndPassword(auth, email, password));
}

export function logarGmail() {
  return setPersistence(auth, browserSessionPersistence)
    .then(() => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    });
}

export const recoverPassword = (email) => sendPasswordResetEmail(auth, email);
