import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { auth } from '../configs/config.firebase.js';
// import {initFirebaseAuth} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const provider = new GoogleAuthProvider();

// Fazer Login com o Google ↓

export function signinGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    });
}

// Usuários existentes ↓
// export const signIn= (email, password)=>{
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
// Criar novos usuários ↓
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  });

// Verificar se o usuário está conectado ou desconectado ↓

// function initFirebaseAuth() {
//   onAuthStateChanged(getAuth(), authStateObserver);
// }

// authStateObserver é um observador do estado de autenticação: será acionado sempre que o usuário entrar ou sair;
