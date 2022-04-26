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
export const resetaPassword = (email) => {
  sendPasswordResetEmail(authentication, email);
};

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
  return signInWithPopup(authentication, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    //  const token = credential.accessToken;
    // const user = result.user;
    return credential;
  });
}
export function stateVerification(cb) {
  onAuthStateChanged(authentication, (user) => {
    cb(user != null); // function de sair veio do firebase
  });
}
//função sair
export function sair() {
  return signOut(authentication)
    .then(() => 'sair')
    .catch((error) => error);
}
