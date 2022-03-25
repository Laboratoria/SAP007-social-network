import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const auth = getAuth();

export function userCreate(email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      console.log("entrou!");
      return user;
    }
  );
}

export function userLogout() {
  return signOut(auth)
    .then(() => {
      return "Logout";
    })
    .catch((error) => {
      return error;
    });
}
