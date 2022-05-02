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
      <p id="message" class="successMessage menssage"></p>
      <br><button type="submit" id="btn-Entrar">Entrar</button><br>
      <button class="btn-google" id="buttonGoogle">Entrar com o Google
      </button><br>
       
    `;
  containerLogin.innerHTML = templateLogin;

  const loginButtonGoogle = containerLogin.querySelector("#buttonGoogle");
  const loginEmail = containerLogin.querySelector("#inputEmail");
  const loginSenha = containerLogin.querySelector("#inputSenha");
  const btnEntrar = containerLogin.querySelector("#btn-Entrar");
  const msgAlert = containerLogin.querySelector('#message');
  const auth = getAuth();

  loginButtonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    loginGoogle().then((result) => {
      msgAlert.innerHTML = "Login google feito com sucesso!";
      //window.location.hash = "#feed"; //substituir mensagem quando criar pagina de timeline com posts 
    })
      .catch((error) => {
        msgAlert.innerHTML = "Login não deu certo, tente novamente!";
      });
  });

   btnEntrar.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginEmail.value) {
      signInWithEmailAndPassword(auth, loginEmail.value, loginSenha.value)
        .then(() => {
          msgAlert.innerHTML = "Login google feito com sucesso!";
          //window.location.hash = "#feed"; //substituir mensagem quando criar pagina de timeline com posts 
        })
        .catch((error) => {
          const errorCode = error.code;
          let messageError = error.message;

          switch (errorCode) {
            case 'auth/wrong-password':
              messageError = 'Senha errada.';
              msgAlert.innerHTML = messageError;
              break;
            case 'auth/invalid-email':
              messageError = 'Insira um email válido.';
              msgAlert.innerHTML = messageError;
              break; 
            case 'auth/user-not-found':
                messageError = 'Usuário não encontrado.';
                msgAlert.innerHTML = messageError;
              break;
            case 'auth/internal-error':
                messageError = 'Insira a senha.';
                msgAlert.innerHTML = messageError;
              break;
              default:
                messageError = 'Erro desconhecido';
                msgAlert.innerHTML = messageError;      
          }         
        });

    }
   })

 return containerLogin;
}

