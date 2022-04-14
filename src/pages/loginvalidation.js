export default function login() {
  // eslint-disable-next-line no-shadow
  const login = document.createElement('div');
  login.innerHTML = `
    <div class="login-container">
    <form class="login-form">
        <label for="" class="labels-input">Email</label>
        <input class="text-input" type="email" name="" id="email-login-input" required onchange="onChangeEmail()">
        <span class="error-message" id="email-required-error">Por favor, digite seu e-mail</span>
        <span class="error-message" id="email-invalid-error">E-mail inválido</span>

        <label for="" class="labels-input">Senha</label>
        <input class="text-input" type="password" name="" id="password-login-input" required onchange="onChangePassword()">
        <span class="error-message" id="password-required-error">Por favor, digite sua senha</span>

        <button class="btn-login" type="submit" id="btn-submit-login" disabled="true"><a href="#feed">Entrar</a></button>
      
        <div class="container-btn-login">
        <button class="btn-login-google" type="submit" id="google-login"><a herf=" ">Entrar com Google</a></button>
        
        <p class="register-text">Ainda não possui uma conta? <a href="#cadastro">Cadastre-se</a></p>
      </div>
    </form>
    </div>
      `;
  const email = login.querySelector('#email-login-input');
  const password = login.querySelector('#password-login-input');
  const emailValue = email.value;
  const passwordValue = password.value;
  const errorEmptyEmail = login.getElementById('email-required-error');
  const errorInvalidEmail = login.getElementById('email-invalid-error');
  const errorEmptyPassword = login.getElementById('password-required-error');

  function onChangeEmail() {
    toggleButtonsDisabled();
    toggleEmailErrors();
  }
  function onChangePassword() {
    toggleButtonsDisabled();
    togglePasswordErrors();
  }
  function validateEmail() {
    return /\$+@\$+\./.test(emailValue);
  }
  function isEmailValid() {
    if (!emailValue) {
      return false;
    } return validateEmail(emailValue);
  }
  function isPasswordValid() {
    if (!passwordValue) {
      return false;
    } return true;
  }

  function toggleEmailErrors() {
    errorEmptyEmail.style.display = email ? 'none' : 'block';
    errorInvalidEmail.style.display = (validateEmail(emailValue)) ? 'none' : 'block';
  }

  function togglePasswordErrors() {
    errorEmptyPassword.style.display = password ? 'none' : 'block';
  }

  function toggleButtonsDisabled() {
    const validPassword = isPasswordValid();
    login.getElementById('btn-submit-login').disabled = !isEmailValid || !validPassword;
  }

  return login;
}
