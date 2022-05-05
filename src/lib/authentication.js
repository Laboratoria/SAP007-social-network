import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from './exports.js';

const provider = new GoogleAuthProvider();
export const auth = getAuth();

export function userCreate(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      const user = userCredential.user;
      return user;
    },
  );
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export const googleLogin = () => signInWithPopup(auth, provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  // eslint-disable-next-line no-unused-vars
  const token = credential.accessToken;
  const user = result.user;
  return user;
});

export function loggedIn(cb) {
  onAuthStateChanged(auth, (user) => {
    cb(user != null);
  });
}

export function userLogout() {
  return signOut(auth)
    .then(() => 'Logout')
    .catch((error) => error);
}
