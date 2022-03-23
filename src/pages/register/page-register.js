export const createLogin = () => {
    const main = document.getElementById('root');
    main.innerHTML = '';
    const createLogin = document.createElement('div');
    createLogin.setAttribute('class', 'box-form-create-login');
    createLogin.innerHTML = `
  <link rel="stylesheet" href="./pages/register/create-login.css"/>      
  <figure class="box-slogan">
   <img src="../img/logo.png" alt="Logotype" class="logo-icon">
  </figure>
  <section class="box-form-create-login">
   <form method="post">
     <input type="text" placeholder="Nome Completo" id="name-area" name="name-area" class="create-area">
     <input type="text" placeholder="Apelido" id="nick-name-area" name="nick-name-area" class="create-area">
     <input type="date" placeholder="Data de nascimento" id="birth-area" name="birth-area" class="create-area">
     <input type="email" placeholder="E-mail" id="email-area" name="email-area" class="create-area">
     <input type="password" placeholder="Senha" id="password-area" name="password-area" class="create-area">
     <section class="inerror-message" id="error-password"></section>
     </form>
    <button class="btn-back btn-area" id="btn-back">Voltar</button>
    <button class="btn-confirm btn-area" id="btn-confirm">Confirmar</button>
  </section>
  `;
    main.appendChild(createLogin);

    const btnConfirm = createLogin.querySelector('#btn-confirm');
    btnConfirm.addEventListener('click', () => {
        console.log("oi");
    });


};