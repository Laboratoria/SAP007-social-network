import '../firebase/firebaseconfig.js';

export default () => {
  const containerHome = document.createElement('div');
  const templateHome = `
  
  <h1 class='home-title'>home page</h1>
    <a href="#login" class='link-pages'>Login</a><br>
    <a href="#register" class='link-pages'>Cadastro</a><br>
    <a href="#about" class='link-pages'>Sobre</a><br>

  </p>
 
  `;
  containerHome.innerHTML = templateHome;
  return containerHome;
};
