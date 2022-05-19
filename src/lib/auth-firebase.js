import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
 } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js'; 
 

const auth = getAuth();
const provider = new GoogleAuthProvider();

//GOOGLE - Para fazer login com uma janela pop-up, chame signInWithPopup:

export function userCreate(name, email, password) {
  return createUserWithEmailAndPassword(auth, name, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export function loginGoogle() {
    return signInWithPopup(auth, provider)
      .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return credential
  }).catch((error) => {
    const credential = GoogleAuthProvider.credentialFromError(error);
    return credential
    })
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    },
  );
}

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export function loggedIn(cb) {
  onAuthStateChanged(auth, (user) => {
    cb(user != null);
  });
}

export function userLogout() {
  return signOut(auth)
    .then(() => 'Saiu')
    .catch((error) => error);
}
