import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log('entrou', userCredential);
      return userCredential;
    }
  );
}

export function verifyLogged(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user !== null);
  });
}

export function signInWithGoogle(auth, provider) {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('googlei');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export function userCreate(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      const user = userCredential.user;
      return user;
    }
  );
}

export function logout() {
  localStorage.clear();
  return signOut(auth);
}
