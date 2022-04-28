import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from '../lib/exports-firebase.js';

export const auth = getAuth();

export function registerUser(displayName, email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName,
      }).then(() => {
        const user = userCredential.user;
        return user;
      }).catch((error) => error);
    });
}

export function userWithLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    });
}

export function isLoggedIn(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user !== null);
  });
}

export function logout() {
  console.log("teste")
  return signOut(auth)
    .then(() => 
    console.log("teste")
    ).catch((error) => console.log(error));
}

export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email)
    .then(() => email);
}
