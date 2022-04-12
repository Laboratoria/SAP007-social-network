export default () => {
  const container = document.createElement("div");

  const template = `
  <h1>Faça seu login<h1>
  <label>e-mail</label>
  <input type="email" id="email" class="email">
  <label>senha</label>
  <input type="password" id="password" class="password">
  
  <button  class="btn-login" id="btn-login">Entrar</button>

  <p><a href="#register">Cadastre-se aqui</a></p>

  `;

  container.innerHTML = template;

  return container
}













/*import {registerPage} from './register.js';

export const loginPage = () => {
    const containerRoot = document.getElementById('root');
    const loginSection = document.createElement('section');
    loginSection.className = 'loginSection';
    const login = `  
      </div>
      <div class= "sectionLogin">
        <div class= "loginForm">
          <input type="email" id="loginEmail" class="loginEmail" placeholder="E-mail">
          <input type="password" id="loginPassword" class="loginPassword" placeholder="Senha">
          <button  class="btnLogin" id="btnLogin"> Iniciar sessão</button>
        </div>
        <div class="loginOption">
          <p>Iniciar sessão com</p>
          <img src="./images/google.png" id="googleLogo" class="googleLogo">
          <div class="userReg">
          Não tem conta?  
           <label for="btn-moda" class="lbl-moda">
           <strong>Registre-se!</strong>  
           </label>
           </div>
        </div>
      </div>
      `
}*/