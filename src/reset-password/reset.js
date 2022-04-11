import { resetPassword } from '../firebase/auth-firebase.js';

export const reset = () => {
  const resetCreate = document.createElement('div');
  const container = `
        <h2 class="subtitle">Esqueci a senha</h2>
    <section class="resetSection-background-opacity">
      <h4 class="reset-text">Insira seu e-mail abaixo para receber o link de redefinição de senha</h4>
      <div class="reset-input">
        <input type="email" id="email" class="reset-input-layout inputNames" placeholder="Email">
      </div>
      <div class="container-btn">
        <button id="btn-reset" class="button-reset button">Enviar</button>
      </div>
    </section>
    `;

  resetCreate.innerHTML = container;

  const btnReset = resetCreate.querySelector('#btn-reset');

  btnReset.addEventListener('click', () => {
    const email = resetCreate.querySelector('#email');
    resetPassword(email.value);
  });

  return resetCreate;
};
