import firebaseApp from "./config-firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth();

export function userCreate(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
      return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      return errorCode, errorMessage;
  });
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
      return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      return errorCode, errorMessage;
  });
}

// const auth = getAuth();
signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
