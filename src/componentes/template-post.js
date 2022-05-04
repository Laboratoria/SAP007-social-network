import { deletePost } from "../lib/firestore-firebase.js"
import edit from "./edit.js";

export function publishingPosts(post) {
  const templatePost = document.createElement("div");
  templatePost.classList.add("body-template-post");

  const time = post.date;
  const formatDate = new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
  const date = formatDate.toLocaleDateString("pt-br");
  const atTime = formatDate.toLocaleTimeString(["pt-br"], { timeStyle: 'short' });

  templatePost.innerHTML = `    
      <div class="section-post-published">
        <p class="username-post"></p>
        <p class="date-post">${date}, ${atTime}</p>
        <p class="HQ-title-post">${post.titleHQ}</p>
        <p class="message-post">${post.message}</p>
        <div class="likes-post">
          LIKE
        </div>
        <div class="buttons-edit-delete">
          <button class="edit-button">editar</button>
          <button class="post-delete-button">excluir</button>
        </div>
      </div>
    `;

  
  //Função que deleta o post
  const deleteButton = templatePost.querySelector(".post-delete-button");
  deleteButton.addEventListener("click", () => {
    deletePost(post.id).then(() => {
      templatePost.remove();
    }).catch((error) => {
      alert("não foi possivel deletar o post.")
    })
  })

  //Função que edita o post
  const message = templatePost.querySelector(".message-post");
  const titleHQ = templatePost.querySelector(".HQ-title-post");

  const editButton = templatePost.querySelector(".edit-button");
  editButton.addEventListener("click", (e) => {
    (e).preventDefault();
    /*const post = {
      message: message.valu,
      title: titleHQ.value,
    }*/
    templatePost.appendChild(edit(post, message, titleHQ))
    //window.location.hash = "edit"
    //editbutton vai mandar para a pagina de edição
  })

  return templatePost
}

