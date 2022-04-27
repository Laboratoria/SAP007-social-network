import { createUser } from '../lib/auth.js';

export default () => {
  const register = document.createElement('div');
  register.innerHTML = `
  <div class="login-container">
      <form class="login-form">
          <label class="login-text">Nome</label>
          <input class="text-input" type="text" id="user-name" required>
    
          <label class="login-text">E-mail</label>
          <input class="text-input" type="email" id="register-email" required>
    
          <label class="login-text">Senha</label>
          <input class="text-input" type="password" id="register-password" required>
    
          <label class="login-text">Confirmar senha</label>
          <input class="text-input" type="password" id="register-password" required>
          
          <button class="btn-login" type="submit" id="register-button"><a href="#feed">Cadastrar</a></button>
          <p class="login-text">Já tem uma conta?<a href="#login"> Faça login</a></p>
      </form>
    </div>
    `;

  const registerEmail = register.querySelector('#register-email');
  const registerPassword = register.querySelector('#register-password');
  const buttonRegister = register.querySelector('#register-button');

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    createUser(registerEmail.value, registerPassword.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('iihhhhh não funcionou mané! Tenta de novo!');
        return errorMessage;
      });
  });
  return register;
};
