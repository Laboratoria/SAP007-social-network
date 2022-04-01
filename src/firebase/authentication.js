import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const authentication= getAuth();
const googleProvider = new GoogleAuthProvider;
//criar um novo usuários
   export function creatNewUser (email, password){
    return createUserWithEmailAndPassword(authentication, 
     email, password)
     .then((userCredential) => {
    const user = userCredential.user;
        return user;
  }
  );
}
// entrar com email e senha 
 export function signinPassword (email, password){
     signInWithEmailAndPassword(authentication, 
     email, password)
    .then((userCredential) => {
    const user = userCredential.user;
        return user;
 }
 );
 }
  // entrar com o Google
 export function signinWithGoogle => () {
  signInWithPopup(authentication, googleProvider)
   .then((result) => {
         const credential = 
    GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    if( )
    const errorMessage = error.message;
    const email = error.email;
    const credential = 
    GoogleAuthProvider.credentialFromError(error);
  });
 }