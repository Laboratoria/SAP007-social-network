import '../../configs/config.firebase.js';
// import { userLogin } from '../../lib/auth.js';

export default function login() {
  const container = document.createElement('div');
  const template = `
  <section class="green-container">
  <div class="form-container">
    <form class="">
      <label for="" class="">Email</label>
      <input class="text-input" type="email" name="" id="email-login-input" autocomplete="on">
      <br>
      <label for="" class="">Senha</label>
      <input class="text-input" type="password" name="" id="password-login-input">
      <br>
      <button class="btn-login" type="submit" id="btn-submit-login"><a href="/#feed">Entrar</a></button>
      <p>OU</p>
      <button class="btn-login-google" type="submit" id="google-login"><a herf=" ">Entrar com google</a></button>
      <button class="btn-register" type="submit" id="register-btn"><a href="/#register">Cadastra-se</a></button>
    </form>
  </div>
</section>
    `;
  container.innerHTML = template;

  // após criar o template, cria variaveis pra pegar os valores dos inputs e do botao

  /* const email = container.querySelector('#email-login-input');
  const password = container.querySelector('#password-login-input');
  const btnSubmit = container.querySelector('#btn-submit-login');
  // ai coloca um addeventlistener pra ouvir o CLICK do botao
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Algo deu errado');
        return errorMessage;
      });
  }); */

  return container;
}
