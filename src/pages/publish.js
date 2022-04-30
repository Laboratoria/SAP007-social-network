import { current, logout } from "../services/authentication.js";
import { createPost } from "../services/firestore.js";
import { menu } from "./components/menu.js";

export default () => {
  const feedPublish = document.createElement('div');
  feedPublish.classList.add('feedPublish');
  feedPublish.innerHTML = `
    <section class="header">
      <img src="../img/logo.png" alt="Logo Laboriam">
      <section class="nav-publish">
        <h3>Criar publicação</h3>
      </section>
    </section>
    <section class="main-content">
      <textarea placeholder="No que você está pensando?" class="post-input"></textarea>
      <div class="buttons-publish">
        <button type="button" class="publish-button">Publicar</button>
      </div>
    </section>
    <div class="picture-pb">
      <img src="${current().photoURL}" alt="Foto do usuário logado" class="userPhotoInTheMenu">
      <h2>${current().displayName}</h2>
    </div>
    <section class="responsive-menu">
      <div id="menu" class="menu"></div>
    </section>
  `;

  const menuNavigation = feedPublish.querySelector('#menu');
  menuNavigation.innerHTML = menu;

  const publish = feedPublish.querySelector('.publish-button');
  const messagePost = feedPublish.querySelector('.post-input');

  publish.addEventListener('click', (e) => {
    e.preventDefault();
    if (messagePost.value) {
      createPost(messagePost.value);
      window.location.hash = '#feed';
    }
  })

  const btnLogout = feedPublish.querySelector('#signout');
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });

  return feedPublish;
};