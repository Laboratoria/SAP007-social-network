import { getAuth, signInWithPopup, GoogleAuthProvider } from  "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

//GOOGLE - Para fazer login com uma janela pop-up, chame signInWithPopup:

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