// eslint-disable-next-line
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const auth = getAuth();

export function logar(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logarGmail() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth);
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = provider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            window.location.hash = '#feed';
            console.log(credential);
            console.log(token);
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.email;
            console.log(error);

            const credential = GoogleAuthProvider.credentialFromError(error);

        });
}