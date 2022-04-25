import header from '../components/header.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('content-about-us');

  const templateAboutUs = `
    <main class="main">
      <p class='text'>Teste para página Sobre Nós</p>
    </main> 
  `;

  container.appendChild(header());
  container.innerHTML += templateAboutUs;

  return container;
};
