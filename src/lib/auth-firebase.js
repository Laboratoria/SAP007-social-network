import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
}
    from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

//Criar uma conta

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });


//Conectar um usuário com endereço de e-mail e senha

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });