
export const mostrarPosts = (dataPost, user,idPost) => {
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
  };

  