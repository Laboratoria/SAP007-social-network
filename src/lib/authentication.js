import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const auth = getAuth();

export function userCreate(email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log('usuário entrou');
      return user;
    },
  );
}

