import { editPost, deletePost } from '../lib/firestore.js';

export function modalEditPost(postObj, postContainer) {
  const modalContainer = document.createElement("div");
  const template = `
  <div id="edit-modal" class="modal-content">
    <input class="title-edition" id="title-edit" type="text" placeholder="Título">${postObj.title}
    <textarea class="recipe-edition" id="recipe-edit" type="text" placeholder="Receita" wrap="hard">${postObj.recipe}</textarea>
    
    <button class="btn-update" id="cancel-update-btn" >Cancelar</button>
    
    <button class="btn-update" id="update-btn" >Atualizar</button>
    
    <p id="error" class="error"></p>
  </div>
    `;
  modalContainer.innerHTML = template;

  const editModal = modalContainer.querySelector("#edit-modal");
  const saveEdit = modalContainer.querySelector("#update-btn");
  const cancelEdit = modalContainer.querySelector('#cancel-update-btn');
  const title = modalContainer.querySelector("#title-edit");
  const recipe = modalContainer.querySelector("#recipe-edit");
  const errorMessage = modalContainer.querySelector("#error");

  saveEdit.addEventListener("click", (e) => {
    e.preventDefault();
    if (title.value.length >= "3" && recipe.value.length >= "3") {
        editPost(postObj.id, title.value, recipe.value)
          .then(() => {
            const newTitle = postContainer.querySelector("#title-edit");
            const newRecipe = postContainer.querySelector("#recipe-edit");
            newTitle.innerHTML = title.value;
            newRecipe.innerHTML = recipe.value;
            // modalContainer.remove();
          })
          .catch(() => {
            console.log("error");
          });
      } else if (title.value === "" || recipe.value ==="") {
    errorMessage.innerText = "Preencha todos os campos acima";
    } else (recipe.value.length < "100"); {
      errorMessage.innerText = "Preencha a mensagem acima com mais de 100 caracteres";
    }
  });
  cancelEdit.addEventListener("click", (e) => {
    e.preventDefault();
    editModal.innerHTML="";
  }); 
  return modalContainer;
}

export function modalDeletePost(postObj, postContainer) {
  const modalContainer = document.createElement("div");
  const template = `
  <div id="delete-modal" class="modal">
      <p>Tem certeza que quer excluir essa receita?</p>

      <button class="span-delete-btn" id="yes-btn" type="submit">Excluir</button>
      <button class="span-delete-btn" id="no-btn" type="submit">Cancelar</button>
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
    deleteModal.innerHTML="";
  });
  
  return modalContainer;
}
