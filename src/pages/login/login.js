import "../../lib/config-firebase.js";
import { loginGoogle } from "../../lib/auth-firebase.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

export default () => {
  const containerLogin = document.createElement('div')

  const templateLogin = `
      <form class="conteudoLogin">
      <p class="paragrafoLogin">Login</p>
      <input type="email" class="inputEmail" id="inputEmail" placeholder="Insira seu Email" /><br>
      <input type="password"class="inputSenha" id="inputSenha" placeholder="Insira sua senha" /><br>
      <a href="" > <p class='reset-password'>Esqueceu sua senha?</p></a><br>
      <p id="message" class="successMessage menssage"></p>
      <br><button class="btn-entrar" id="btn-Entrar">Entrar</button><br>
      <button class="btn-google" id="buttonGoogle">Entrar com o Google
      </button>
      <p> Não tem conta?
      <a href="/#login">Criar</a></p><br>
      </form>
       
    `;
  containerLogin.innerHTML = templateLogin;

  const loginButtonGoogle = containerLogin.querySelector('#buttonGoogle');
  const loginEmail = containerLogin.querySelector('#inputEmail');
  const loginSenha = containerLogin.querySelector('#inputSenha');
  const btnEntrar = containerLogin.querySelector("#btn-Entrar");
  const msgAlert = containerLogin.querySelector('#message');
  const auth = getAuth();
  
  //const btReset = containerLogin.querySelector('reset-password');   
  //const btnSair = containerLogin.querySelector('#btn-Sair')

  loginButtonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    loginGoogle().then((result) => {
      window.location.hash = "#feed";
       
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
        window.location.hash = "#feed";
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
      })
    }
  })
      /*btnSair.addEventListener('click', (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });*/
        
   /* btReset.addEventListener('click', (e) => {
      e.preventDefault();  
      sendPasswordResetEmail(auth, email)
      .then(() => {
         msgAlert.innerHTML = "E-mail enviado para recurar senha!";
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
        switch (errorCode) {
         case 'auth/invalid-email':
          messageError = 'Insira um email válido.';
          msgAlert.innerHTML = messageError;
          break;
        }
        })    
    })*/       

return containerLogin;
}