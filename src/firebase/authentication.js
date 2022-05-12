import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from './exports.js';

export const auth = getAuth();
// eslint-disable-next-line no-unused-vars
const provider = new GoogleAuthProvider();

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export function verifyLogged(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user !== null);
  });
}

// eslint-disable-next-line no-shadow
export function signInWithGoogle(auth, provider) {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch(() => {

    });
}

export function userCreate(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      })
        .then(() => {
        })
        .catch(() => {
        });
      const user = userCredential.user;
      return user;
    },
  );
}

export function logout() {
  localStorage.clear();
  return signOut(auth);
}
