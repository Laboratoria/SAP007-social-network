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

export const registerNewUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Cadastrou novo usuário!");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Não cadastrou novo usuário!");
    });
};

export function authUserLabFriends(email, password) {
  console.log(email);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = userCredential.uid;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
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
      console.log(errorCode, errorMessage);
    });
}

export function logout() {
  return signOut(auth);
}

export function forgotPassword(email) {
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("consegui");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export function authChange(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user !== null);
  });
}
