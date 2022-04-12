import '../firebase/firebaseconfig.js';
import { creatNewUser } from '../firebase/authentication.js';

export const register = () => {
  const containerRegister = document.createElement('div'); // criando uma div para inserir o conteúdo na tela
  containerRegister.setAttribute('class', 'container'); // para pegar pela class
  const templateRegister = `
  <h1>Cadastro</h1>
  <form class"form-login">
  <input type="email" name="email" class="email" placeholder="Insera e-mail"
    autocomplet required/>
    <input type="password" name="password" class="password" placeholder="Insera uma senha" requerid /><br>
    <button type="submit" id="btn-register">Cadastrar</button><br>
   <a href="#login"> Já possui conta?</a><br>
   </form>
 `;
  containerRegister.innerHTML = templateRegister;
  const email = containerRegister.querySelector('.email'); // pegando valor do e-mail
  const password = containerRegister.querySelector('.password'); // pegando valor do password
  containerRegister.addEventListener('submit', (e) => {
    console.log('agora vai');
    e.preventDefault();
    creatNewUser(email.value, password.value)
      .then(() => {
        window.location.hash = '#timeline'; // caso de certo vai pra hash
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage, 'erro'); // caso contrario erro
      });
  });
  return containerRegister;
};
