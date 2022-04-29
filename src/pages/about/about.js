import {
  header,
  logoutUser,
} from '../components/header.js';

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

  // função botão menu hamburguer
  const btnMobile = container.querySelector('#btn-mobile');

  function toggleMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    const nav = container.querySelector('#nav');
    nav.classList.toggle('active');
    const navActive = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', navActive);
    if (navActive) {
      event.currentTarget.setAttribute('aria-label', 'Close Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Open Menu');
    }
  }
  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
  const logoutButton = container.querySelector('#btn-exit');
  logoutButton.addEventListener('click', logoutUser);

  return container;
};
