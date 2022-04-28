import "../../lib/config-firebase.js";

export default () => {
    const containerHome = document.createElement('div')

    const templateHome = `
      <form>
      <p class="paragrafoLogin">WELCOME TO 7 ALÉM</p>
      <p>Sua rede de teorias da conspiração</p>
      <p>Feita para compartilhar histórias e visão sobre com muito respeito e receptividade!</p>
    <br><a href="/#register">Criar conta</a><br>
    <p> Já tem conta? <a href="/#login">Entrar</a>
    </form>
    `;

    containerHome.innerHTML = templateHome;

    return containerHome;
}