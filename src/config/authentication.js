import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile
} from './export.js';
import { auth } from './start-firebase.js';
import { createNewUser } from './user.js';

export function registerNewUser(name, email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      updateProfile(auth.currentUser, {
        displayName: name
      });

      const userId = userCredential.user.uid;
      
      sendEmailVerification(auth.currentUser)
        .then(() => {
          createNewUser(name, email, userId);
          window.location.hash = '#feed';
        })
        .catch(() => {
          const message = document.querySelector('#message');
          message.innerHTML = 'Email de verificação não enviado!';
        });
    })
    .catch((error) => {
      const message = document.querySelector('#message');
      switch (error.code) {
        case 'auth/email-already-in-use':
          message.innerHTML = 'Email já cadastrado!<br>Escolha outro email.';
          break;
        case 'auth/weak-password':
          message.innerHTML = 'Sua senha deve ter no<br> mínimo 6 caracteres.';
          break;
        default:
      }
    });
}

export function authUserLabFriends(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.hash = '#feed';
    })
    .catch((error) => {
      const message = document.querySelector('#message');
      switch (error.code) {
        case 'auth/user-not-found':
          message.innerHTML = 'Usuário não encontrado!<br>Crie um cadastro na LabFriends!';
          break;
        case 'auth/wrong-password':
          message.innerHTML = 'Senha errada!<br>Digite novamente!';
          break;
        default:
      }
    });
}

export function authUserWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const userName = result.user.displayName;
      const userEmail = result.user.email;
      const userId = result.user.uid;
      createNewUser(userName, userEmail, userId);
      window.location.hash = '#feed';
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error);
    });
}

export function logout() {
  return signOut(auth).then();
}

export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function authChange(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user !== null);
  });
}
