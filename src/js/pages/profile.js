import { createPost } from '../components/post.js';
import { createAddComment } from '../components/add-comment.js';
import { createComment } from '../components/comments.js';

const textPost = `Mãe de gatos...`;

export function createProfile() {
  const container = document.createElement('main');
  container.setAttribute('id', 'main-container');
  container.innerHTML = `
  <section class="container-internal">
    <header class="profile-header">
      <a href="/#" class="user-link-photo  user-link-photo-card">
        <img src="../img/icons/icon-profile.png" class="user-photo-post" alt="Foto do perfil">
      </a>
      <div>
        <a href="/#">
          <p class="user-name">Nome do Usuário</p>
        </a>
        <p class="language">Javascript, HTML, CSS</p>
        <p class="work">Desenvolvedora Front-End</p>
        <textarea class="user-description-text" autocomplete="on" rows="1" cols="70" minlength="2" spellcheck="true" wrap="hard" readonly>${textPost}</textarea>
      </div>
    </header>
    <div class="line-post"></div>
    <ul class="cards-timeline">
      ${createListPost()}
    </ul>
  </section>
    `;
  return container;
}

function createListPost (){
  const template = `
    <li class="post-card-timeline">
      <article class="user-post">
        ${createPost()}
        ${createAddComment()}
        ${createComment()}
      </article>
    </li>
  `
  return template;
}
