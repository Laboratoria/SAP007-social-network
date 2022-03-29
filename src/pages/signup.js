export default () => {
  const areaSingUp = document.createElement("div");
  areaSingUp.classList.add('signUp');
  areaSingUp.innerHTML = `
    <div id="main-signUp" class="main-signUp">
     <img src="../img/logo.png" alt="Logo Laboriam" class="logotipo">
     <h2>Cadastro</h2>
      <form class="formSigner">
        <input type="email" placeholder="Endereço de e-mail" id="inputEmail">
        <input type="text" placeholder="Nome completo" id="inputName">
        <input type="text" placeholder="Nome de usuário" id="inputLastName">
        <input type="password" placeholder="Senha" id="inputPassword">
        <p id="mensagemErro"></p>
        <button type="submit" id="buttonRegister" class="buttonRegister">   
        <a href="/#feed"> Cadastre-se </a> 
        </button>
      </form>
        <div class="buttons">
          <div></div>
          <p> OU </p>
          <div></div>
        <button class="google" id="google">
            <img src="../img/icon-google.png" alt="" class="iconGoogle">
        </button>
        <button class="facebook">
            <img src="../img/icon-facebook.png" alt="" class="iconFacebook">
        </button>
        <button class="github">
            <img src="../img/icon-github.png" alt="" class="iconGithub">
        </button>
        </div>
        <div>
          <p class="irParaAConta">Tem uma conta? <a href="/#login">Conecte-se</a></p>
        </div>
        <div class="devs">
            <p><img src="../img/copyright.png" alt="" class="copyright"> Desenvolvido por:</p>
            <p>Cássia Costa, Dayane Rodrigues e Viviane Soares</p>
        </div>
    </div>
`;

  const btnCadastro = areaSingUp.querySelector("#buttonRegister");
  const email = areaSingUp.querySelector("#inputEmail");
  const password = areaSingUp.querySelector("#inputPassword");
  const completeName = areaSingUp.querySelector("#inputName");
  const userName = areaSingUp.querySelector("#inputLastName");

  return areaSingUp;
};
