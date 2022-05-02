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
      <p id="message" class="successMessage menssage"></p>
    <br><button type="submit" id="btn-Cadastrar">Sign Up</button><br></form>
    `;

    containerRegister.innerHTML = templateRegister;

const email = containerRegister.querySelector("#inputName");
const name = containerRegister.querySelector("#inputEmail");
const password = containerRegister.querySelector("#inputSenha");
const btnCadastrar = containerRegister.querySelector("#btn-Cadastrar");
const msgAlert = containerRegister.querySelector('#message');
const auth = getAuth();

btnCadastrar.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value, email.value, password.value) {
    createUserWithEmailAndPassword(auth, name.value, email.value, password.value)
  .then(() => {
     msgAlert.innerHTML = "Registro feito com sucesso!";
      //window.location.hash = "#home";
  })
  .catch((error) => {
    const errorCode = error.code;
    let errorMessage = error.message;

        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage = 'Insira um email válido.';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/weak-password':
            errorMessage = 'A senha deve ter no mínimo seis caracteres.';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/email-already-in-use':
            errorMessage = 'Email já cadastrado.';
            msgAlert.innerHTML = errorMessage;
            break;
          case 'auth/missing-email':
            errorMessage = 'Insira um email.';
            msgAlert.innerHTML = errorMessage;
            break;
          default:
            errorMessage = 'Preencha todos os campos';
            msgAlert.innerHTML = errorMessage;
  }
}) 
}
})
return containerRegister;
}