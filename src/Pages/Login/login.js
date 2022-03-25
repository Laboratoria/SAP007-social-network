export default () => {
  const container = document.createElement("div");
  
  const templateLogin = `
    <img class="logo-site" src="img/logo-eu-poesia.jpeg">
    <a href="#login">Login</a>
    <a href="#register">Registre-se</a>

    <form>
      <input type="email" id="input-email" class="input-email">
      <input type="password" id="input-password" class="input-password">
      <input type="checkbox" id="remember-password" class="remember-password">
      <label for="remember-password">Lembrar senha</label>
      <a href="#forgot-password">Esqueci a senha</a>
      <button type="button" id="button-login">Login</button>
    </form>
    `;
  
  container.innerHTML = templateLogin;

  return container;
  }
  
  /*entre form e footer
  <section class="google">
    <p class="connect-google">Ou conecte-se com</p>
    <a href="#login-google">img botao google</a>
    </section>
  */  

  /*  <footer>
    <p class="footer-text">
      Desenvolvido por Beatriz de Sousa Carvalho, Maria Luiza Costa Santana e Raele Pereira
    </p>
  </footer>*/