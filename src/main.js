// rotas, suitch
// import { myFunction } from "./lib/index.js";
import "./produtosFirebase/config-firebase.js";



// myFunction();
const email = "teste3@teste.com"
const senha = "1234567" 

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
