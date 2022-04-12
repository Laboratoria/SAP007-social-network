export default () => {
  const container = document.createElement("div");
  //container.classList.add("register-page")

  container.className = "register-page"

  const template = `
  <h1>Faça seu cadastro<h1>
  <label>Nome e sobrenome</label>
  <input type="text" id="name" class="name">
  <label>Usuário</label>
  <input type="text" id="user" class="user">
  <label>e-mail</label>
  <input type="email" id="email" class="email">
  <label>Crie uma senha</label>
  <input type="password" id="password" class="password">
  
  <button  class="btn-register" id="btn-register">Enviar</button>

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