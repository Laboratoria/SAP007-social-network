import "../../lib/config-firebase.js";
//import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
  const containerLogin = document.createElement('div')

  const templateLogin = `
    <p class="paragrafoLogin">Login</p>
    <input type="email" id="inputEmail" placeholder="Insira seu Email">
    <input type="password" id="inputSenha" placeholder="Insera sua senha" /><br>
    <a href="" > <p class='reset-password'>Esqueceu ppa sua senha?</p></a><br>
    <br><button type="submit" id="btnEntrar">Entrar</button><br>
    <button class="btn-google">Entrar com o Google
    </button><br>
  `;
  containerLogin.innerHTML = templateLogin;

  //const loginEmail = templateLogin.querySelector("#inputEmail");
  //const loginSenha = templateLogin.querySelector("#inputSenha");
  //const btnEntrar = templateLogin.querySelector("#btnEntrar");
  //const auth = getAuth();

return containerLogin;
}