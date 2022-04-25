import '../firebase/config-firebase.js';
import { logout } from '../firebase/authetication.js';
import { auth } from '../firebase/config-firebase.js';

export default () => {
  const feed = document.createElement('div');
  const templateFeed = `
  <nav class="top-nav">
    <div>
      <picture></picture>
    </div>
    <input id="menu-toggle" type="checkbox"/>
      <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
      </label>
    <ul class="menu">
      <li id="profile">Perfil</li>
      <li id="logout">Sair</li>
    </ul>
  </nav>
  <section  class="publish "id="publish">
    <textarea class="post-area-text" placeholder="O que você quer compartilhar?"></textarea>
    <div id='selected-theme'>
      <select id='theme'>
        <option value disabled selected>Assunto</option>
        <option value="Destinos">Destinos</option>
        <option value="Dicas">Dicas</option>
        <option value="Milhas">Milhas</option>
      </select>
    </div>
    <div>
      <button id="publish-btn">Enviar</button>
    </div>  
  </section>`;
  feed.innerHTML = templateFeed;

  const logoutUser = feed.querySelector('#logout');
  logoutUser.addEventListener('click', (e) => {
    e.preventDefault();
    logout().then(() => {
      window.location.hash = "#login"
      console.log(logout)
    });
  });
  return feed;
  }
  




