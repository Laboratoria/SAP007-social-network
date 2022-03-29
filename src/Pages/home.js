export default () => {
  const container = document.createElement("div");
  const templateHome = `
  <img class="banner"src="./img/banner1.jpg">
  <p class="wellcome"> Bem vindo(a) viajante!! </p>
  <form action="#" id="sign-in-form" class="sign-in-form form">
  <input class= "inputs" type="email" placeholder="Email" id="email" />
  <input class= "inputs" type="password" placeholder="Senha" id="password"/>
  </form>
  <input class="btnEnter" type="submit" value="Entrar" id="entrar"/>
  <p class="enterByGoogle">Ou entre com o Google</p>
  <img class="logoGoogle" src="#" alt="logo Google">
  <p class="welcome"> Ainda não tem cadastro?
  <a href="#" id='sign-up-google'class="link">Registre-se</a></p>
   `;
  container.innerHTML = templateHome;
  return container;
};
