export function postComponent(post) {
  const postsContainer = document.createElement("div");
  postsContainer.classList.add("new-post-writePost");

  const templatePost = `
  <div class= "post-container">
    <ol class="posts">
      <li> <b>Titulo:</b>
        <p>Receita por:</p> 
        <p>Descriçao</p>
      </li>
    </ol>

    <div class="like-container">
      <a class="cookie-btn"><img src="assets/cookie.png" alt="ícone-cookie" class="cookie-icon"></a>
      <span class="cookies-number" id="num-cookies">10</span>
    </div>

    <div class="edit-container">
      <a class="pencil-btn"><img src="assets/pencil.png" alt="ícone-lápis" class="pencil-icon"></a>
    </div>

    <div class="delete-container">
    <a class="trash-btn"><img src="assets/trash.png" alt="ícone-lixo" class="trash-icon"></a>
    </div>

  </div>
  `;


  postsContainer.innerHTML = templatePost;

  return postsContainer;
}



//    // const cookie = feed.querySelector('#cookie-btn');
//   // const editPost = feed.querySelector('#pencil-btn');
//   // const deletePost = feed.querySelector('#trash-btn');

//   //   cookie.addEventListener('click', function(){

//   //   })

//   //   editPost.addEventListener('click', function(){

//   //   })

//   //   deletePost.addEventListener('click', function()

//   // })