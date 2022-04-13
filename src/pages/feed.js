// importar funções de autenticação do Firebase a partir da parta 'services'

export default function signin() {
  const feed = document.createElement('section');
  feed.innerHTML += `
  <section class="main-content">
    <nav class="filter-menu"> 
      <img src="assets/lupas.png" alt="ícone-lupa"><input type="text" class="recipe-search" placeholder="Buscar receita"/>
      <button class="logout-btn">Sair</button>
    </nav>
    <div class="new-post-container">
      <textarea id="write-post" class="post-content" placeholder="Postar nova receita"></textarea>
      <button class="post-btn">Postar</button>
    </div>
    <div class="older-posts-container">
      <ol class="posts">
        <li> <b>Bolo de cenoura</b>
             <p>Receita por:</p>
        </li>
        <a class="cookie-btn"><img src="assets/cookie.png" alt="ícone-cookie" class="cookie-icon"></a>
        <a class="pencil-btn"><img src="assets/pencil.png" alt="ícone-lápis" class="pencil-icon"></a>
        <a class="trash-btn"><img src="assets/trash.png" alt="ícone-lixo" class="trash-icon"></a>
      </ol>
    </div>
  </section>
    `;

  // const searchRecipe = feed.querySelector('#recipe-search');
  // const logOut = feed.querySelector('#logout-btn');
  // const writePost = feed.querySelector('#post-btn');
  // const cookie = feed.querySelector('#cookie-btn');
  // const editPost = feed.querySelector('#pencil-btn');
  // const deletePost = feed.querySelector('#trash-btn');

  //   searchRecipe.addEventListener('keyup', function(){

  //   }

  //   )

  //   logOut.addEventListener('click', function(){

  //   }

  //   )
  //   writePost.addEventListener('click', function(){

  //   }

  //   )

  //   cookie.addEventListener('click', function(){

  //   }

  //   )

  //   editPost.addEventListener('click', function(){

  //   }

  //   )

  //   deletePost.addEventListener('click', function()

  // })

  return feed;
}
