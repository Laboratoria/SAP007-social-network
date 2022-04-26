import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { auth } from "./start-firebase.js";

export function registerNewUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      message.innerHTML = "Cadastro realizado com sucesso!";
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          message.innerHTML = "Email já cadastrado! Escolha outro email.";
          break;
        case "auth/weak-password":
          message.innerHTML = "Sua senha deve ter no mínimo 6 caracteres.";
          break;
      }
    });
}

export function authUserLabFriends(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = userCredential.uid;
      window.location.hash = "#feed";
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/user-not-found":
          message.innerHTML =
            "Usuário não encontrado! Crie um cadastro na LabFriends!";
          break;
        case "auth/wrong-password":
          message.innerHTML = "Senha errada! Digite novamente!";
          break;
      }
    });
}

export function authUserWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = "#feed";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export function logout() {
  return signOut(auth).then(
    
  )
}

export function authChange(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user !== null);
  });
}

export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email);
}
