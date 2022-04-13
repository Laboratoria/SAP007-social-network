import "../firebase/config-firebase.js";
import { signIn, signInWithGoogle } from '../firebase/authetication.js';
import { auth, provider } from '../firebase/config-firebase.js'

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerA');

  const templateHome = `  
  <div class=banner> 
  </div>
  <div class= main-container>
       <div class="container-fluid">
      <p class="welcome"> Bem vindo(a) viajante!! </p>
      <form action="#" id="sign-in-form" class="sign-in-form">
        <input class= "inputs" type="email" placeholder="Email" id="email" />
        <span class="email-error"></span>
        <input class= "inputs" type="password" placeholder="Senha" id="password"/>
        <span class="password-error"></span>
        <input class="btnEnter" type="submit" value="Entrar" id="Entrar"/>
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


  //const messageEmail = container.querySelector(".email-error");
  //const messagePassword = container.querySelector(".password-error");
  const form = container.querySelector('.sign-in-form');
  form.addEventListener('submit', (e) => {
    // e - comportamento padrão daquele evento
    e.preventDefault(); //prevenir comportamento padrão
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signIn(email, password)
      .then(function () {
        window.location.hash = "#feed";
      })
      .catch((error) => {
        const errorMessage = error.message;
        const messageEmail = container.querySelector(".email-error");
        const messagePassword = container.querySelector(".password-error");
        if (error.code == "auth/user-not-found") {
          messageEmail.innerHTML = "Email inválido"
        } else if (error.code == "auth/wrong-password") {
          messagePassword.innerHTML = "Senha inválida"
        }
        return errorMessage;

      });

  });

  const btnGoogle = container.querySelector('.logoGoogle');
  btnGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithGoogle(auth, provider);
  });
  return container;
};
