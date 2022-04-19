import {
    createUserWithEmailAndPassword,
    //signInWithEmailAndPassword,
    //GoogleAuthProvider
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import { auth } from "./config-firebase.js";
import { provider } from "./config-firebase.js";

export function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

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

