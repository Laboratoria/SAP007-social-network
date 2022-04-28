import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import { auth } from "./config-firebase.js";

export function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

const provider = new GoogleAuthProvider();
export function registerGoogle() {
    return signInWithPopup(auth, provider)
};

//Conectar um usuário com endereço de e-mail e senha

/*signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });*/

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }