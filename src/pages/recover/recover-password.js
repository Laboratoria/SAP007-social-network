import { recoverPassword } from '../login/authentication.js';
// eslint-disable-next-line import/no-cycle
import { errorHandlingGeneral } from '../../components/errorHandling.js';

export const recover = () => {
  const recoverPasswordPage = document.createElement('div');
  recoverPasswordPage.setAttribute('class', 'box-recover-password flex-direction');
  recoverPasswordPage.innerHTML = `
  <section class="header-page-recover">
    <figure class="box-slogan-page-login">
      <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-login">
    </figure>  
  </section>
  <figure class="box-slogan-desktop">
    <img src="./img/imgLogoDesktop.png" alt="Logotype" class="logo-desktop">
  </figure>
  <section class="slogan-desktop">
    <h1>A rede da comunidade K-POP</h1>
  </section>   
  <section class="body-page-recover text-center">
    <h1 class="tittle-page-recover">Esqueci minha senha!</h1>
    <form method="post" class = "form-recover">
      <h2>Uma nova senha será enviada ao seu email de cadastro.</h2>
        <input type="email" placeholder="seu@email.com" class="login-area font-size" id="email-recover" name="email-area" requered>
        <p class="error" id="input-field"></p>
    </form>
    <section class="btns-recover">
      <a href="#login" class="btn-cancel-recover" id="btn-cancel-recover">Cancelar</a>
      <button type="submit" class="btn-confirm-recover" id="btn-confirm-recover">Confirmar</button>
    </section>
  </section>
  `;

  const emailRecover = recoverPasswordPage.querySelector('#email-recover');
  const btnConfirm = recoverPasswordPage.querySelector('#btn-confirm-recover');
  const inputField = recoverPasswordPage.querySelector('#input-field');

  btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailRecover.value;
    if (!email) {
      inputField.innerHTML = 'Campos obrigatórios';
      inputField.style.display = 'block';
    } else {
      recoverPassword(email).then(() => {
        const modalConfirm = document.createElement('div');
        modalConfirm.setAttribute('class', 'modal-confirm-recover');
        modalConfirm.innerHTML = `
      <div class="modal-confirm-recover">
        <h3>O email para a redefinição de senha foi enviado, verifique sua caixa de entrada!</h3>
        <a href="#login" class="btn-modal-confirm" id="btn-modal-confirm">OK</a>
      </div>
      `;
        recoverPasswordPage.appendChild(modalConfirm);
      }).catch((error) => {
        const modalError = document.createElement('div');
        modalError.setAttribute('class', 'modal-error-recover');
        modalError.innerHTML = `
      <div class="modal-confirm-recover">
        <h3 class="error-recover"></h3>
        <a href="#recover" class="btn-modal-error" id="btn-modal-confirm">Tente novamente</a>
      </div>
      `;
        recoverPasswordPage.appendChild(modalError);
        const userError = recoverPasswordPage.querySelector('.error-recover');
        userError.innerHTML = errorHandlingGeneral(error);
        userError.style.display = 'block';
      });
    }
  });
  return recoverPasswordPage;
};
