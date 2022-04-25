import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

const provider = new GoogleAuthProvider();

export const auth = getAuth();
// criar novo usuários
export function creatNewUser(email, password) {
    return createUserWithEmailAndPassword(authentication, email, password).then(
        (userCredential) => {
            const user = userCredential.user;
            return user;
        }
    );
}
export const resetaPassword = (email) => {
    sendPasswordResetEmail(authentication, email);
};

// entrar com email e senha
export function signinPassword(email, password) {
    return signInWithEmailAndPassword(authentication, email, password).then(
        (userCredential) => {
            const user = userCredential.user;
            return user;
        }
    );
}
// entrar com o Google
export function googleLogin() {
    return signInWithPopup(authentication, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        return credential;
    });
}
export function stateVerification(cb) {
    onAuthStateChanged(authentication, (user) => {
        cb(user != null); 
    });
}
export function sair() {
    return signOut(authentication)
        .then(() => 'sair')
        .catch((error) => error);
}