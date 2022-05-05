import { deletePost, editPost } from '../lib/firestore.js';

export default function card(item) {
  const publications = document.createElement('div');
  publications.setAttribute('class', 'publicated');
  const id = item.id;
  const mold = `
    <h3 class="published-title" id="title-${id}">${item.title}</h3>
    <p class="published-text" id="text-${id}">${item.text}</p>
    <div class="user-name">${item.user}</div>
    <div>
    <button class="edit">editar</button>
    <button class="delete" type="submit" id="delete">deletar</button>
    </div>
    <span class="edition"></span>
    <span class="confirm-delete"></span>
    `;

  publications.innerHTML = mold;

  const deleteAction = publications.querySelector('.delete');
  const deleteConfirm = publications.querySelector('.confirm-delete');

  deleteAction.addEventListener('click', async (e) => {
    e.preventDefault();
    deleteConfirm.innerHTML += `
    <p>Certeza que deseja deletar a sua contribuição?</p>
    <button class="btn-delete-confirm" id="yes">Sim</button>
    <button class="btn-delete-confirm" id="no">Não</button>
    `;
    const btnYes = document.getElementById('yes');
    const btnNo = document.getElementById('no');

    btnYes.addEventListener('click', (e) => {
      e.preventDefault();
      deletePost(id);
      publications.remove();
    });
    btnNo.addEventListener('click', (e) => {
      deleteConfirm.innerHTML = '';
    });
  });

  const editAction = publications.querySelector('.edit');
  const edition = publications.querySelector('.edition');
  const title = publications.querySelector(`#title-${id}`);
  const text = publications.querySelector(`#text-${id}`);

  editAction.addEventListener('click', (e) => {
    e.preventDefault();
    edition.innerHTML += `
    <textarea class="title" id="title"type="text" placeholder="Título">${item.title}</textarea>
    <textarea class="text" id="text"type="text" placeholder="Texto" wrap="hard">${item.text}</textarea>
    <button class="btn-update" id="update"type="submit">Atualizar</button>
    `;
    const valueTitle = document.getElementById('title');
    const valueText = document.getElementById('text');
    const updatePost = document.getElementById('update');

    updatePost.addEventListener('click', (e) => {
      e.preventDefault();
      editPost(id, valueTitle.value, valueText.value);
      title.textContent = valueTitle.value;
      text.textContent = valueText.value;
      edition.innerHTML = '';
    });
  });

  return publications;
}
