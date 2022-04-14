import '../firebase/firebase.js';
import { resetPassword } from '../firebase/auth-firebase.js';


export const reset = () => {
  const resetCreate = document.createElement('div');
  const container = `
  
        <h2 class="subtitle">Esqueci a senha</h2>
    <section class="resetSection-background-opacity">
    <h3 class="text-h3">Uma nova senha será enviada 
      ao seu email de cadastro</h3><br>
    </div>
    <div class="campo-form">
    <label for="emailUsuario">Email:</label>
      <div class="reset-input">
        <input type="email" id="email" class="reset-input-layout inputNames" placeholder="Digite  o seu email">
      </div>
      <div id="botao-recuperar">
      <div class="container-btn">
        <button id="btn-reset" class="button-reset button">Enviar</button>
      </div>
      </div>
      <p id="feedback"></p>
    </section>
    `;



  resetCreate.innerHTML = container;
  // const registerEmail = resetCreate.querySelector('#btn-recover');
  const inputEmail = resetCreate.querySelector('#email');
  // const btnBackRecover = resetCreate.querySelector('#btn-back-recover');
  const feedback = resetCreate.querySelector('#feedback');

  const btnLinkRecover = resetCreate.querySelector('#btn-reset');
  console.log(btnLinkRecover);

  // BOTÃO DE ENVIAR RECUPERAÇÃO DE SENHA

  // const email = resetPassword.querySelector('.resetPassword');
  // resetPassword.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   if (email.value && email.value) {
  //     userLogin(email.value, .value)
  //       .then(() => {
  //         window.location.hash = '#timeline';
  //       })
  //       .catch((error) => {
  //           if (error.code === 'auth/wrong-password') {
  //             msgErro.innerHTML = 'Email enviado';
   btnLinkRecover.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    console.log(email)
    resetPassword(email)
      .then(() => {
        console.log("E-mail para redefinição de senha enviado")
        feedback.innerHTML="E-mail para redefinição de senha enviado"
        // error('E-mail para redefinição de senha enviado');
        // navigateTo('/');
      })

    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/invalid-email':
          feedback.innerHTML='Email inválido';

          break;
        case 'auth/user-not-found':
          feedback.innerHTML='Não será possível recuperar sua senha.';
          break;
        default:
          feedback.innerHTML='Não será possível recuperar sua senha.';
      }
    });
    const errorMessage = error.message;
    return errorMessage;
  });
  return resetCreate;


  
};
