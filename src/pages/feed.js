export default () => {
    const feedArea = document.createElement('div');
    const toBePostArea = `
    <div class="toBePost">
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
    feedArea.innerHTML = toBePostArea;
    return feedArea;
  };