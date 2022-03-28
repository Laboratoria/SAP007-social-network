export default () => {
  const container = document.createElement("div");

  const templateHome = `
  <p class="wellcome"> Bem vindo(a) viajante!! </p>
  <form action="#" id="sign-in-form" class="sign-in-form form">
  <input type="email" placeholder="E-mail" id="email" />
  <input class= "inputs" type="password" placeholder="Senha" id="password"/>
  </form>
  <input class="btnEnter" type="submit" value="Entrar" id="entrar"/>
  <p class="enterByGoogle">Ou entre com o Google</p>
  <p class="wellcome"> Ainda não tem cadastro ?</p>
  <a href="#" id='sign-up-google'class="social-icon"> Registra-se!</a>

   `;
  container.innerHTML = templateHome;

  return container;
};
