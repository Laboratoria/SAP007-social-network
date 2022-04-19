import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  // sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const provider = new GoogleAuthProvider();
export const authentication = getAuth();
// criar um novo usuários
export function creatNewUser(email, password) {
  return createUserWithEmailAndPassword(authentication, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
}
export function resetaPassword(email) {
  return sendPasswordResetEmail(authentication, email);
}

// entrar com email e senha
export function signinPassword(email, password) {
  // sendEmailVerification(auth.currentUser);
  return signInWithEmailAndPassword(authentication, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
}
// entrar com o Google
export function googleLogin() {
  return signInWithPopup(authentication, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
export function stateVerification(cb) {
  onAuthStateChanged(authentication, (user) => {
    cb(user != null);
  });
}
export function sair() {
  return signOut(auth)
    .then(() => 'sair')
    .catch((error) => error);
}
