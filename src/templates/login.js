export default function login() {
  const container = document.createElement("div");
  container.classList.add("login-page")

  container.innerHTML = `
    <div class="main">
        <div class="left">
            <h1>nome da rede<br>A primeira rede social brasileira para colecionadores de HQ's!</h1>
            <img src="images/bookreading.svg" alt="menina lendo um livro">
        </div>
        <div class="right">
            <div class="card-login">
                <h2>LOGIN</h2>
                <div class="textfield">
                    <label for="usuario">E-mail</label>
                    <input type="text" name="e-mail" placeholder="e-mail" id="inputEmail">
                </div>  
                <div class="textfield">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha">
                </div>     
                <button class="botaologin">ENTRAR</button>
                <button id="register">Faça seu cadastro</button>             
            </div>
            <a href="home.js">postar</a>
        </div>     
    </div>
  `;

  const registerButton = container.querySelector("#register");
  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "register";
  });

  return container;
}


function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("inputEmail").innerHTML="E-mail válido";
  alert("email valido");
  }
  else{
  document.getElementById("inputEmail").innerHTML="<font color='red'>Email inválido </font>";
  alert("E-mail invalido");
  }
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