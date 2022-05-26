// aqui exportaras las funciones que necesites
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./export.js";

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
};

export function userGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user
    })
}

export function userRegister(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })

}

export function getUser() {
  return auth.currentUser
}
export function keepUserLoggedIn(callback){
  onAuthStateChanged(auth, (user) => {
    callback (user != null);
  });
}

export function logout () {
  signOut(auth)
}

