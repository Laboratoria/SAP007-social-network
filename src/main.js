// aqui é o DOM

// Este es el punto de entrada de tu aplicacion
import "./config-firebase.js";
import { myFunction } from "./lib/index.js";

// myFunction();

function register() {
  btnSubmit.addEventListener("click", (e) => {
    const username = document.getElementById('username-inp');
    const email = document.getElementById('email-inp');
    const password = document.getElementById('password-inp');

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('usuário criado com sucesso!')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
      });
  });
}
