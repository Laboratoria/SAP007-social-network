export default () => {
  const areaLogin = document.createElement('div');
  const formLogin = `
  <div class="main-login">
    <h2>Login</h2>
    <form method="post">
      <input type="email" placeholder="E-mail">
      <br>
      <input type="password" placeholder="Senha">
      <br>
      <button type="submit" id="btnEntrar">
        <a href="/#feed">Entrar</a>
      </button>
    </form>
    <hr>
    <button>Entrar com o Google</button>
    <button>Entrar com o Facebook</button>
    <button>Entrar com o GitHub</button>
    <hr>
    <button>
      <a href="/#singUp">Criar conta</a>
    </button>
  </div>
`;
  areaLogin.innerHTML = formLogin;
  return areaLogin;
};
