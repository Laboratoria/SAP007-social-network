import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
  import { auth } from '../dependencies/config-firebase.js';
  
  export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  export function loginGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.location.hash = 'feed';
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(' não entrou com o google');
      });
  }
  
  export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //   const user = userCredential.user;
    //   const userRef = doc(db, 'users', user.uid);
    //   setDoc(userRef, { email: email.value, name: completeName.value });
    //   console.log(user.uid);
    //   console.log('Entrou no then do service');
    // })
    // .catch((error) => {
    //   console.log(error);
    //   console.log('Entrou no catch do service');
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });
  }
  
  
  const user = auth.currentUser;
  export function loggedIn(callback) {
    onAuthStateChanged(auth, (user) => {
      callback(user !== null)
    });
  }
  
  export function guard() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.hash = '#login';
      }
    });
  }
  
  export function logout() {
    signOut(auth).then(() => {
      window.location.hash = '#login';
    }).catch((error) => {
      console.log('Error no logout')
      return error
    });
  }
  
  export function redefinirSenha(email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('EmailEnviado');
      console.log('Entrou no then de redefinir');
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log('Entrou no cath de redefinir');
      // ..
    });
  }
  