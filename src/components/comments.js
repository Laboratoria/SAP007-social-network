import { removeCommentPost } from '../pages/feed/firestore-functions.js';

export function createComments(comment, user, idPost) {
  const dateComment = new Date(comment.day.seconds * 1000);
  const timelineComment = document.createElement('div');
  timelineComment.setAttribute('class', 'box-comment flex column');
  timelineComment.innerHTML = `
    <div class="informations-user flex">
      <div class="photo-name-post flex">
        <figure class="section-figure-comment flex"><img src="./img/line.svg" class="section-figure-comment-img"></figure>
        <figure class="post-img-user"><img class="post-img-user" src="${comment.imgProfile}" alt="user"></figure>
        <div class="name-modified-status flex column">
          <p class="post-name-user">${comment.name}</p>          
        </div>
      </div> 
      <nav class="nav-remove-comment flex">
      </nav>
    </div>
    <div class="post-text-comment flex column">
      <p class="post-date">${dateComment.getDate()}/${(dateComment.getMonth() + 1)}/${dateComment.getFullYear()} ${dateComment.getHours()}:${dateComment.getMinutes()}</p>
      <p class="post-text" id="post-text">${comment.message}</p>
    </div>`;

  const navComment = timelineComment.querySelector('.nav-remove-comment');
  if (user.uid === comment.userUid) {
    const buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('class', 'btn-config remove-comment');
    buttonDelete.innerHTML = `
      <img src="./img/iconeLixeira.png" alt="Icone remover post" class="img-delete img-delete-comment">`;
    navComment.appendChild(buttonDelete);
    const modalDelete = document.createElement('section');
    modalDelete.setAttribute('class', 'modal-delete');
    modalDelete.innerHTML = `
    <div class="modal-delete-confirm">
      <h3 class="title-modal-delete">Você tem certeza que deseja excluir esse comentário?</h3>
      <button class="confirm-remove btn-edit-style">Confirmar</button>
      <button class="close-remove btn-edit-style">Cancelar</button>
    </div>
    `;
    timelineComment.appendChild(modalDelete);
    const btnCancelRemoveComment = modalDelete.querySelector('.close-remove');
    const btnConfirmRemoveComment = modalDelete.querySelector('.confirm-remove');
    const removeComment = timelineComment.querySelector('.remove-comment');

    removeComment.addEventListener('click', () => {
      modalDelete.style.display = 'block';
    });
    btnConfirmRemoveComment.addEventListener('click', () => {
      removeCommentPost(idPost, comment).then(() => {
        timelineComment.innerHTML = '';
      }).catch((error) => console.log(error));
    });

    btnCancelRemoveComment.addEventListener('click', () => {
      modalDelete.style.display = 'none';
    });
  }

  return timelineComment;
}
