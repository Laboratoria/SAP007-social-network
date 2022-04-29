import "../../lib/config-firebase.js";
import { loginGoogle } from "../../lib/auth-firebase.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
  const containerLogin = document.createElement('div')

  const templateLogin = `
      <p class="paragrafoLogin">Login</p>
      <input type="email" id="inputEmail" placeholder="Insira seu Email" /><br>
      <input type="password" id="inputSenha" placeholder="Insera sua senha" /><br>
      <a href="" > <p class='reset-password'>Esqueceu ppa sua senha?</p></a><br>
      <br><button type="submit" id="btn-Entrar">Entrar</button><br>
      <button class="btn-google" id="buttonGoogle">Entrar com o Google
      </button><br>
       <p id="message" class="successMessage errorMessage"></p>
    `;
  containerLogin.innerHTML = templateLogin;

  const loginButtonGoogle = containerLogin.querySelector("#buttonGoogle");
  const loginEmail = containerLogin.querySelector("#inputEmail");
  const loginSenha = containerLogin.querySelector("#inputSenha");
  const btnEntrar = containerLogin.querySelector("#btn-Entrar");
  const messageSuccess = containerLogin.querySelector(".successMessage");
  const messageError = containerLogin.querySelector('.errorMessage');
  const auth = getAuth();

  loginButtonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    loginGoogle().then((result) => {
      messageSuccess.innerHTML = "Login google feito com sucesso!";
      //window.location.hash = "#feed"; //substituir mensagem quando criar pagina de timeline com posts 
    })
      .catch((error) => {
        messageError.innerHTML = "Login não deu certo, tente novamente!";
      });
  });

   btnEntrar.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginEmail.value) {
      signInWithEmailAndPassword(auth, loginEmail.value, loginSenha.value)
        .then(() => {
          messageSuccess.innerHTML = "Login google feito com sucesso!";
          //window.location.hash = "#feed"; //substituir mensagem quando criar pagina de timeline com posts 
        })
        .catch((error) => {
          messageError.innerHTML = "Login não deu certo, tente novamente!";
        })

    }
   })

 return containerLogin;
}

