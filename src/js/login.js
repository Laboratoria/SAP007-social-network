const login = document.getElementById('main-login');

login.innerHTML = `
  <div class="main-login">
    <h2>Login</h2>
    <form method="post">
      <input type="email" placeholder="E-mail">
      <br>
      <input type="password" placeholder="Senha">
      <br>
      <input type="submit" value="Entrar">
    </form>
    <hr>
    <button>Entrar com o Google</button>
  </div>
`;
