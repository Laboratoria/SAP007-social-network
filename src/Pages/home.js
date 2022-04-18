import '../firebase/config-firebase.js';
import { signIn, signInWithGoogle } from '../firebase/authetication.js';
import { auth, provider } from '../firebase/config-firebase.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerA');
  const templateHome = `  
  <div class="center">
  <div class="banner"> 
  </div>
  <div class= "main-container">
       <div class="container-fluid">
      <p class="welcome"> Bem vindo(a) viajante! </p>
      <form action="#" id="sign-in-form" class="sign-in-form">
        <input class= "inputs" type="email" placeholder="E-mail" id="email" />
        <input class= "inputs" type="password" placeholder="Senha" id="password"/>
        <span class="error" id ="error"></span>
        <button class="btnEnter" type="submit" value="Entrar" id="btnEnter">Entrar</button>
      </form>
      <p class="enterByGoogle">Ou entre com o Google</p>
     <a href="/" class="google-link">
       <img  class="logoGoogle" src="./img/google.png" alt="logo Google">
     </a>
       <p class="welcome"> Ainda não tem cadastro?</p>
       <a href="#register" id='sign-up-google'class="link">Registre-se</a></p>  
     </div>  
  </div>
  `;
  container.innerHTML = templateHome;

  const email = container.querySelector('#email');
  const password = container.querySelector('#password');
  const btnEnter = container.querySelector('.btnEnter');
  const message = container.querySelector('.error');

  btnEnter.addEventListener('click', (e) => {
    console.log('clicou');
    // e - comportamento padrão daquele evento
    e.preventDefault(); //prevenir comportamento padrão
    signIn(email.value, password.value)
      .then((response) => {
        window.location.hash = "#feed"
        console.log('entrou', response.code)
      })
      .catch((response) => {
        if (response.code == 'auth/invalid-email') {
          message.innerHTML = 'Digite um e-mail válido';
        } else if (response.code == 'auth/internal-error') {
          message.innerHTML = 'Senha inválida';
        }
      })
  });
  const btnGoogle = container.querySelector('.logoGoogle');
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle(auth, provider);
    window.location.hash = '#feed';
  });
  return container;
};
