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
  return signOut(auth)
<<<<<<< HEAD
    .then(() => 'logout').catch((error) => 'error');
=======
    .then(() => 'logout')
    .catch((error) => error);
>>>>>>> bf0be9fad9ff87194f5c802e9e0235420afe2e8d
}

export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email)
    .then(() => email);
}
