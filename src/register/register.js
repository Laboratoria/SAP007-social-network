import '../firebase/firebaseconfig.js';
import { creatNewUser } from '../firebase/authentication.js';

export const register = () => {
  const containerRegister = document.createElement('div'); // criando uma div para inserir o conteúdo na tela
  containerRegister.setAttribute('class', 'container'); // para pegar pela class
  const templateRegister = `
  <h1>Cadastro</h1>
    <div id="erro">
      <p id="MenssagemDeErro"></p>
    </div>
    <form class='form-login'>
      <input type='email' name='email' class='email' placeholder='Insera e-mail' autocomplet required />
      <input type='password' name='password' class='password' placeholder='Insera uma senha' requerid /><br>
      <button type='submit' id='btn-register'>Cadastrar</button><br>
      <a href='#login'> Já possui conta?</a><br>
      <section id='termsUse'>
        <h1>Termos de uso</h1>
        <div id='paragraph'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer to....Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer to....</p>
        </div>
        <label value=''>Concordo com os
          termos de uso</label>
        <input id='check' type='checkbox' name='checkbox' />
      </section>
    </form>
 `;
  containerRegister.innerHTML = templateRegister;
  const email = containerRegister.querySelector('.email'); // pegando valor do e-mail
  const password = containerRegister.querySelector('.password'); // pegando valor do password
  const link = document.getElementById('stylePages'); // Criando o caminho para o Css
  link.href = 'register/register.Css';

  containerRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.checkbox.checked) {
      creatNewUser(email.value, password.value)
        .then(() => {
          window.location.hash = '#timeline'; // caso de certo vai pra hash
        })
        .catch((error) => {
          const Termos = containerRegister.querySelector('#MenssagemDeErro');
          const errorCode = error.code;
          switch (errorCode) {
            case 'auth/weak-password':
              Termos.innerHTML = 'Senha com menos de 6 Digitos';

              break;
            case 'auth/email-already-in-use':
              Termos.innerHTML = 'E-mail em uso';

              break;
            default:
          }
        });
    } else {
      const Termos = containerRegister.querySelector('#MenssagemDeErro');
      Termos.innerHTML = 'Aceite os termos de uso';
    }
  });
  return containerRegister;
};
