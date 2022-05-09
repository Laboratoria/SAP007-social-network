import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} 
from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import { auth } from "./config-firebase.js";

//Cadastrar um usuário com endereço de e-mail e senha
export function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
 
//Cadastrar um usuário e fazer login com google
const provider = new GoogleAuthProvider();
export function registerGoogle() {
    return signInWithPopup(auth, provider)
};

//Conectar um usuário com endereço de e-mail e senha
export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

//Função para sair da rede social
export function userLogout() {
    return signOut(auth)
    .then(() => "Logout")
    .catch((error) => error)
  }

export function updateUsername(name){
  console.log(name)
  updateProfile(auth.currentUser, {
    displayName: name
  });
}

export function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//Observar o estado do usuário, se está logado ou não
export function keepUserLoggedIn(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user != null);
  });
}