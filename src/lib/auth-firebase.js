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

export function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//Função para sair da rede social
export function logOff() {
    return signOut(auth);
  }

//Receber o perfil de um usuário
/*const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}*/

//Observar o estado do usuário, se está logado ou não
/*onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
*/
/* 
const auth = getAuth();

   */

export function updateUsername(name){
  updateProfile(auth.currentUser, {
    displayName: name
  });
}