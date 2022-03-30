import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth = getAuth();

/*Login de novos usuários -
É necessário criar uma função que será exportada para main.js que receberá o email e senha de lá
createUserWithEmailAndPassword será o retorno.*/
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  });
}

//Login de usuários existentes - mesma coisa, signInWithEmailAndPassword é o retorno
/*export function existingUser (email, password){
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
    })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
}

//Definir um observador do estado de autenticação e coletar dados dos usuários
export function dataCollector (email, password){
return onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
}*/
