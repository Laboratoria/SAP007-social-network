import "../../lib/config-firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
    const containerRegister = document.createElement('div')

    const templateRegister = `
      <form class="conteudoRegister">
      <p class="tituloS">Sign Up</p>
      <input type="text" class="input nome" id="inputName" placeholder="Nome Completo" required /><br>
      <input type="email" class="input email" id="inputEmail" placeholder="Insira seu email" requerid /><br>
      <input type="password" class="input senha" id="inputSenha" placeholder="Insira uma senha" requerid /><br>
      <input type="password" class="input confirmaSenha" id="inputSenha" placeholder="Confirme sua senha" requerid /><br>
    <br><button class='btn submit' type="submit">Sign Up</button><br>
    </form>
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