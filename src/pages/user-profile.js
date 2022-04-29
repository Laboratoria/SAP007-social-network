import { logout } from '../services/authentication.js';
import { menu } from './components/menu.js';

export default () => {
  const feedProfile = document.createElement('div');
  feedProfile.classList.add('feedProfile');
  feedProfile.innerHTML = `
    <header>
      <img src='../img/logo.png' alt='Logo Laboriam'>
    </header>
    <div id='main-content'>
      <textarea name='' id='' cols='30' rows='10'></textarea>
      <button type='button'>Publicar</button>
    </div>
    <aside id='menu'></aside>
    `;

  const menuNavigation = feedProfile.querySelector('#menu');
  menuNavigation.innerHTML = menu;

  const btnLogout = feedProfile.querySelector('#signout');
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });

  return feedProfile;
};
