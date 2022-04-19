import '../firebase/config-firebase.js';
import { userCreate } from '../firebase/authetication.js';

export default () => {
  const register = document.createElement('div');
  register.classList.add('containerA');
  const templateRegister = `
    <div class="center">
      <div class="banner"> 
      </div>
      <div class= "main-container">
        <div class="container-fluid">
          <p class="welcome">Cadastro</p>
          <form action="#" id="sign-in-form" class="sign-in-form">
            <input class= "inputs" type="text" placeholder="Nome" id="name"/>
            <input class= "inputs" type="email" placeholder="E-mail" id="email"/>
            <span class="error"></span>
            <input class= "inputs" type="password" placeholder="Senha (6 dígitos)" id="password"/>      
            <button class="btnEnter" type="submit"  id="register">Cadastrar</button>
          </form>
          <p class="text"> Já tem cadastro ? <a href="#home" class= "link">Faça o Login</a></p>
        </div>
      </div>
    </div>
  `;

  register.innerHTML = templateRegister;

  const email = register.querySelector('#email');
  const password = register.querySelector('#password');
  const btnRegister = register.querySelector('#register');
  const message = register.querySelector('.error');

  btnRegister.addEventListener('click', (e) => {
    console.log("clicou")
    e.preventDefault();
    userCreate(email.value, password.value)
      .then(function () {
        window.location.hash = '#home';
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (error.code == 'auth/invalid-email') {
          message.innerHTML = 'Digite um e-mail válido';
        } if (error.code == 'auth/email-already-in-use') {
          message.innerHTML = 'Esse e-mail já está sendo utilizado';
        }
        return errorMessage;
      });
  });
  return register;
};
