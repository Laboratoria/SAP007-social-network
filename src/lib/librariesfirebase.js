import {
    getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup 
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
  import { getFirestore, addDoc , collection } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
  import { app } from './configurationfirebase.js';
  
  export const auth = getAuth();
  export const db = getFirestore();
  const provider = new GoogleAuthProvider();
  
  export const registerUser = () => {
    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('name').value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((UserCredential) => {
        const user = UserCredential.user;
        updateProfile(user, {
          displayName: fullName,
        });
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Code: ${errorCode}`);
        console.log(`Message: ${errorMessage}`);
      });
  };
  
  const loginUser = () => {
    console.log('Estoy logeando un usuario');
  };
  
  const loginOutUser = () => {
    console.log('Estoy cerrando sesion del usuario');
  };
  
  // função para obter sessão iniciada do usuário atual (não logado)
  export const getCurrentUser = () => {
    const uid = 'Anonimo';
    const user = auth.currentUser;
    if (user) {
      return user;
    }
    return { displayName: uid };
  };
  
  // dados dos usuários do google
  const googleUsers = async () => {
    const user = auth.currentUser;
    if (user !== null) {
      const docRef = await addDoc(collection(db, 'googleUsers'), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photo: user.photoURL,
      });
    }
  };
  // iniciar sessão registro com Google
  const startGoogle = () => {
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        googleUsers();
        window.location.hash = '#/home';
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      });
  };
  export const startGoogleToExport = startGoogle();
  console.log(startGoogleToExport);