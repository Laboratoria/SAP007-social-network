import { deletePost } from "../../lib/config-firestore.js";

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

