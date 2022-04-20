import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { auth } from "./start-firebase.js";

export const verificationEmail = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      return "true";
    })
    .catch(() => {
      return "false";
    });
};

export const registerNewUser = (email, password) => {
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
};

export function authUserLabFriends(email, password) {
  console.log(email);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = userCredential.uid;
      window.location.hash = "#timeline";
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
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export function logout() {
  return signOut(auth);
}

export function authChange(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user !== null);
  });
}

//exibir mensagem de erro
export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      messageReset.innerHTML = "Email enviado com sucesso!";
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      switch (error.code) {
        case "auth/missing-email":
          messageReset.innerHTML = "Preencha o campo de email!";
          break;
        case "auth/user-not-found":
          messageReset.innerHTML =
            "Usuário não encontrado! Cadastre-se no LabFriends!";
          break;
      }
    });
}
