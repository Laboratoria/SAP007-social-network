export default () => {
  const areaSingUp = document.createElement('div');
  areaSingUp.innerHTML = `
    <div id="main-singUp">
      <h1>Rede Social</h1>
      <form>
        <p>Conecte-se para ver publicações da comunidade.</p>
        <div>
          <button id="google">Entrar com o Google</button>
          <!-- <button>Entrar com o Facebook</button>
          <button>Entrar com o GitHub</button> -->
        </div>
        <div></div>
        <p>OU</p>
        <div></div>
        <input type="email" placeholder="Endereço de e-mail" id="inputEmail">
        <input type="text" placeholder="Nome completo" id="inputName">
        <input type="text" placeholder="Nome de usuário" id="inputLastName">
        <input type="password" placeholder="Senha" id="inputPassword">
        <p id="mensagemErro"></p>
        <button type="submit" id="buttonRegister">Cadastre-se</button>
      </form>
        <div>
          <p>Tem uma conta? <a href="/#login">Conecte-se</a></p>
        </div>
    </div>
`;

  return areaSingUp;
};
