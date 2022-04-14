import '../firebase/firebase.js';
import { resetPassword } from '../firebase/auth-firebase.js';


export const reset = () => {
  const resetCreate = document.createElement('div');
  const container = `
        <h2 class="subtitle">Esqueci a senha</h2>
    <section class="resetSection-background-opacity">
      <h4 class="reset-text">Recuperar senha</h4>
      <div class="reset-input">
        <input type="email" id="email" class="reset-input-layout inputNames" placeholder="Email">
      </div>
      <div class="container-btn">
        <button id="btn-reset" class="button-reset button">Enviar</button>
      </div>
    </section>
    `;

  resetCreate.innerHTML = container;
  // const registerEmail = resetCreate.querySelector('#btn-recover');
   const inputEmail = resetCreate.querySelector('#email');
  // const btnBackRecover = resetCreate.querySelector('#btn-back-recover');
  const btnLinkRecover = resetCreate.querySelector('#btn-reset');
  console.log(btnLinkRecover);

  // BOTÃO DE ENVIAR RECUPERAÇÃO DE SENHA


  btnLinkRecover.addEventListener('click', (e) => {
    e.preventDefault();
     inputEmail.value;
    resetPassword(email)
    .then(() => {
      error('E-mail para redefinição de senha enviado');
      navigateTo('/');
    })
      .catch((erro) => {
        const errorCode = erro.code;
        switch (errorCode) {
          case 'auth/invalid-email':
            erro('Email inválido');
            break;
          case 'auth/user-not-found':
            erro('Opsss!suário não encontrado');
            break;
          default:
            erro('Não será possível recuperar sua senha.');
        }
      });
  });





  return resetCreate;
};

