import '../firebase/firebaseconfig.js';

export default () => {
  const containerHome = document.createElement('div');
  const link = document.getElementById('stylePages');
  link.href = 'home/home.Css';
  const templateHome = `
  
  <h1 class='home-title'>Bem-Vindo ao Eco Work Planet</h1>
     <video src=""></video><br>
    <a href="#login" class='link-pages'>Login</a><br>
    <a href="#register" class='link-pages'>Cadastro</a><br>
    <a href="#about" class='link-pages'>Sobre</a><br>


 
  `;
  containerHome.innerHTML = templateHome;
  return containerHome;
};
