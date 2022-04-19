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
export function registerGoogle(provider) {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        })

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

