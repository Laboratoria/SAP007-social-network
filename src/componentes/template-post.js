import { infoUser, creatPost } from "../lib/firestore-firebase.js";


export function publishingPosts(post, user) {
  const userDate = infoUser();
  const postItens = creatPost();
  const templatePost = document.createElement("div");
  templatePost.classList.add("body-template-post");

  templatePost.innerHTML = `    
    <div class="section-post">
      <div class="section-new-post-published">
        <p class="username">${userDate.user}</p>
        <p class="date">${postItens.data}</p>
        <p class="HQ-title">${postItens.titleHQ}</p>
        <p class="message">${postItens.message}</p>
        <div class="likes">
          likes
        </div>
        <div class="buttons-edit-delete">
          <button class="edit-button">editar</button>
          <button class="post-delete-button">excluir</button>
        </div>
      </div>
    </div>
    `;

  publishingPosts(userDate, postItens);
  return templatePost

}


/*export const mostrarPosts = (dataPost, user,idPost) => {
    const mostraPosts = document.createElement('div');
    mostraPosts.classList.add('painelPost');
  
    mostraPosts.innerHTML = `
    <div class="usuarioPost" id= "${idPost}">
        <div class="infoUsuarioPost">
            <div class="nomeUsuarioPost"><p>${user.username}</p></div>
        </div>
    </div>
    </div>
    <div class=""> 
      <i class="like" name= "${idPost}"}></i>
      <p>${dataPost.likes.length}</p>
      <i class="ph-chat-centered-dots comment" name= "${idPost}"}></i>
      <p>${dataPost.likes.length}</p>   
    </div>
    `;
  
    return mostraPosts;
  };*/

