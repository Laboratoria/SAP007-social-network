import "../../lib/config-firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
    const containerRegister = document.createElement('div')

    const templateRegister = `
      <form>
      <p class="paragrafoLogin">Sign Up</p>
      <input type="text" id="inputName" placeholder="Nome Completo" required /><br>
      <input type="email" id="inputEmail" placeholder="Insera seu email" requerid /><br>
      <input type="password" id="inputSenha" placeholder="Insera uma senha" requerid /><br>
      <input type="password" id="inputSenha" placeholder="Confirme sua senha" requerid /><br>
    <br><button class='btn-submit' type="submit">Sign Up</button><br></form>
    `;

    containerRegister.innerHTML = templateRegister;

const auth = getAuth();
const email = document.getElementById("inputEmail")
const password = document.getElementById("inputSenha")

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  return containerRegister;
}