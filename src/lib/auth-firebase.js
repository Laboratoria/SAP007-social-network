import { getAuth, signInWithPopup, GoogleAuthProvider } from  "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
//import "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

//GOOGLE - Para fazer login com uma janela pop-up, chame signInWithPopup:

export function loginGoogle() {
    return signInWithPopup(auth, provider)
      .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    //const user = result.user;
    return credential
  }).catch((error) => {
    // Handle Errors here.
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    return credential
    })
}
