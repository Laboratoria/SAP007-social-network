// rotas, suitch
// import { myFunction } from "./lib/index.js";
import "./produtosFirebase/config-firebase.js";
import {templateLogin } from "./pages/newLogin/newLogin.js"




// myFunction();
const email = "dayanne33@teste.com"
const senha = "12345678" 

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("deu certo");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("deu errado");
    // ..
  });
console.log(templateLogin );