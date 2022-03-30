export default () => {
  const areaLogin = document.createElement('div');
  areaLogin.classList.add('login');
  areaLogin.innerHTML = `
  <div class="main-login">
    <img src="../img/logo.png" alt="Logo Laboriam" class="logo">
    <h2>Login</h2>
    <form method="post" class="formLogin">
      <input type="email" placeholder="E-mail">
      <p class="mensagemErro">Email inválido!</p>
      <input type="password" placeholder="Senha">
      <p class="mensagemErro">Senha inválida!</p>
      <button type="submit" id="btnEntrar" class="btnEntrar">
        <a href="/#feed">Entrar</a>
      </button>
    </form>
    <a href="" class="recoverPassword">Esqueceu a senha?</a>
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
    <div class="devs">
      <p><img src="../img/copyright.png" alt="" class="copyright"> Desenvolvido por:</p>
      <p>Cássia Costa, Dayane Rodrigues e Viviane Soares</p>
    </div>
  </div>
`;
  return areaLogin;
};
