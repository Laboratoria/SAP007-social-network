import { loginGoogle, userLogin } from '../../lib/auth-firebase.js';

export default () => {
  const containerLogin = document.createElement('div');

  const templateLogin = `
      <form class="containerLog">
      <p class="paragraphLogin">Entrar</p>
      <input type="email" class="input Email" id="inputEmail" placeholder="Insira seu Email" /><br>
      <input type="password"class="input Senha" id="inputSenha" placeholder="Insira sua senha" /><br>
      <a href="" > <p class='reset-password'>Esqueceu sua senha?</p></a><br>
      <p id="message" class="successMessage menssage"></p>
      <br><button class="btn Login" id="btnLogin">Entrar</button><br>
      <button class="btn google" id="buttonGoogle">Entrar com o Google</button>
      <p> Não tem conta?
      <a href="#register">Criar</a></p><br>
      </form>
       
    `;
  containerLogin.innerHTML = templateLogin;

  const loginButtonGoogle = containerLogin.querySelector('#buttonGoogle');
  const loginEmail = containerLogin.querySelector('#inputEmail');
  const loginSenha = containerLogin.querySelector('#inputSenha');
  const btnLogin = containerLogin.querySelector('#btnLogin');
  const msgAlert = containerLogin.querySelector('#message');

  loginButtonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch(() => {
        msgAlert.innerHTML = 'Login não deu certo, tente novamente!';
      });
  });

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginEmail.value) {
      userLogin(loginEmail.value, loginSenha.value)
        .then(() => {
          window.location.hash = '#feed';
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
  });

  return containerLogin;
};
