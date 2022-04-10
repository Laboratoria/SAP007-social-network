import '../firebase/firebaseconfig.js';

export default () => {
  const containerHome = document.createElement('div');
  containerHome.setAttribute('class', 'containerHome');
  const templateHome = `
  
  <h3 class="login-title">home page</h3>
    <a href="#register">Não Possui conta?</a>
    <a href="#login">Já Possui conta?</a>

  </p>
 
  `;
  containerHome.innerHTML = templateHome;
  return containerHome;
};
