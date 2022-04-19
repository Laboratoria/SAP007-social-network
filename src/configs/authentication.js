import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

export const auth = getAuth();

//criação de novos usuários
export const registerUser = (displayName, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    updateProfile(auth.currentUser, {
      displayName: displayName
    }).then(() => {
      const user = userCredential.user; 
      return user
    }).catch((error) => {
      console.log(error)
    });
  });
};

//Login de usuários existentes
export const userWithLogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user
  });
}

//Definir um observador do estado de autenticação e coletar dados dos usuários
export function isLoggedIn (callback){
  onAuthStateChanged(auth, (user) => {
    callback (user !== null)
  });
}

/*export function receiveUser(displayName){
  const user = auth.currentUser;
  if (user){
    displayName = user.displayName;
    console.log(displayName)
    return displayName;
    //const email = user.email;
    //const photoURL = user.photoURL;
    //const emailVerified = user.emailVerified;
  }
  else {
    console.log('Not Logged In');
  }
};*/

export function logout() {
  return signOut(auth)
    .then(() => {
      return logout;
  }).catch((error) => {
      return error;
  });
}

//Para enviar o email de redefinição
export function forgotPassword(email) {
return sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('ola');
  })
}
