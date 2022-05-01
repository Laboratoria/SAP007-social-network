import {
  header,
  logoutUser,
} from '../components/header.js';

export default () => {
  const container = document.createElement('div');

  const templateAboutUs = `
    <div class="content-about-us"> 
    <p class="text-about">O <strong>Eu, Poesia</strong> 
      é a rede social tanto para quem gosta de ler quanto para quem gosta de escrever
      poesias. Um espaço seguro para compartilhar suas criações ou de terceiros,
      curtir aquelas que lhe agradam, sem julgamentos.
    </p>

    <ul id="list-developers" class="list-developers">Desenvolvido por: 
      <li>
        <a class="name-developer" href="https://github.com/BeaSCarvalho">Beatriz de Sousa Carvalho
          <img src="./img/icon-github.png" alt="logo github" class="icon-git"> 
        </a>
      </li>
      <li>
        <a class="name-developer" href="https://github.com/MariaLuizaSantana">Maria Luiza Costa Santana
          <img src="./img/icon-github.png" alt="logo github" class="icon-git"> 
        </a>
      </li>
      <li>
        <a class="name-developer" href="https://github.com/raelepereira">Raele Pereira
          <img src="./img/icon-github.png" alt="logo github" class="icon-git"> 
        </a>
      </li>
    </ul> 
    </div>
  `;

  container.appendChild(header());
  container.innerHTML += templateAboutUs;

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
<<<<<<< HEAD
  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
=======

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);

>>>>>>> bf0be9fad9ff87194f5c802e9e0235420afe2e8d
  const logoutButton = container.querySelector('#btn-exit');
  logoutButton.addEventListener('click', logoutUser);

  return container;
};
