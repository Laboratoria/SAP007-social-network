// aqui exportaras las funciones que necesites
function validInputEmail() {
  const inputEmail = document.querySelector('#email-area');
  inputEmail.addEventListener('change', () => {
    if (inputEmail.value === '') {
      console.log('vazio');
    } else {
      console.log('valor');
    }
  });
}

export const myFunction = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const login = document.createElement('div');
  login.setAttribute('class', 'box-form-login');
  login.innerHTML = `
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
   <button class="btn btn-area" id="btn-sign-In">Entrar</button>
   <p>ou</p>
   <button class="btn btn-area" id="btn-google">Acesse com Google</button>
  </div>
  `;
  const inputEmail = login.querySelector('#email-area');
  console.log(inputEmail);
  main.appendChild(login);
  validInputEmail();

  // console.log('antes');
  // firebase.auth().signInWithEmailAndPassword('any@email.com', '123456').then((response) => {
  //   console.log('success', response);
  // }).catch((error) => {
  //   console.log('error', error);
  // });
  // console.log('depois');
};

// const buttonLogin = document.getElementById('btn-sign-In');
// console.log(buttonLogin);
// buttonLogin.addEventListener('click', (e) => {
//   e.preventDefault();
//   const inputEmail = document.querySelector('#email-area');
//   console.log(inputEmail.value);
// });
