import {registerUser} from "../../configs/authentication.js";

export default () => {
  const container = document.createElement("div");
  container.classList.add("content-login")
    
  const templateNewUser = `
      <img class="logo-site" src="img/logo-eu-poesia-r.png" alt="Logo Eu, Poesia">
      <p class="text-register">Registre-se para publicar suas poesias</p>

    <form class="form-newuser">
      <input type="email" id="input-email" class="input-email" placeholder="E-mail">
      <input type="password" id="input-password" class="input-email" placeholder="Senha">
      <span id="message" class="message"></span>
      <button type="button" id="button-register" class="button-register">Cadastre-se</button>
    </form>
  
    <section class="message-register">
      <p class="text-login">
        Já possui cadastro? 
        <a href="#login" class="link-login">Login</a>
      </p>
    </section>
  `;
   
container.innerHTML = templateNewUser; 

const newUserEmail = container.querySelector('#input-email')
const newUserPassword = container.querySelector('#input-password')
const buttonRegister = container.querySelector('#button-register')
let msgAlert = container.querySelector('#message')

buttonRegister.addEventListener('click', (e) => {
  e.preventDefault();
  registerUser(newUserEmail.value, newUserPassword.value)
    .then(function () {
      msgAlert.innerHTML = 'Email Cadastrado'
      window.location.hash='#login'
      })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      switch(errorCode) {
        case 'auth/invalid-email':
          errorMessage = 'Insira um email válido.'
          msgAlert.innerHTML = errorMessage;
          break;
        case 'auth/weak-password':
          errorMessage = 'A senha deve ter no mínimo seis caracteres.'
          msgAlert.innerHTML = errorMessage;
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'Email já cadastrado.'
          msgAlert.innerHTML = errorMessage;
          break;
        case 'auth/missing-email':
          errorMessage = 'Insira um email.'
          msgAlert.innerHTML = errorMessage;
          break;  
        default:
          errorMessage = 'Preencha todos os campos'
          msgAlert.innerHTML = errorMessage;
        }


      /*if (errorCode === 'auth/invalid-email'){
        errorMessage = 'Insira um email válido.'
        msgAlert.innerHTML = errorMessage;
      }
      else if (errorCode === 'auth/weak-password'){
        errorMessage = 'A senha deve ter no mínimo seis caracteres.'
        msgAlert.innerHTML = errorMessage;
      }
      else if (errorCode === 'auth/email-already-in-use'){
        errorMessage = 'Email já cadastrado.'
        msgAlert.innerHTML = errorMessage;
      }
      else if (errorCode === 'auth/missing-email'){
        errorMessage = 'Insira um email.'
        msgAlert.innerHTML = errorMessage
      }
      else{
        errorMessage = 'Preencha todos os campos'
        msgAlert.innerHTML = errorMessage;
      }
*/
    });    
  });

return container;

}
 


/*<input type="text" id="input-name" class="input-email" placeholder="Nome de usuário">
      <input type="date" id="birth-date" class="input-email"></input>*/
//const NewUserName = container.querySelector('#input-name')
//const NewUserDate = container.querySelector('#birth-date')      

