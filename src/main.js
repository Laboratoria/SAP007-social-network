// Este es el punto de entrada de tu aplicacion
// importações
import "./config-firebase.js";
import { myFunction } from './lib/index.js';



myFunction(); 
const email = "exemplo@exemplo.com"
const password = "123456"

import { getAuth, createUser } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
const auth = getAuth();
createUser(auth, email, password)
  .then((credential) => {
    //Cadastro
    //const user = credential.user;
   // window.localStorage.setItem('emailForSignIn', email);
    console.log("logou")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("deu erro")
  });