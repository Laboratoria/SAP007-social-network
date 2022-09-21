export default () => {
  const containerHome = document.createElement('div');

  const templateHome = `
      <form class="homeContainer">
      <img class="imageLogo"src="pages/home/logo.png" alt="Logo">
      <p class="initialMessage">Sua rede de teorias da conspiração<br>
      Feita para compartilhar histórias e visão sobre...<br>
       com muito respeito e receptividade!</p>
      <br>
      <section class="loginHome">
      <a href="/#register">Criar conta</a>
      <br>
      <p> Já tem conta?
      <a href="/#login">Entrar</a></p>
      <section>
      </form>
    `;

  containerHome.innerHTML = templateHome;
  return containerHome;
};
