import '../firebase/firebase.js';
import { resetPassword } from '../firebase/auth-firebase.js';

export const reset = () => {
  const resetCreate = document.createElement('div');
  resetCreate.setAttribute('class', 'container');
  const templateReset = `
  
        <h2 class="subtitle">Esqueci a senha</h2>
    <section class="resetSection-background-opacity">
    <h3 class="text-h3">Uma nova senha será enviada 
      ao seu email de cadastro</h3><br>
    </div>
    <form class="campo-form">
    <label for="emailUsuario">Email:</label>
      <div class="reset-input">
        <input type="email" id="email" class="reset-input-layout inputNames" placeholder="Digite  o seu email" required>
      </div>
      <div id="botao-recuperar">
      <div class="container-btn">
        <button id="btn-reset" class="button-reset button">Enviar</button>
      </div>
      </form>
      <p id="feedback"></p>
    </section>
    `;

  resetCreate.innerHTML = templateReset;
  // const registerEmail = resetCreate.querySelector('#btn-recover');
  const inputEmail = resetCreate.querySelector('#email');
  // const btnBackRecover = resetCreate.querySelector('#btn-back-recover');
  const feedback = resetCreate.querySelector('#feedback');

  const btnLinkRecover = resetCreate.querySelector('#btn-reset');
  console.log(btnLinkRecover);

  btnLinkRecover.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    console.log(email);
    resetPassword(email)
      .then(() => {
        feedback.classList.add('feedback-send');
        feedback.innerHTML = 'E-mail para redefinição de senha enviado';
      }).catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/invalid-email':
            feedback.innerHTML = 'Email inválido';
            break;
          case 'auth/user-not-found':
            feedback.innerHTML = 'Não será possível recuperar sua senha.';
            break;
          default:
            feedback.innerHTML = 'Não será possível recuperar sua senha.';
        }
      });
  });
  return resetCreate;
};
