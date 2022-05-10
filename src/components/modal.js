import { editPost, deletePost } from '../lib/firestore.js';

export function modalEditPost(postObj, postContainer) {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const modalEdit = `
  <div id="edit-modal" class="modal-content">
    <input class="title-edition" id="title-edit" type="text" placeholder="Título">${postObj.title}
    <textarea class="recipe-edition" id="recipe-edit" type="text" placeholder="Receita" wrap="hard">${postObj.recipe}</textarea>
    
    <button class="btn-update" id="cancel-update-btn" >Cancelar</button>
    
    <button class="btn-update" id="update-btn" >Atualizar</button>
    
    <span id="error" class="error-message"></span>
  </div>
    `;
  modalContainer.innerHTML = modalEdit;

  const editModal = modalContainer.querySelector("#edit-modal");
  const saveEdit = modalContainer.querySelector("#update-btn");
  const cancelEdit = modalContainer.querySelector('#cancel-update-btn');
  const errorMessage = modalContainer.querySelector("#error");
  const newTitle = modalContainer.querySelector("#title-edit");
  const newRecipe = modalContainer.querySelector("#recipe-edit")

  saveEdit.addEventListener('click', () => {
    if (newTitle.value === '' || newRecipe.value === '') {
      errorMessage.classList.add('error');
      errorMessage.innerHTML = 'Opsss! ocorreu um erro Tente novamente.';
    } else {
      editPost(postObj.id, newTitle.value, newRecipe.value).then(() => {
        const saveTitle = modalContainer.querySelector('#title-edit');
        const saveRecipe = modalContainer.querySelector('#recipe-edit');
        saveTitle.innerHTML = newTitle.value;
        saveRecipe.innerHTML = newRecipe.value;

        modalContainer.remove();
      });
    }
  });

  cancelEdit.addEventListener('click', () => {
    modalContainer.remove();
  });

  window.addEventListener('click', (e) => {
    if (e.target === editModal) {
      modalContainer.remove();
    }
  });
  return modalContainer;
}

// saveEdit.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (newTitle.value.length >= "3" && newRecipe.value.length >= "3") {
//     editPost(postObj.id, newTitle.value, newRecipe.value)
//       .then(() => {
//         const titleContent = feedContainer.querySelector('#title-recipe');
//         const recipeContent = feedContainer.querySelector('#recipe-content');
//         newTitle.innerHTML = titleContent.value;
//         newRecipe.innerHTML = recipeContent.value;
//       })
//       .catch(() => {
//         console.log("error");
//       });
//   } else if (newTitle.value === "" || newRecipe.value === "") {
//     errorMessage.innerText = "Preencha todos os campos acima";
//   } else (newRecipe.value.length < "10"); {
//     errorMessage.innerText = "Preencha a mensagem acima com mais de 10 caracteres";
//   }
// });
// cancelEdit.addEventListener("click", (e) => {
//   e.preventDefault();
//   editModal.innerHTML = "";
// });
// return modalContainer;
// }

export function modalDeletePost(postObj, postContainer) {
  const modalContainer = document.createElement("div");
  const template = `
  <div id="delete-modal" class="modal-delete">
      <p class="delete-message">Tem certeza que quer excluir essa receita?</p>

      <button class="delete-btn" id="yes-btn" type="submit">Excluir</button>
      <button class="cancel-delete-btn" id="no-btn" type="submit">Cancelar</button>
  </div>
  `;
  modalContainer.innerHTML = template;

  const deleteModal = modalContainer.querySelector('#delete-modal');
  const confirmBtn = modalContainer.querySelector('#yes-btn');
  const declineBtn = modalContainer.querySelector('#no-btn');

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    deletePost(postObj.id).then(() => {
      postContainer.remove();
    });
  });

  declineBtn.addEventListener("click", (e) => {
    e.preventDefault();
    deleteModal.innerHTML = "";
  });

  window.addEventListener('click', (e) => {
    if (e.target === deleteModal) {
      modalContainer.remove();
    }
  });

  return modalContainer;
}
