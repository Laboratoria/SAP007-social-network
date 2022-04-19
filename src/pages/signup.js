import { db } from '../dependencies/config-firebase.js';
import { setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { loginGoogle, register } from '../services/authentication.js';

export default () => {
  const areaSignUp = document.createElement('div');
  areaSignUp.classList.add('signup');
  areaSignUp.innerHTML = `
  <div class="content">
    <div id="main-signUp" class="main-signUp">
      <img src="../img/logo.png" alt="Logo Laboriam" class="logo">
      <form>
        <h2>Cadastro</h2>
        <input type="email" placeholder="Endereço de e-mail" id="inputEmail">
        <input type="text" placeholder="Nome completo" id="inputName">
        <input type="password" placeholder="Senha" id="inputPassword">
        <p id="mensagemErro" class="mensagemErro"></p>
        <button type="submit" id="buttonRegister" class="buttonRegister">   
          <a href="/#feed"> Cadastre-se </a> 
        </button>
        <div class="alternativaLogin">
          <div></div>
          <p>OU</p>
          <div></div>
        </div>
        <div class="buttonsSignup">
          <button class="google" id="google">
            <img src="../img/icon-google.png" alt="" class="iconGoogle">
          </button>
          <button class="facebook">
            <img src="../img/icon-facebook.png" alt="" class="iconFacebook">
          </button>
          <button class="github">
            <img src="../img/icon-github.png" alt="" class="iconGithub">
          </button>
        </div>
      </form>
      <p class="irParaAConta">Tem uma conta? <a href="/#login">Conecte-se</a></p>
    </div>
    <img src="../img/laboriam-phone.png" alt="Logo Laboriam" class="imgPhones">
  </div>
  <footer class="devs">
    <p>Copyright &copy Desenvolvido por:</p>
    <p>Cássia Costa, Dayane Rodrigues e Viviane Soares</p>
  </footer>
`;

  const btnCadastro = areaSignUp.querySelector('#buttonRegister');
  const email = areaSignUp.querySelector('#inputEmail');
  const password = areaSignUp.querySelector('#inputPassword');
  const completeName = areaSignUp.querySelector('#inputName');
  const btnGoogle = areaSignUp.querySelector('#google');
  const mensagemErro = areaSignUp.querySelector('#mensagemErro');

  btnCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    if (email.value, completeName.value, password.value) {
      register(email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const userRef = doc(db, 'users', user.uid);
          setDoc(userRef, { email: email.value, displayName: completeName.value });
          console.log(user.uid);
          console.log('Entrou no then do criar usuário');
        })
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          if (error.code === 'auth/uid-already-exists') {
            mensagemErro.innerHTML = 'E-mail já cadastrado';
          } else if (error.code === 'auth/email-already-in-use') {
            mensagemErro.innerHTML = 'E-mail já cadastrado';
          } else if (error.code === 'auth/invalid-email') {
            mensagemErro.innerHTML = 'E-mail inválido';
          } else {
            mensagemErro.innerHTML = ' Ocorreu algum erro! Tente novamente.';
          }
        });
    } else if (email.valor === '' || completeName.value === '' || password.value === '') {
      mensagemErro.innerHTML = ' Preencher todos os campos!';
    }
  });

  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle();
  });

  return areaSignUp;
};
