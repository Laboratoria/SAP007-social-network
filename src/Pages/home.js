export default () => {
  const container = document.createElement("div");
  const templateHome = `
  <p class="wellcome"> Bem vindo(a) viajante!! </p>
  <form action="#" id="sign-in-form" class="sign-in-form form">
  <input type="email" placeholder="Email" id="email" />
  <input class= "inputs" type="password" placeholder="Senha" id="password"/>
  </form>
  <input class="btnEnter" type="submit" value="Entrar" id="entrar"/>
  <p class="enterByGoogle">Ou entre com o Google</p>
  <p class="wellcome"> Ainda não tem cadastro?
  <a href="#" id='sign-up-google'class="social-icon">Registre-se</a></p>
   `;
  container.innerHTML = templateHome;
  return container;
};
