import '../firebase/firebaseconfig.js';
import { creatNewUser } from '../firebase/authentication.js';

export const register = () => {
  const containerRegister = document.createElement('div');
  containerRegister.setAttribute('class', 'container');
  const templateRegister = `
  <h1>Cadastro</h1>
  <form class"form-login">
  <input type="email" name="email" class="email" placeholder="Insera e-mail"
    autocomplet required/>
    <input type="password" name="password" class="password" placeholder="Insera uma senha" requerid />
    <button type="submit" id="btn-register">Cadastrar</button>
   <a href="#login"> Já possui conta?</a>
   </form>
 `;
  containerRegister.innerHTML = templateRegister;
  const email = containerRegister.querySelector('.email');
  const password = containerRegister.querySelector('.password');
  containerRegister.addEventListener('submit', (e) => {
    console.log('agora vai');
    e.preventDefault();
    creatNewUser(email.value, password.value)
      .then(() => {
        window.location.hash = '#timeline';
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage, 'erro');
      });
  });
  return containerRegister;
};
