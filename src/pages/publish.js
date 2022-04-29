import { logout } from '../services/authentication.js';
import { enviarPost } from '../services/firestore.js';
import { menu } from './components/menu.js';

export default () => {
  const feedPublish = document.createElement('div');
  feedPublish.classList.add('feedPublish');
  feedPublish.innerHTML = `
    <header>
      <img src='../img/logo.png' alt='Logo Laboriam'>
    </header>
    <nav class='nav-publish'>
      <button type='button'>Voltar</button>
      <h3>Criar publicação</h3>
    </nav>
    <div id='main-content' class='main-content'>
      <textarea name='' id='' cols='30' rows='10' placeholder='No que você está pensando?' class='inputPost'></textarea>
      <section class='buttons-publish'>
        <button type='button' class='addImage'>Add foto</button>
        <button type='button' class='btnPublicar'>Publicar</button>
      </section>
    </div>
    <aside id='menu' class='menu'></aside>
  `;

  const menuNavigation = feedPublish.querySelector('#menu');
  menuNavigation.innerHTML = menu;

  const publicar = feedPublish.querySelector('.btnPublicar');
  const inputPost = feedPublish.querySelector('.inputPost');

  publicar.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPost.value) {
      enviarPost(inputPost.value);
      window.location.hash = '#feed';
    }
  });

  const btnLogout = feedPublish.querySelector('#signout');
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });

  return feedPublish;
};
