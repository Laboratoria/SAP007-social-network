import {
  createPost, getAllPosts, authLogOut,
} from './firestore-functions.js';

import {
  toggleMenu,
  generalErrors,
} from '../../components/functions-components.js';

import {
  postElement,
} from '../../components/timelinepost.js';

export const feed = (user) => {
  const timeline = document.createElement('div');
  timeline.setAttribute('class', 'box-feed flex column');
  timeline.innerHTML = `
    <header class="header-feed flex"> 
      <picture>
        <img src="${user.photoURL}" class="user-perfil-img-feed" alt="user">
      </picture>  
      <picture>
        <img class="logo-img-feed" src="./img/kfandomKF.svg" alt="Logo">
      </picture>   
      <nav id="nav-options" class="nav-options" aria-expanded="false">
        <button id="btn-mobile" class="btn-mobile flex">
          <span id="hamburguer" class="hamburguer"></span>
        </button>
        <ul id="menu" class="menu">
          <li class="link"><button class="btn-log-out" id="btn-log-out">Sair</button></li>
        </ul>
      </nav>
    </header>
    <main class="main-post flex column">
      <section class="warnings-feed" id="warnings-feed">
        <p class="warnings-feed-post" id="warnings-feed-post">
        Infelizmente não estamos conseguindo compartilhar a sua mensagem...
        </p>
        <p class="warnings-feed-empty-post" id="warnings-feed-empty-post">
        Não deixe sua mensagem vazia, compartilhe algo com a gente!
        </p>
        <p class="warnings-feed-general" id="warnings-feed-general">
        Aconteceu um probleminha... Mianamnida!! "o" Tente novamente mais tarde!
        </p>
      </section>
      <section class="section-feed flex column" id="section-feed">
      </section>
      <section class="section-input-post" id="section-input-post">
        <button class="btn-post-input-apear" id="btn-post-input-apear">+
        </button>
        <form action="" method="post" class="form-post-apear flex">
          <textarea type="text" id="input-post" required placeholder="O que quero compartilhar?" maxlength="500" class="input-post"/></textarea>
          <button id="btn-post" class="btn-post">Postar</button>
        </form>
      </section>
    </main>   
      `;
  const btnMobile = timeline.querySelector('#btn-mobile');
  const btnPost = timeline.querySelector('#btn-post');
  const btnLogOut = timeline.querySelector('#btn-log-out');
  const btnInputPost = timeline.querySelector('#btn-post-input-apear');
  const sectionInput = timeline.querySelector('#section-input-post');
  const nav = timeline.querySelector('#nav-options');
  const postsElement = timeline.querySelector('#section-feed');
  const warningsSection = timeline.querySelector('#warnings-feed');
  const warningPost = timeline.querySelector('#warnings-feed-post');
  const warningEmptyPost = timeline.querySelector('#warnings-feed-empty-post');
  const warningGeneral = timeline.querySelector('#warnings-feed-general');

  btnMobile.addEventListener('click', () => toggleMenu(nav));

  btnInputPost.addEventListener('click', () => toggleMenu(sectionInput));

  btnLogOut.addEventListener('click', (e) => {
    e.preventDefault();
    authLogOut().then(() => {
      sessionStorage.clear();
      window.location.hash = '#login';
      document.location.reload(true);
    }).catch(() => {
      sessionStorage.clear();
      window.location.hash = '#login';
    });
  });

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    const post = {};
    post.message = timeline.querySelector('#input-post').value;
    post.day = new Date();
    post.day.seconds = post.day.getTime() / 1000;
    post.edit = '';
    post.userUid = user.uid;
    post.name = user.displayName;
    post.imgProfile = user.photoURL;
    post.like = [];
    post.comment = [];

    if (post.message.trim().length !== 0 && post.message !== ' ' && post.message !== null && post.message !== false) {
      toggleMenu(sectionInput);
      createPost(post).then((postOnCloud) => {
        const newPostElement = postElement(post, user, postOnCloud.id);
        postsElement.prepend(newPostElement);
      }).catch(() => {
        generalErrors(warningPost, warningsSection);
      });
    } else {
      generalErrors(warningEmptyPost, warningsSection);
    }
  });

  getAllPosts().then((posts) => {
    posts.docs.forEach((onePost) => {
      const post = onePost.data();
      const timelinePost = postElement(post, user, onePost.id);
      postsElement.prepend(timelinePost);
    });
  }).catch(() => {
    generalErrors(warningGeneral, warningsSection);
  });

  return timeline;
};
