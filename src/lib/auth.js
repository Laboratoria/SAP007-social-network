import {auth} from "../configs/config.firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";


// O usuário deve: 
// Fazer login
// Fazer login com o Google
// Fazer cadastro
// Fazer validação de Cadastro
// Fazer Logout
// Recuperar Senha
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

  export function signIn (email, password) {
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Deu tudo certo!");
    return user;
  });

}

export function createUser (email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
}

export function userLogout() {

  return signOut(auth)
}

// export function sendPasswordResetEmail(email,password){
//   return (auth, email, password)
//   .then(() => {
    
  
//   })
// }


export function checkLogin (cb){
  onAuthStateChanged(auth, (user) => {
    cb(user !=  null)
  })
}