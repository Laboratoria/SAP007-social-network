// aqui exportaras las funciones que necesites

export const myFunction = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const login = document.createElement('div');
  login.setAttribute('class', 'box-form-login');
  login.innerHTML = `
  <link rel="stylesheet" href="./pages/login/login.css"/>
  
  <div class="box-slogan">
   <h1>K-FANDOM</h1>
   <img src=" " alt="Logotype" class="logo-icon">
   <h3 class="slogan">A rede social da comunidade Fandom</h3>
  </div>
  <div class="box-form-login">
   <form method="post">
     <input type="email" placeholder="E-mail" id="email-area" name="email-area" class="login-area">
     <input type="password" placeholder="Senha" id="password-area" name="password-area" class="login-area">
   </form>
   <div class="inerror-message" id="error-login"></div>
   <button class="btn btn-area" id="btn-sign-in">Entrar</button>
   <p>ou</p>
   <button class="btn btn-area" id="btn-google">Acesse com Google</button>
  </div>
  `;
  const inputEmail = login.getElementById('email-area');
  const inputPassword = login.getElementById('password-area');
  console.log(inputEmail.value, inputPassword.value);

  main.appendChild(login);
};

// const buttonLogin = document.getElementById('btn-sign-In');
// console.log(buttonLogin);
// buttonLogin.addEventListener('click', (e) => {
//   e.preventDefault();
//   const inputEmail = document.querySelector('#email-area');
//   console.log(inputEmail.value);
// });
