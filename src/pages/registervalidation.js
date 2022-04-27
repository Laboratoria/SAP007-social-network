/* eslint-disable max-len */
/* import { validateEmail } from '../loginvalidation.js';

export default () => {
  const register = document.createElement('div');
  register.innerHTML = `
    <div class="login-container">
        <form class="login-form">
            <label class="login-text">Nome</label>
            <input class="text-input" type="text" id="user-name" required>

            <label class="login-text">E-mail</label>
            <input class="text-input" type="email" id="register-email" required onchange="onChangeEmail()">
            <span class="error-message" id="email-required-error">Por favor, digite seu e-mail</span>
            <span class="error-message" id="email-invalid-error">E-mail inválido</span>

            <label class="login-text">Senha</label>
            <input class="text-input" type="password" id="register-password" required onchange="onChangePassword()">
            <span class="error-message" id="password-required-error">Por favor, digite sua senha</span>
            <span class="error-message" id="password-length-error">A senha deve conter no mínimo 6 caracteres</span>

            <label class="login-text">Confirmar senha</label>
            <input class="text-input" type="password" id="confirm-password" required onchange="onChangeConfirmPassword()">
            <span class="error-message" id="password-match-error">Senha e Confirmar devem ser iguais</span>

            <button class="btn-login" type="submit" id="register-button" disabled="true"><a href="#feed">Cadastrar</a></button>
            <p class="login-text">Já tem uma conta?<a href="#login"> Faça login</a></p>
        </form>
      </div>
      `;

  const registerEmail = register.querySelector('#register-email');
  const registerPassword = register.querySelector('#register-password');
  const registerButton = register.querySelector('#register-button');
  const registerEmailValue = registerEmail.value;
  const registerPasswordValue = registerPassword.value;
  const confirmPasswordValue = register.getelementById('confirm-password').value;
  const errorEmptyEmailReg = register.getElementById('email-required-error');
  const errorInvalidEmailReg = register.getElementById('email-invalid-error');
  const errorEmptyPasswordReg = register.getElementById('password-required-error');
  const errorPasswordLength = register.getElementById('password-length-error');
  const errorPasswordMatch = register.getElementById('password-match-error');

  function isFormValid() {
    if (!registerEmailValue || !validateEmail(registerEmailValue)) {
      return false;
    }
    if (!registerPasswordValue || registerEmailValue.length < 6) {
      return false;
    }
    if (registerEmailValue !== confirmPasswordValue) {
      return false;
    }
    return true;
  }
  function toggleRegisterBtnDisabled() {
    registerButton.disabled = !isFormValid();
  }
  function onChangeEmail() {
    errorEmptyEmailReg.style.display = registerEmail ? 'none' : 'block';
    errorInvalidEmailReg.style.display = (validateEmail(registerEmailValue)) ? 'none' : 'block';
    toggleRegisterBtnDisabled();
  }
  function validatePasswordMatch() {
    errorPasswordMatch.style.display = registerPasswordValue === confirmPasswordValue ? 'none' : 'block';
  }
  function onChangePassword() {
    errorEmptyPasswordReg.style.display = registerPassword ? 'none' : 'block';
    errorPasswordLength.style.display = registerPassword.length >= 6 ? 'none' : 'block';
    validatePasswordMatch();
    toggleRegisterBtnDisabled();
  }
  function onChangeConfirmPassword() {
    validatePasswordMatch();
    toggleRegisterBtnDisabled();
  }

  return register;
}; */
