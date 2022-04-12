import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

export const auth = getAuth();

/*Login de novos usuários -
É necessário criar uma função que será exportada para main.js que receberá o email e senha de lá
createUserWithEmailAndPassword será o retorno.*/
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const uid = user.uid;
    return user && uid;
  });
}

//Login de usuários existentes
export function userWithLogin (email, password){
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
    })
}

//Definir um observador do estado de autenticação e coletar dados dos usuários
export function isLoggedIn (callback){
  onAuthStateChanged(auth, (user) => {
    callback (user !== null)
  });
}


//Para receber informações de perfil de um usuário
/*const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const userName = user.userName;
  const email = user.email;
  const uid = user.uid;
}*/

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
