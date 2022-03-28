import {newUser} from '../../configs/authentication';

export default () => {
  const container = document.createElement("div");
  container.classList.add("content-login")
    
  const templateNewUser = `
      <img class="logo-site" src="img/logo-eu-poesia-r.png">
      <p class="text-register">Registre-se para publicar suas poesias</p>

    <form class="form-newuser">
      <input type="email" id="input-email" class="input-email" placeholder="E-mail">
      <input type="text" id="input-name" class="input-email" placeholder="Nome de usuário">
      <input type="date" id="birth-date" class="input-email">
      <input type="password" id="input-password" class="input-email" placeholder="Senha">
      <span id="message-error" class="message-error"></span>
      <button type="button" id="button-register" class="button-login">Cadastre-se</button>
    </form>
  
    <section class="message-register">
      <p class="text-login">
        Já possui cadastro? 
        <a href="#login" class="link-login">Login</a>
      </p>
    </section>
  `;
    
  container.innerHTML = templateNewUser;
  
  return container;
  }
  const NewUserEmail = container.querySelector('#input-email')
  const NewUserName = container.querySelector('#input-name')
  const NewUserDate = container.querySelector('#birth-date')
  const NewUserPassword = container.querySelector('#input-password')
  const ButtonRegister = container.querySelector('#button-register')

ButtonRegister.addEventListener('click', (e) => {
  e.preventDefault();
  newUser(NewUserName.value, NewUserDate.value, NewUserEmail.value, NewUserPassword.value)
}) 