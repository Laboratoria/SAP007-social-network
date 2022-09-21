import { editPosts, deletePost } from '../lib/config-firestore.js';

export function modalEditPost(post, containerFeed) {
  const modalContainer = document.createElement('div');
  const ModalEdit = `
    <div id='modal-container' class='modal-container modal'>
      <p class='text-reset edit'>Edição de postagem</p>
        <div>
          <textarea name='textarea' maxlength='300' id='postEdit' class='message text-writing writing-modal'
            placeholder='Digite Sua teoria aqui'>${post.post}</textarea>
        </div>
        <span class='error-message'></span>
        <div class='save-container'>
          <button id='save-post' class='btnStyle'>Salvar</button>
          <button id='button-cancel' class='button-cancel btnStyle'>Cancelar</button>
        </div>
      </div>
      `;

  modalContainer.innerHTML = ModalEdit;

  const modal = modalContainer.querySelector('#modal-container');
  const saveEdit = modalContainer.querySelector('#save-post');
  const posteditado = modalContainer.querySelector('#postEdit');
  const buttonCancel = modalContainer.querySelector('#button-cancel');
  const msgAlert = modalContainer.querySelector('.error-message');
  const inputPost = containerFeed.querySelector(`#postText-${post.id}`);

  saveEdit.addEventListener('click', () => {
    if (posteditado.value === '') {
      msgAlert.classList.add('error');
      msgAlert.innerHTML = 'Opsss! ocorreu um erro Tente novamente.';
    } else {
      editPosts(post.id, posteditado.value).then(() => {
        inputPost.innerHTML = posteditado.value;
        modalContainer.remove();
      });
    }
  });

  buttonCancel.addEventListener('click', () => {
    modalContainer.remove();
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modalContainer.remove();
    }
  });
  return modalContainer;
}

export function modalDeletePost(post, containerFeed) {
  const modalDelContainer = document.createElement('div');
  const ModalDeleteTemplate = `
  <div id='modal-delete' class='modal-delete modal'>
    <p class='text-delete'>Tem certeza que deseja excluir a postagem?</p>
        <p>${post.titulo}</p>
      <span class='error-message'></span>
      <div class='button-container'>
        <button id='delete-post' class='btnStyle'>Excluir</button>
        <button id='button-cancel' class='button-cancel btnStyle'>Cancelar</button>
      </div>
    </div>
    `;

  modalDelContainer.innerHTML = ModalDeleteTemplate;

  const modalDelete = modalDelContainer.querySelector('#modal-delete');
  const deletePostBtn = modalDelContainer.querySelector('#delete-post');
  const buttonCancel = modalDelContainer.querySelector('#button-cancel');

  deletePostBtn.addEventListener('click', () => {
    deletePost(post.id);
    containerFeed.remove(post);
  });

  buttonCancel.addEventListener('click', () => {
    modalDelContainer.remove();
  });

  window.addEventListener('click', (e) => {
    if (e.target === modalDelete) {
      modalDelContainer.remove();
    }
  });

  return modalDelContainer;
}
