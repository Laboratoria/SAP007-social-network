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
    <section class="box-form-login">
      <form action="" method="post">
        <input type="email" placeholder="seu@email.com" class="login-area" id="email-area" name="email-area">
        <input type="password" placeholder="Senha" class="login-area" id="password-area" name="password-area">
        <p class = "error" id = "user-error"></p>
        <button class="btn-sign-in btn-area" id="btn-sign-in" >Entrar</button>
        </section>
      </form>
      <section>
         <p class = "or">ou</p>
         <button class="btn-google btn-area" id="btn-google">Acesse com Google</button>
         <button class="btn-register btn-area" id="btn-register">Cadastre-se</button>
      </section>
  `;

    // const btnRegister = login.querySelector('#btn-register');
    // btnRegister.addEventListener('click', () => {
    //  });

    login.querySelector('#btn-sign-in').addEventListener('click', (e) => {
        const inputEmail = login.querySelector('#email-area').value;
        const inputPassword = login.querySelector('#password-area').value;
        const invalidFormat = /\S+@\S+\.\S+/.test(inputEmail);
        const userError = login.querySelector('#user-error');
        e.preventDefault();

        if (!inputEmail || !inputPassword) {
            userError.innerHTML = "*Campo obrigatórios";
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
                        userError.innerHTML = "*Campo obrigatórios";
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