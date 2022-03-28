import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth();

export function logar(email, senha) {
    console.log("logar")

    return signInWithEmailAndPassword(auth, email, senha).then((response) => {
        console.log('success', response);

    }).catch((error) => {

        console.log('error', error);
    });
}