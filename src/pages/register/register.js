export const register = () => {
  const registerCreate = document.createElement('div');
  const templateRegister = `
  <main class="home-container">
  <form id="registerForm" class="registerForm">
    <h2 class="subtitle">Cadastrar</h2>
    <input
    class="inputNames"
    type="text"
    id="registerName"
    placeholder="Digite seu nome. Ex:'Laura Silva' " autocomplet
    required
  />
    <input
      class="inputNames"
      type="text"
      id="registerEmail"
      placeholder="Digite um e-mail" autocomplet
      required
    />
    <input
    class="inputNames"
    type="password"
    id="registerPassword"
    placeholder="Digite uma senha"
    required
  />
  <div class="button-container loginEnter">
      <button id="registerEnter" class="button registerButton" type="submit" role="link">
        Cadastrar
      </button>
      </div>
      <div class="social-media registerButton">
      <p>Ou cadastre-se com o Google</p>
      <button class="buttonGoogle" type="button" id="buttonGoogle">
      <img class="buttonGoogleImg" src="img/icone-google.png" alt="Imagen logo de Google" />
      </button>
      </div>
    </form>
    <div class="social-media">
    </div>
    <div class="backContainer">
    <a href="#home" class="backHome">Voltar a tela inicial</a>
    </div>
  </main>    
    `;

  registerCreate.innerHTML = templateRegister;
  return registerCreate;
};
