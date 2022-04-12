// importar funções de autenticação do Firebase a partir da parta 'services'

export default function login() {
  // eslint-disable-next-line no-shadow
  const login = document.createElement('div');
  login.innerHTML = `
  <div class="login-container">
  <form class="login-form">
      <label for="" class="labels-input">Email</label>
      <input class="text-input" type="email" name="" id="email-login-input" required>

      <label for="" class="labels-input">Senha</label>
      <input class="text-input" type="password" name="" id="password-login-input" required>

      <button class="btn-login" type="submit" id="btn-submit-login"><a href="#feed">Entrar</a></button>
    
      <div class="container-btn-login">
      <p class="login-text">Faça login através do Google:</p>
      <button class="btn-login-google" type="submit" id="google-login"><a herf=" ">Entrar com Google</a></button>
      
      <p class="login-text">Ainda não possui uma conta? <a href="#cadastro">Cadastre-se</a></p>
    </div>
  </form>
  </div>
    `;

  const email = login.querySelector('#email-login-input');
  const password = login.querySelector('#password-login-input');
  const btnSubmit = login.querySelector('#btn-submit-login');

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // userLogin(email.value, password.value)
    // .then(() => {
    window.location.hash = '#feed';
    // })
    //  .catch((error) => {
    //   const errorMessage = error.message;
    //   alert('Deu errado!');
    //  return errorMessage;
    //   });
  });

  return login;
}
