export default () => {
  const areaSignUp = document.createElement("div");
  areaSignUp.classList.add('signup');
  areaSignUp.innerHTML = `
  <div class="content">
    <div id="main-signUp" class="main-signUp">
      <img src="../img/logo.png" alt="Logo Laboriam" class="logo">
      <form>
        <h2>Cadastro</h2>
        <input type="email" placeholder="Endereço de e-mail" id="inputEmail">
        <input type="text" placeholder="Nome completo" id="inputName">
        <input type="password" placeholder="Senha" id="inputPassword">
        <p id="mensagemErro"></p>
        <button type="submit" id="buttonRegister" class="buttonRegister">   
          <a href="/#feed"> Cadastre-se </a> 
        </button>
      </form>
      <div class="alternativaLogin">
        <div></div>
        <p>OU</p>
        <div></div>
      </div>
      <div class="buttons">
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
      <p class="irParaAConta">Tem uma conta? <a href="/#login">Conecte-se</a></p>
    </div>
    <img src="../img/laboriam-phone.png" alt="Logo Laboriam" class="imgPhones">
  </div>
  <footer class="devs">
    <p>Copyright &copy Desenvolvido por:</p>
    <p>Cássia Costa, Dayane Rodrigues e Viviane Soares</p>
  </footer>
`;

  const btnCadastro = areaSignUp.querySelector("#buttonRegister");
  const email = areaSignUp.querySelector("#inputEmail");
  const password = areaSignUp.querySelector("#inputPassword");
  const completeName = areaSignUp.querySelector("#inputName");
  const userName = areaSignUp.querySelector("#inputLastName");

  return areaSignUp;
};
