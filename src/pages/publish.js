import { logout } from "../services/authentication.js";
import { createPost } from "../services/firestore.js";
import { menu } from "./elements/menu.js";
//import { storage } from '../dependencies/config-firebase.js';
//import { ref, uploadBytes } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js';

export default () => {
  const feedPublish = document.createElement('div');
  feedPublish.classList.add('feedPublish');
  feedPublish.innerHTML = `
    <section class="header">
      <img src="../img/logo.png" alt="Logo Laboriam">
    </section>
    <section class="nav-publish">
      <h3>Criar publicação</h3>
    </section>
    <section class="main-content">
      <textarea placeholder="No que você está pensando?" class="post-input"></textarea>
      <div class="buttons-publish">
        <button type="button" class="addImage">Add foto</button>
        <button type="button" class="btnPublicar">Publicar</button>
      </div>
    </section>
    <aside id="menu" class="menu"></aside>
  `;

  const menuNavigation = feedPublish.querySelector('#menu');
  menuNavigation.innerHTML = menu;

  const publicar = feedPublish.querySelector('.btnPublicar');
  const messagePost = feedPublish.querySelector('.post-input');

  // const addImage = feedPublish.querySelector('#addImage')

  publicar.addEventListener('click', (e) => {
    e.preventDefault();
    if (messagePost.value) {
      createPost(messagePost.value);
      window.location.hash = '#feed';
    }
  })

  // addImage.addEventListener('click', (e) => {
  //   e.preventDefault();
  // })

  const btnLogout = feedPublish.querySelector('#signout');
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });


  return feedPublish;
};