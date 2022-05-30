import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from './exports.js';

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export function userCreate(name, email, password) {
  return createUserWithEmailAndPassword(auth, name, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}
export const loginGoogle = () => signInWithPopup(auth, provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  return user;
});

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export function loggedIn(cb) {
  onAuthStateChanged(auth, (user) => {
    cb(user != null);
  });
}

export function userLogout() {
  return signOut(auth)
    .then(() => 'Saiu')
    .catch((error) => error);
}

export function getUser() {
  const auth = getAuth();
  const user = auth.currentUser;

  return user || localStorage.getItem('userEmail');
}
