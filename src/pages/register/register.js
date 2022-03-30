// import { userCreate } from '../login/auth.js;';

export default function register() {
  const createRegister = document.createElement('div');
  const registerForm = `
    <section class="green-container">
    <div class="form-container">
    <p>Cadastre-se para fazer parte da maior plataforma de receitas
     pensadas para devs!</p>
      <form class="">
        <label for="" class="">Nome</label>
        <input class="text-input" type="text" id="user-name">
        <br>
        <label for="" class="">E-mail</label>
        <input class="text-input" type="email" id="register-email">
        <br>
        <label for="" class="">Senha</label>
        <input class="text-input" type="password" id="register-password">
        <br>
       <button class="btn-register" id="register-enter" type="submit"><a href="/#feed">Cadastrar</a></button>
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
        alert('Algo deu errado');
        return errorMessage;
      });
  }); */

  return createRegister;
}
