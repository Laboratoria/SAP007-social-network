import { createPost } from '../components/post.js';
import { createAddComment } from '../components/add-comment.js';
import { createComment } from '../components/comments.js';

const textPost = `Mãe de gatos...`;

export function createProfile() {
  const container = document.createElement('main');
  container.setAttribute('id', 'main-container');
  container.innerHTML = `
    <section class="container-internal">
      <header class="header-profile">
          <div class="user-photo-container-profile">
            <a class="user-link-photo  user-link-photo-profile">
              <img src="../img/icons/icon-photo.png" class="user-photo-profile" alt="Foto do perfil">
            </a>
            <a href="#edit-profile" class="button-icon-profile">
              <img src="../img/icons/icon-edit.png" class="icon-user-profile" alt="Editar perfil">
              <p class="post-icon-text">editar</p>
            </a>
          </div>
          <div class="user-information">
            <a>
              <p class="user-name">Nome do Usuário</p>
            </a>
            <p class="language">Javascript, HTML, CSS</p>
            <p class="work">Desenvolvedora Front-End</p>
            <textarea class="user-description-text" autocomplete="on" rows="1" cols="70" minlength="2" spellcheck="true" wrap="hard" readonly>${textPost}</textarea>
          </div>
      </header>
    </section>
  `;

  const listPost = container.querySelector('.container-internal');
  listPost.append(createListPost());

  return container;
}

function createListPost (){
  const container = document.createElement('section');
  container.setAttribute('class', 'container-internal-list');
  container.innerHTML = `
    <ul class="cards-timeline">
      <li class="post-card-timeline">
        <article class="user-post">
          ${createPost()}
        </article>
      </li>
    </ul>
  `;
  const userPost = container.querySelector('.user-post');
  userPost.append(createAddComment());
  userPost.append(createComment());
  return container;
}