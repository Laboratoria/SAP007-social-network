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

/* export function receiveUser(displayName){
  const user = auth.currentUser;
  if (user){
    displayName = user.displayName;
    console.log(displayName)
    return displayName;
    //const email = user.email;
    //const photoURL = user.photoURL;
    //const emailVerified = user.emailVerified;
  }
  else {
    console.log('Not Logged In');
  }
}; */

export function logout() {
  return signOut(auth)
    .then(() => logout).catch((error) => error);
}

// Para enviar o email de redefinição
export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email)
    .then(() => email);
}
