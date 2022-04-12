import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import "./start-firebase.js";

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const errorCode = "";
export const errorMessage = "";
export const errorEmail = "";
export const errorCredential = "";

// Novos usuários
export const registerNewUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
    });
};

// Usuários existentes
export function authUserLabFriends(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
    });
}

// Autenticação do Google
export function authUserWithGoogle(auth, provider) {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
      errorEmail = error.email;
      errorCredential = GoogleAuthProvider.credentialFromError(error);
    });
}

/* Observador de objetos - Para cada página do seu app que precisa de informações sobre o usuário conectado, anexe um observador ao objeto de autenticação global. Este observador é chamado sempre que o estado de login do usuário muda. */
export function authChange(auth) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
}

// Desconectando usuário
export function authOut(auth) {
  return signOut(auth)
    .then(() => {})
    .catch((error) => {});
}

//Para enviar o email de redefinição
export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email).then(() => {
    console.log("ola");
  });
}
