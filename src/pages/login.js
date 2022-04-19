import { login, loginGoogle, redefinirSenha } from '../services/authentication.js';

export default () => {
  const areaLogin = document.createElement('div');
  areaLogin.classList.add('login');
  areaLogin.innerHTML = `
  <div class="content">
    <div class="main-login">
      <img src="../img/logo.png" alt="Logo Laboriam" class="logo">
      <form method="post">
        <h2>Login</h2>
        <input type="email" placeholder="E-mail" id="inputEmail">
        <input type="password" placeholder="Senha" id="inputSenha">
        <p id="mensagemErro" class="mensagemErro"></p>
        <button type="submit" id="btnEntrar" class="btnEntrar">
          <a href="/#feed">Entrar</a>
        </button>
      </form>
      <a href="" id="recoverPassword" class="recoverPassword">Esqueceu a senha?</a>
      <div class="buttons">
        <p>Ou entre com:</p>
        <button class="google" id="google">
          <img src="../img/icon-google.png" alt="" class="iconGoogle">
        </button>
        <button class="facebook">
          <img src="../img/icon-facebook.png" alt="" class="iconFacebook">
        </button>
        <button class="github">
          <img src="../img/icon-github.png" alt="" class="iconGithub">
        </button>
      </div>
      <p class="criarConta">Não tem uma conta? <a href="/#signUp">Criar conta</a></p>
    </div>
    <img src="../img/laboriam-phone.png" alt="Logo Laboriam" class="imgPhones">
  </div>
  <footer class="devs">
    <p>Copyright &copy Desenvolvido por:</p>
    <p>Cássia Costa, Dayane Rodrigues e Viviane Soares</p>
  </footer>
`;

  const loginEmail = areaLogin.querySelector('#inputEmail');
  const loginSenha = areaLogin.querySelector('#inputSenha');
  const btnEntrar = areaLogin.querySelector('#btnEntrar');
  const btnGoogle = areaLogin.querySelector('#google');
  const mensagemErro = areaLogin.querySelector('#mensagemErro');
  const btnRedefinirSenha = areaLogin.querySelector('#recoverPassword');

  btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    if (loginEmail.value && loginSenha.value) {
      login(loginEmail.value, loginSenha.value)
      .then(() => {
        window.location.hash = 'feed';
      })
      .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            mensagemErro.innerHTML = ' Senha incorreta!';
          } else if (error.code === 'auth/invalid-email') {
            mensagemErro.innerHTML = ' E-mail incorreto!';
          } else {
            mensagemErro.innerHTML = 'E-mail incorreto ou não cadastrado';
          }
        });
    } else if (loginEmail.valor === '' || loginSenha.value === '') {
      mensagemErro.innerHTML = ' Preencher todos os campos!';
    }
  });

  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle();
  });

  btnRedefinirSenha.addEventListener('click', (e) => {
    e.preventDefault();
    redefinirSenha(loginEmail.value);
    console.log('Entrou na função de redefinir');
  })

  return areaLogin;
};
