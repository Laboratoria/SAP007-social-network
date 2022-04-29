import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { auth } from '../dependencies/config-firebase.js';

export function current() {
  const user = auth.currentUser;
  return user;
}

export function login(email, password, errorPrint) {
  return signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    window.location.hash = 'feed';
  })
  .catch((error) => {
    if (error.code === 'auth/wrong-password') {
      errorPrint.innerHTML = ' Senha incorreta!';
    } else if (error.code === 'auth/invalid-email') {
      errorPrint.innerHTML = ' E-mail incorreto!';
    } else {
      errorPrint.innerHTML = 'E-mail incorreto ou não cadastrado';
    }
  });
}

export function loginGoogle(errorPrint) {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
  .then(() => {
    window.location.hash = 'feed';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorEmail = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    if ( errorCode || errorEmail || credential) {
      errorPrint.innerHTML = ' Ocorreu algum erro! Tente novamente mais tarde.';
    };
  });
}

export function redefinePassword(email, errorPrint) {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    errorPrint.innerHTML = ' E-mail enviado com sucesso!';
    errorPrint.style.color = 'green'
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode) {
      errorPrint.innerHTML = ' Ocorreu algum erro. Tente novamente.';
    }
  });
}

export function register(email, password, name, errorPrint) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    const user = auth.currentUser;
    const photoUser = '../img/user-default-photo.png';
    updateProfile(user, {
      displayName: name,
      photoURL: photoUser
    })
  })
  .then(() => {
    window.location.hash = '#feed';
  })
  .catch((error) => {
    if (error.code === 'auth/uid-already-exists') {
      errorPrint.innerHTML = 'E-mail já cadastrado';
    } else if (error.code === 'auth/email-already-in-use') {
      errorPrint.innerHTML = 'E-mail já cadastrado';
    } else if (error.code === 'auth/invalid-email') {
      errorPrint.innerHTML = 'E-mail inválido';
    } else {
      errorPrint.innerHTML = ' Ocorreu algum erro! Tente novamente.';
    }
  });
}

export function logged(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user !== null)
  });
}

export function logout() {
  signOut(auth)
  .then(() => {
    window.location.hash = '#login';
  })
  .catch((error) => {
    return error
  });
}