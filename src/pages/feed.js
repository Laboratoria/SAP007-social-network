import { logout, current } from "../services/authentication.js";
import { menu } from "./elements/menu.js";
import { deletePost, getAllPosts, like, editedPost } from "../services/firestore.js";

export default () => {
  const feedHome = document.createElement('div');
  feedHome.classList.add('feedHome');

  feedHome.innerHTML = `
    <section class="header">
      <img src="../img/logo.png" alt="Logo Laboriam">
    </section>
    <section class="container-feed">
      <div class="feed">
        <ul class="post-list"></ul>
      </div>
    </section>
    <section class="responsive-menu">
      <div class="picture">
        <img src="${current().photoURL}" alt="Foto do usuário logado" class="userPhotoInTheMenu">
        <h2>${current().displayName}</h2>
      </div>
      <div id="menu" class="menu"></div>
    </section>
  `;

  const menuNavigation = feedHome.querySelector('#menu');
  const postList = feedHome.querySelector('.post-list');
  const loggedInUser = current();

  menuNavigation.innerHTML = menu;

  getAllPosts()
  .then(posts => {
    const postTemplate = posts.map(post => {
      const editAndDeleteButtons = post.userId == loggedInUser.uid ? `
        <div class="edit-delete">
          <button type="button" data-edit="true" class="edit-button material-icons"></button>
          <button type="button" data-delete="true" class="delete-button material-icons"></button>
        </div>` : '';

      return `
        <li class="post" data-id="${post.id}">
          <section class="post-header">
            <picture>
              <img src="${post.photo}" alt="Foto do usuário" class="user-photo">
            </picture>
            <div class="header-information">
              <p class="username">${post.displayName}</p>
              <div class="post-date">
                <p>${post.date} às ${post.hour}</p>
              </div>
            </div>
          </section>
          <section class="post-text">
            <p data-textId="${post.id}" data-text="${post.post}" contenteditable="false">${post.post}</p>
            <div class="saveAndCancelButtons">
              <button data-save="true" class="save-button">Salvar</button>
              <button data-cancel="true" class="cancel-button">Cancelar</button>
            </div>
          </section>
          <section class="post-footer">
            <div class="likes">
              <button type="button" data-like="true" class="like-button material-icons ${post.likes.includes(loggedInUser.uid) ? 'curtido' : ''}"></button>
              <span class="likes-counter">${post.likes.length}</span>
            </div>
            ${editAndDeleteButtons}
          </section>
          <div class="modal">
            <div class="internal-modal">
              <p>Deseja excluir?</p>
              <button data-yes="true" class="yes-button">Sim</button>
              <button data-no="true" class="no-button">Não</button>
            </div>
          </div>
        </li>`
    }).join('')

    postList.innerHTML = postTemplate;

    const eachPost = feedHome.querySelectorAll('.post');

    eachPost.forEach(post => {
      post.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const iconLike = post.querySelector('.like-button');
        const postEdit = feedHome.querySelector(`[data-textId='${id}']`);
        const likesCounter = post.querySelector('.likes-counter');
        const buttonsEdit = postEdit.nextElementSibling;

        if(e.target.dataset.delete) {
          const modal = e.currentTarget.querySelector('.modal');
          modal.style.display = 'flex';
        } else if(e.target.dataset.yes) {
          const modal = e.currentTarget.querySelector('.modal');
          modal.style.display = 'none';
          deletePost(id)
          .then(() => {
            post.remove();
          })
        } else if(e.target.dataset.no) {
          const modal = e.currentTarget.querySelector('.modal');
          modal.style.display = 'none';
        } else if(e.target.dataset.like) {
          like(id, iconLike)
          .then((status) => {
            likesCounter.textContent = status.count;
          })
        } else if(e.target.dataset.edit) {
          postEdit.contentEditable = true;
          buttonsEdit.style.display = 'flex';
        } else if (e.target.dataset.cancel) {
          postEdit.contentEditable = false;
          buttonsEdit.style.display = 'none';
          postEdit.textContent = postEdit.dataset.text;
        } else if (e.target.dataset.save) {
          postEdit.contentEditable = false;
          buttonsEdit.style.display = 'none';
          postEdit.dataset.text = postEdit.textContent;
          editedPost(id, postEdit.textContent)
        }
      })
    })
  })

  const logoutButton = feedHome.querySelector('#signout');

  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });

  return feedHome
};