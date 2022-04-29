import "../../lib/config-firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
    const containerRegister = document.createElement('div')

    const templateRegister = `
      <form>
      <p class="paragrafoLogin">Sign Up</p>
      <input type="email" id="inputName" placeholder="Insera seu nome completo " requerid /><br>
      <input type="email" id="inputEmail" placeholder="Insera seu email" requerid /><br>
      <input type="password" id="inputSenha" placeholder="Confirme sua senha" requerid /><br>
    <br><button type="submit" id="btn-Cadastrar">Sign Up</button><br></form>
    `;

    containerRegister.innerHTML = templateRegister;

const email = containerRegister.querySelector("#inputName");
const name = containerRegister.querySelector("#inputEmail");
const password = containerRegister.querySelector("#inputSenha");
const btnCadastrar = containerRegister.querySelector("#btn-Cadastrar");
const auth = getAuth();

btnCadastrar.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value, email.value, password.value) {
    createUserWithEmailAndPassword(auth, name.value, email.value, password.value)
  .then(() => {
      window.location.hash = "#home";
  })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      alert("Essa conta já existe com uma credencial diferente");
  }
}) 
}
})
return containerRegister;
}