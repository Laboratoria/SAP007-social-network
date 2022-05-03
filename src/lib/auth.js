import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { auth } from '../configs/config.firebase.js';

const provider = new GoogleAuthProvider();

export function signinGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    });
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Deu tudo certo!');
      return user;
    });
}
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  });

export function userLogout() {
  signOut(auth).then(() => {
    window.location.hash = '#login';
  }).catch((error) => {
    console.log('Error no logout')
    return error
  });
}

// export function checkLogin() {
//   const user = auth.currentUser;
//   return user;
// }
  export const user = auth.currentUser;
  export function checkLogin(callback) {
    
    onAuthStateChanged(auth, (user) => {
      callback(user !== null)
    });
  }
