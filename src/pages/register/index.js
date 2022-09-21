import { userCreate } from '../../lib/auth-firebase.js';

export default () => {
  const containerRegister = document.createElement('div');

  const templateRegister = `
      <form class="conteudoRegister">  
      <p class="paragraphLogin">Sign Up</p>
      <input type="email" class="input name" id="inputName" placeholder="Insira seu nome Completo" required /><br>
      <input type="email" class="input email" id="inputEmail" placeholder="Insira seu email" requerid /><br>
      <input type="password" class="input confirmaSenha" id="inputSenha" placeholder="Confirme sua senha" requerid /><br>
      <p id="message" class="sucessMessage" menssage"></p>
    <br><button class='btn submit' type="submit" id="btn-Register">Cadastrar</button><br>
    <p> Já tem conta?
      <a href="#login">Entrar</a></p></form>
      
    `;

  containerRegister.innerHTML = templateRegister;

  const name = containerRegister.querySelector('#inputEmail');
  const email = containerRegister.querySelector('#inputName');
  const password = containerRegister.querySelector('#inputSenha');
  const btnRegister = containerRegister.querySelector('#btn-Register');
  const msgAlert = containerRegister.querySelector('#message');

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-sequences
    if (name.value, email.value, password.value) {
      userCreate(name.value, email.value, password.value)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;

          switch (errorCode) {
            case 'auth/invalid-email':
              errorMessage = 'Insira um email válido.';
              msgAlert.innerHTML = errorMessage;
              break;
            case 'auth/weak-password':
              errorMessage = 'A senha deve ter no mínimo seis caracteres.';
              msgAlert.innerHTML = errorMessage;
              break;
            case 'auth/email-already-in-use':
              errorMessage = 'Email já cadastrado.';
              msgAlert.innerHTML = errorMessage;
              break;
            case 'auth/missing-email':
              errorMessage = 'Insira um email.';
              msgAlert.innerHTML = errorMessage;
              break;
            default:
              errorMessage = 'Preencha todos os campos';
              msgAlert.innerHTML = errorMessage;
          }
        });
    }
  });
  return containerRegister;
};
