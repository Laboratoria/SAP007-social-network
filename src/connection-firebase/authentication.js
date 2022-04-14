import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import "./start-firebase.js";

const auth = getAuth();

// Novos usuários
export const registerNewUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
      console.log("Cadastrou novo usuário!");
      //O que fazer?
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Não cadastrou novo usuário!");
      //O que fazer?
    });
};

// Usuários existentes
export function authUserLabFriends(email, password) {
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
    });
}

// Autenticação do Google
export function authUserWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
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
      console.log("Usuário deslogou!");
    })
    .catch((error) => {
      console.log("Usuário não deslogou!");
    });
}

//Para enviar o email de redefinição
export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email).then(() => {
    console.log("Enviou senha por email!");
  });
}
