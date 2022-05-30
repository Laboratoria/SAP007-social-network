export default () => {
  const containerHome = document.createElement('div');

    const templateHome = `
      <form class="conteudoComeço">
      <img src="pages/home/logo.png" alt="Logo">
      <p class="boasVindas">WELCOME TO 7 ALÉM</p>
      <p class="mensagem">Sua rede de teorias da conspiração<br>
      Feita para compartilhar histórias e visão sobre...<br>
       com muito respeito e receptividade!</p>
      <br>
      <section class="criar-entrar">
      <a href="#register">Criar conta</a>
      <br>
      <p> Já tem conta?
      <a href="#login">Entrar</a></p>
      <section>
      </form>
    `;

  containerHome.innerHTML = templateHome;
  return containerHome;

};
