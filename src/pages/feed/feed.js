import {
  newPost,
  allPosts
} from "../../configs/firestore.js";
import {
  logout,
  auth,
} from "../../configs/authentication.js";

export default () => {
  const container = document.createElement("div");
  container.classList.add("content-feed")
    
  const templateFeed = `
    
    <header class="header">
    <img class="header-imagem" src="./img/logo3.png" alt="logo">
    <nav class="header-menu">
        <a class="header-menu-item" href="#">Sobre nós</a>
        <a class="header-menu-item" href="#">Meu Perfil</a>
        <input class="header-menu-item input-search" type="search" id="input-search "placeholder="Pesquisar poemas...">
        <a class="header-menu-item link-login" href="#login" id="btn-exit">Sair</a>
    </nav>
    </header>
    
    <main class="main">
        <form class="write-post main-form" id="write-post">
          <h1 class="welcome-title">Bem-vindo(a), poeta!</h1>
          <textarea class="input-text" id="textarea" placeholder="Escreva seu poema aqui"></textarea>
          <p id="alert-notification"></p>
          <button class="btn-publish" id="btn-publish" type="submit"> Publicar </button>
        </form>

        <section class="new-post" id="new-post">
        </section>
        <section class="publications" id="publications">
            Últimos poemas:
        </section>
    </main> 
    `;

  container.innerHTML = templateFeed;
    
  //template do card do post
  function createCardPost (addNewPost, displayName, date) {
    const containerPost = document.createElement("div");
    const templateCardPost = `
      <div class="card">
        <p class="date-card">Postado em:${date}</p}
        <section class="post-infos">
          <p class="write-message">${addNewPost}</p>    
          <p class="author">${displayName}</p>
          <button class="button-heart" id="button-heart">
            <img class="heart-img" src="img/icone-coração.png">
            <span class="button-heart-text">Gostei</span>
          </button>  
        </section>
      </div>    
    `;
    containerPost.innerHTML = templateCardPost;
    return containerPost;
  }

  const showNewPost = container.querySelector('#new-post');
  const addNewPost = container.querySelector('#textarea');
  const showPosts = container.querySelector('#publications');
  const buttonPublic = container.querySelector('#btn-publish');
  const logoutButton = container.querySelector('#btn-exit');
  let msgAlert = container.querySelector('#alert-notification')

  //função para sair do seu login
  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logout()
      .then(function () {
        window.location.hash='#login';
      })
  })

  function formatDate (date) {
    return `${date.toLocaleDateString()} às 
      ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  } 
  
  //publicar novo post
  buttonPublic.addEventListener("click", (e) => {
    e.preventDefault();
    if (addNewPost.value === ""){
      msgAlert.innerHTML = "Escreva uma poesia"
    } 
    else {
      newPost(addNewPost.value, auth.currentUser)
      .then(function (post) {
        showNewPost.appendChild(createCardPost(addNewPost.value, auth.currentUser, formatDate(post.date)));
      })
    }
  })
  
  //aparecer todos os posts
  const showAllPosts = async () => {
    const timeline = await allPosts();
    timeline.forEach((post) => {
      const postElement = createCardPost(post.message, post.displayName, formatDate(post.date.toDate()));
      showPosts.appendChild(postElement)
    });
  }

  showAllPosts();    

  return container;
}

