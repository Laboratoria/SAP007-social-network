import {
  newPost,
  allPosts
} from "../../configs/firestore.js";
import {
  logout,
  //auth 
} from "../../configs/authentication.js";

export default () => {
  const container = document.createElement("div");
  container.classList.add("content-feed")
    
  const templateFeed = `
    
    <header class="cabecalho">
    <img class="cabecalho-imagem" src="./img/logo3.png" alt="logo">
    <nav class="cabecalho-menu">
        <a class="cabecalho-menu-item" href="#">Sobre nós</a>
        <a class="cabecalho-menu-item" href="#">Meu Perfil</a>
        <input class="cabecalho-menu-item input-search" type="search" id="input-search "placeholder="Pesquisar poemas...">
        <a class="cabecalho-menu-item link-login" href="#login" id="btn-exit">Sair</a>
    </nav>
    </header>
    
    <main class="conteudo">
        <div class="escreverPost conteudo-principal" id="escreverPost">
            <h1>Bem-vindo(a), poeta!</h1>
        <textarea class="input-text" id="textarea" placeholder="Escreva seu poema aqui"></textarea>
        <button class="btn-publicar" id="btn-publish" type="submit"> Publicar </button>
        </div>

        <section class="new-post" id="new-post">
        </section>
        <section class="publicacoes" id="publications">
            Últimos poemas:
        </section>
    </main> 
    `;

  container.innerHTML = templateFeed;
    
  //template do card do post
  function createCardPost (addNewPost, date) {
    const containerPost = document.createElement("div");
    const templateCardPost = `
      <div class="card">
        <p class="date-card">Postado em:${date}</p}
        <section class="post-infos">
          <p class="write-message">${addNewPost}</p>    
          <p class="author">${addNewPost}</p>
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

  //função para sair do seu login
  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logout()
      .then(function () {
        window.location.hash='#login';
      })
  })

  function formatDate (date) {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} às 
      ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }    
    
  //publicar novo post
  buttonPublic.addEventListener("click", (e) => {
    e.preventDefault();
    newPost(addNewPost.value)
    .then(function () {
      let date = new Date();
      showNewPost.appendChild(createCardPost(addNewPost.value, formatDate(date)));
    }); 
  })
  
  //aparecer todos os posts
  const showAllPosts = async () => {
    const timeline = await allPosts();
    timeline.map((posts) => {
      let transformToDate = new Date(posts.date*1000); 
      console.log(posts.date)
      console.log(transformToDate)
      
      const postElement = createCardPost(posts.message, formatDate(transformToDate));
      showPosts.appendChild(postElement)
    });
  }




  showAllPosts();    

  return container;
}

