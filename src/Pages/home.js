export default () => {
  const container = document.createElement("div");
  const templateHome = `
  <div class= main.container>
  <img class="banner"src="./img/banner1.jpg">
  <p class="wellcome"> Bem vindo(a) viajante!! </p>
    <form action="#" id="sign-in-form" class="sign-in-form">
      <input class= "inputs" type="email" placeholder="Email" id="email" />
      <input class= "inputs" type="password" placeholder="Senha" id="password"/>
    </form>
      <input class="btnEnter" type="submit" value="Entrar" id="entrar"/>
  <p class="enterByGoogle">Ou entre com o Google</p>
  <a href="/">
  <img  class="logoGoogle" src="./img/google.png" alt="logo Google">
  </a>
  <p class="welcome"> Ainda não tem cadastro?
  <a href="#" id='sign-up-google'class="link">Registre-se</a></p>
  </div>
  `;
  container.innerHTML = templateHome;
  return container;
};
