import { auth } from '../configs/config.firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

// O usuário deve: 
// Fazer login (X)
// Fazer login com o Google (X)
// Fazer cadastro (X)
// Fazer validação de Cadastro
// Fazer Logout
// Continuar Logado após fazer login

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
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = errorCode.message;
  //   alert('Deu errado!');
  //     return errorMessage;
  // });
}
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  });

  export function userLogout() {
    return signOut(auth)
      .then(() => "Logout")
      .catch((error) => error);
  }


// 
export function checkLogin (){
  const user= auth.currentUser;
  return user;
}

