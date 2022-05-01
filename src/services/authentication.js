import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from '../export.js';
import { auth, db } from "../dependencies/config-firebase.js"; //eslint-disable-line

export function current() {
  const user = auth.currentUser;
  return user;
}

export function login(email, password, errorPrint) {
  const printError = errorPrint;
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.hash = 'feed';
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        printError.innerHTML = ' Senha incorreta!';
      } else if (error.code === 'auth/invalid-email') {
        printError.innerHTML = ' E-mail incorreto!';
      } else {
        printError.innerHTML = 'E-mail incorreto ou não cadastrado';
      }
    });
}

export function loginGoogle(errorPrint) {
  const printError = errorPrint;
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then(() => {
      window.location.hash = 'feed';
    })
    .catch((error) => {
      const e404 = error;
      const errorCode = e404.code;
      const errorEmail = e404.email;
      const credential = GoogleAuthProvider.credentialFromError(e404);
      if (errorCode || errorEmail || credential) {
        printError.innerHTML = ' Ocorreu algum erro! Tente novamente mais tarde.';
      }
    });
}

export function redefinePassword(email, errorPrint) {
  const printError = errorPrint;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      printError.innerHTML = 'E-mail enviado com sucesso!';
      printError.style.color = 'green';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode) {
        printError.innerHTML = 'Ocorreu algum erro. Tente novamente.';
      }
    });
}

export function register(email, password, name, errorPrint) {
  const printError = errorPrint;
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      const photoUser = '../img/user-default-photo.png';
      updateProfile(user, {
        displayName: name,
        photoURL: photoUser,
      });
    })
    .then(() => {
      window.location.hash = '#feed';
    })
    .catch((error) => {
      if (error.code === 'auth/uid-already-exists') {
        printError.innerHTML = 'E-mail já cadastrado';
      } else if (error.code === 'auth/email-already-in-use') {
        printError.innerHTML = 'E-mail já cadastrado';
      } else if (error.code === 'auth/invalid-email') {
        printError.innerHTML = 'E-mail inválido';
      } else {
        printError.innerHTML = ' Ocorreu algum erro! Tente novamente.';
      }
    });
}

export function logged(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user !== null);
  });
}

export function logout() {
  signOut(auth)
    .then(() => {
      window.location.hash = '#login';
    })
    .catch((error) => error);
}
