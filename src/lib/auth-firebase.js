import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

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