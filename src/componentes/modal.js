import { editPosts } from "../lib/config-firestore.js";

export function modalEditPost(post, containerFeed) {
    const modalContainer = document.createElement('div');
    const ModalEdit = `
    <div id='modal-container' class='modal-container'>
      <p class='text-reset edit'>Edição de postagem</p>
        <div>
          <textarea name='textarea' maxlength='300' id='postEdit' class='message text-writing writing-modal'
            placeholder='Digite Sua teoria aqui'>${post.post}</textarea>
        </div>
        <span class='error-message'></span>
        <div class='save-container'>
          <button id='save-post' class='button'>Salvar</button>
          <button id='button-cancel' class='button-cancel button'>Cancelar</button>
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
  
 