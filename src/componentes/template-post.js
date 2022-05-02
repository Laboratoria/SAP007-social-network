
export function publishingPosts(post) {
  const templatePost = document.createElement("div");
  templatePost.classList.add("body-template-post");

  templatePost.innerHTML = `    
      <div class="section-post-published">
        <p class="username-post"></p>
        <p class="date-post">${post.date}</p>
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

