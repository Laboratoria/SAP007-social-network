import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  signInWithRedirect,
  getRedirectResult,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import "./start-firebase.js";

const auth = getAuth();


// Novos usuários
export const registerNewUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
      return user && uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode && errorMessage;
    });
};

// Usuários existentes
export function authUserLabFriends(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = userCredential.uid;

    })
    .catch((error) => {
       error.code && error.message;
    });
}

// Autenticação do Google
export function authUserWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  getRedirectResult(auth);
}

/* Observador de objetos - Para cada página do seu app que precisa de informações sobre o usuário conectado, anexe um observador ao objeto de autenticação global. Este observador é chamado sempre que o estado de login do usuário muda. */
export function authChange(auth) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      //callback (uid !== null)
    } else {
    }
  });
}

// Desconectando usuário
export function authOut(auth) {
  return signOut(auth)
    .then(() => {
      return logout;
    })
    .catch((error) => {
      return error;
    });
}

//Para enviar o email de redefinição
export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email).then(() => {
    console.log("ola");
  });
}
