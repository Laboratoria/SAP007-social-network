import { removePost, editPost } from '../pages/feed/firestore-functions.js';

export function postElement(post, uid) {
  const date = new Date(post.day.seconds * 1000);
  const timelinePost = document.createElement('div');
  timelinePost.setAttribute('class', 'box-post flex column');
  timelinePost.innerHTML = `
    <div class="informations-user flex">
      <div class="photo-name-post flex">
        <figure class="post-img-user" ><img class="post-img-user" src="${post.imgProfile}" alt="user"></figure>
        <div class="name-modified-status flex column">
          <p class="post-name-user">${post.name}</p>
          <div class="message-modified-post">
            <p class="post-modified" id="post-modified">${post.edit}</p>
          </div>
        </div>
      </div> 
      <nav class="nav-remove-modify flex">
      </nav>
    </div>
    <div class="post-text-id flex column">
      <p class="post-date">${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p>
      <p class="post-text" id="post-text">${post.message}</p>
    </div>
    <div class="like-comment flex">
      <button class="post-like"><img src="" alt="">Gostei</button>
      <button class="post-comment"><img src="" alt="">Comentar</button>
    </div>`;

  const navRemoveModifie = timelinePost.querySelector('.nav-remove-modify');
  const mainPost = timelinePost.querySelector('.post-text-id');

  const modifyForm = document.createElement('form');
  modifyForm.setAttribute('class', 'form-modify-post');
  modifyForm.innerHTML = `
  <input class="modify-input-value" id="data-input-value">
  <button class="confirm-modify" id="data-confirm-edit">Confirmar Editar</button>
  <button class="close-modify" id="data-cancel-edit">Cancelar Editar</button>
  `;
  // /\ aqui será o menu de configurações que só aparece pro usuário dono do post
  if (uid === post.userUid) {
    mainPost.appendChild(modifyForm);
    navRemoveModifie.innerHTML = `
      <button class="btn-config-post">
        <span id="balls" class="balls"></span>
      </button>
      <ul class="configs-post">
        <li><button value="remove"
        id="data-post-remove" 
        class="remove btn-config">Remover</button></li>
        <li><button value="modify" id="data-post-modify" class="modify
        btn-config">Editar</button></li>
      </ul>`;

    const btnRemove = timelinePost.querySelector('#data-post-remove');
    const btnEdit = timelinePost.querySelector('#data-post-modify');
    const btnCancelEdit = timelinePost.querySelector('#data-cancel-edit');
    const btnConfirmEdit = timelinePost.querySelector('#data-confirm-edit');
    const inputModify = timelinePost.querySelector('#data-input-value');

    btnRemove.addEventListener('click', () => {
      console.log('cliquei');
      removePost(post.idPost).then((a) => console.log(a)).catch((error) => console.log(error));
    });

    btnEdit.addEventListener('click', () => {
      modifyForm.style.display = 'block';
      inputModify.value = timelinePost.querySelector('#post-text').textContent;
    });

    btnCancelEdit.addEventListener('click', (e) => {
      e.preventDefault();
      inputModify.value = '';
      modifyForm.style.display = 'none';
    });

    btnConfirmEdit.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputModify.value !== post.message && inputModify.value.trim().length !== 0) {
        editPost(post.idPost, inputModify.value)
          .then(() => {
            timelinePost.querySelector('#post-text').textContent = inputModify.value;
            inputModify.value = '';
            modifyForm.style.display = 'none';
            timelinePost.querySelector('#post-modified').textContent = 'Editado';
          }).catch((error) => console.log(error));
      } else {
        inputModify.value = '';
        modifyForm.style.display = 'none';
      }
    });
  }
  return timelinePost;
}
