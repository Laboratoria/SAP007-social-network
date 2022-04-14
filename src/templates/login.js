export default function login() {
  const teste = document.createElement("div");
  teste.classList.add("login-page")

  teste.innerHTML = `
  <section>
  <h1 class="title">Faça seu login<h1>
  <label>e-mail</label>
  <input type="email" id="emailLogin" class="email">
  <label>senha</label>
  <input type="password" id="passwordLogin" class="password">
  
  <button  class="btn-login" id="btn-login">Entrar</button>

  <button id="register">Cadastre-se aqui</button>
 </section>
  `;

  const registerButton = teste.querySelector("#register");
  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "register";
  });

  return teste;
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