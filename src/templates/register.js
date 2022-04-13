//import { createUserWithEmailAndPassword } from "./lib/auth-firebase.js"

export default () => {
  const container = document.createElement("div");
  container.className = "title-register"

  const template = `
    <h1 class="title-register">Faça seu cadastro</h1>
      <form class="myForm">
        <div class="information">
          <label class="label-name">Nome e sobrenome</label>
          <input type="text" id="name">

          <label class="label-user">Usuário</label>
          <input type="text" id="user">

          <label class="label-email">e-mail</label>
          <input type="email" id="email">

          <label class="label-password">Senha</label>
          <input type="password" id="password">

          <label class="label-confirm">Confirme a senha</label>
          <input type="password" id="password">
        
          <button id="btn-register" class="btn-register">Enviar</button>
        </div>
      </form>
  `;

  container.innerHTML = template;

  return container

}












/*export const registerPage = () => {
  const containerRoot = document.getElementById('root');
  const resgisterSection = document.createElement('section');
  resgisterSection.className = 'registerSection';

  const register = `
   <input type="checkbox" id="btn-moda">
    <div class="desktopRegister">
      <div class= "registerContainer">
        <div class="lbl-moda">
        <label for="btn-moda"><strong>X</strong></label>
        </div>
        <div class= "registerForm">
          <input type="text" id="userRegister" class="userRegister" placeholder="Usuário">
          <input type="email" id="registerEmail" class="registerEmail" placeholder="e-mail">
          <input type="password" id="registerPassword" class="registerPassword" placeholder="Senha">
          <a href="#/"><button class="btnRegister" id="btnRegister">...</button></a>
        </div>
      </div>
    </div>
    `;
  resgisterSection.innerHTML = register;
  containerRoot.appendChild(registerSection);
  document.getElementById('btnRegister').addEventListener('click', () => {
    const newEmail = document.getElementById('registerEmail').value;
    const newPass = document.getElementById('registerPassword').value;
    const newName = document.getElementById('userRegister').value;
    createUser(newEmail, newPass, newName);
  });
  return registerSection;
};*/