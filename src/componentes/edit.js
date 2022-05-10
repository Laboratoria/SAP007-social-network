import { editPost } from "../lib/firestore-firebase.js";

export default function edit(post, messageP, titleP) {
  const editPage = document.createElement("div");
  editPage.classList.add("body-edit");

  editPage.innerHTML = `          
      <div id="edit-post" class="container-edit-post">
        <div class="edit-post">
          <form class="form-edit-post">
            <input type="text" id="title-post" class="edit-title" value="${post.titleHQ}">
            <textarea name="textarea" id="message" class="edit-message">${post.message}</textarea>
            <div class="buttons-save-cancel">
              <button id="save-button" class="button-save">salvar</button>
              <button id="cancel-button" class="button-cancel">cancelar</button>
            </div>  
          </form>
        </div>
      </div> 
      `;

  const message = editPage.querySelector("#message");
  const titleHQ = editPage.querySelector("#title-post");

  //Função caso a pessoa desistar de editar, então clica no botão cancelar e volta para o perfil
  /*const cancelButton = editPage.querySelector("#message");
  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    cancelEdit().then(() => {
      window.location.hash = "posts"
    })
  })*/

  //Função que edita o post
  const saveButton = editPage.querySelector("#save-button");
  saveButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(post.id, message.value, titleHQ.value)
    editPost(post.id, message.value, titleHQ.value).then(() => {
      titleP.innerHTML = titleHQ.value;
      messageP.innerHTML = message.value;
      editPage.remove()
    })
  })


  return editPage

}
