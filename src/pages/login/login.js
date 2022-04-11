// aqui exportaras las funciones que necesites

// import { createLogin } from '../register/page-register.js';
import { logar, logarGmail } from './authentication.js';

export const pageLogin = () => {
    const login = document.createElement('div');
    login.setAttribute('class', 'box-form-login');
    login.innerHTML = `    
    
      <figure class="box-slogan-page-login">
        <img src="./img/kfandom.svg" alt="Logotype" class="logo-icon-page-login">
      </figure>      
      
        <form action="" method="post" class = "form-login">
          <input type="email" placeholder="seu@email.com" class="login-area" id="email-area" name="email-area" requered>
          <input type="password" placeholder="Senha" class="login-area" id="password-area" name="password-area" requered>
          <button class="btn-sign-in btn-area" id="btn-sign-in" >Entrar</button>
          <p class="error" id = "user-error"></p>
        </form>
    
      <p class="text-center" >-ou-</p>
      <button class="btn-google text-center" id="btn-google"><img src="./img/G.svg" alt="btn-google" class="img-btn-google">  Sign in with Google</button>
      <p class="text-create-login text-center">
        Ainda não tem conta? <a href="#createLogin" class="click-register" id="click-register">Cadastre-se</a>
      </p>
 
  `;

    login.querySelector('#btn-sign-in').addEventListener('click', (e) => {
        const inputEmail = login.querySelector('#email-area').value;
        const inputPassword = login.querySelector('#password-area').value;
        const invalidFormat = /\S+@\S+\.\S+/.test(inputEmail);
        const userError = login.querySelector('#user-error');
        e.preventDefault();

        if (!inputEmail || !inputPassword) {
            userError.innerHTML = "*Campos obrigatórios";
            userError.style.display = "block";

        } else if (!invalidFormat) {
            userError.innerHTML = "*Preencha o campo de email corretamente";
            userError.style.display = "block";

        } else if (inputEmail && inputPassword && invalidFormat) {
            logar(inputEmail, inputPassword).then((response) => {
                console.log('success', response);
                window.location.hash = '#feed';


            }).catch((error) => {


                switch (error.code) {
                    case 'auth/invalid-email':
                        userError.innerHTML = "*Campos obrigatórios";
                        userError.style.display = "block";
                        break;
                    case 'auth/internal-error':
                        userError.innerHTML = "*Campos obrigatórios";
                        userError.style.display = "block";
                        break;
                    case 'auth/wrong-password':
                        userError.innerHTML = "*Email ou senhas estão errados";
                        userError.style.display = "block";
                        break;
                    case 'auth/user-not-found':
                        userError.innerHTML = "*Usuário não cadastrado, registre-se!";
                        userError.style.display = "block";
                        break;

                    default:

                }
                console.log('error', error.code);
            });
        }
    });

    login.querySelector('#btn-google').addEventListener('click', (e) => {
        e.preventDefault();
        logarGmail().then((response) => {
            console.log('sucess', response);
            window.location.hash = '#feed';
        })
    });


    return login;
};