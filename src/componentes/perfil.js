import { deletePost } from "../lib/firestore-firebase.js";
import edit from "./edit.js";
import { auth } from "../lib/config-firebase.js";

export function profilePosts(post) {
  const currentUser = auth.currentUser;
  const templateProfile = document.createElement("div");
  templateProfile.classList.add("body-template-post");

  const time = post.date;
  const formatDate = new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
  const date = formatDate.toLocaleDateString("pt-br");

  templateProfile.innerHTML = `    
      <div class="section-post-published">
        <p class="username-post">${post.user}</p>
        <p class="date-post">${date}</p>
        <p class="HQ-title-post">${post.titleHQ}</p>
        <p class="message-post">${post.message}</p>
        <div class="container-like">
          <img class="img-like" src=${checkLikes()} alt="botão de like"/>
          <p class="like-counter" id="like-${post.id}">${post.like.length}</p>
        </div>
        <div class="buttons-edit-delete">
          <button class="edit-button">editar</button>
          <button class="post-delete-button">excluir</button>
        </div>
        <span class="error-edit"></span>
      </div>
    `;

  const error = templateProfile.querySelector(".error-edit");

  const deleteButton = templateProfile.querySelector(".post-delete-button");
  deleteButton.addEventListener("click", () => {
    deletePost(post.id).then(() => {
      if (confirm("Você tem certeza?")) {
        templateProfile.remove();
      } else {
        window.location.hash = "posts";
      }
    }).catch(() => {
      error.textContent = "não foi possivel deletar o post.";
    });
  });

  // Função que edita o post (editButton vai mandar para a pagina de edição)
  const message = templateProfile.querySelector(".message-post");
  const titleHQ = templateProfile.querySelector(".HQ-title-post");

  const editButton = templateProfile.querySelector(".edit-button");
  editButton.addEventListener("click", (e) => {
    e.preventDefault();
    templateProfile.appendChild(edit(post, message, titleHQ));
  });

  function checkLikes() {
    if (post.like.includes(currentUser.uid)) {
      return "./images/liked.png";
    }
    return "./images/like.png";
  }

  return templateProfile;
}

