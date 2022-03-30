// import { userCreate } from '../login/authentication.js;';

export default () => {
  const createRegister = document.createElement('div');
  const registerForm = `
    <section class="register-container">
    <div class="register-form">
      <form class="">
        <label class="">Nome</label>
        <input class="text-input" type="text" id="user-name">
        <br>
        <label class="">E-mail</label>
        <input class="email-input" type="email" id="register-email">
        <br>
        <label class="">Senha</label>
        <input class="text-input" type="password" id="register-password">
        <br>
       <button class="btn-register" id="register-button">Cadastrar</button>
      </form>
    </div>
  </section>
    `;
  createRegister.innerHTML = registerForm;
  // após criar o registerForm, cria variaveis pra pegar os valores dos inputs e do botao

  /* const registerEmail = createRegister.querySelector('#register-email');
  const registerPassword = createRegister.querySelector('#register-password');
  const buttonRegister = createRegister.querySelector('#register-button');

  // ai coloca um addeventlistener pra ouvir o CLICK do botao
  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    userCreate(registerEmail.value, registerPassword.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert('Deu ruim!');
        return errorMessage;
      });
  }); */

  return createRegister;
};
