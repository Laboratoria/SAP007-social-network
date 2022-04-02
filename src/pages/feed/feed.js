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
        <div class="publicacoes" id="publications">
            poemas postados aqui...
        </div>
    </main> 
    `;
    
  container.innerHTML = templateFeed;

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
    
  buttonPublic.addEventListener("click", (e) => {
    e.preventDefault();
    newPost(addNewPost.value)
      then(function () {
        const templateCardPost = `
          <div class="card">
            <p class="write-message">${addNewPost.value}</p>    
           </div>    
        `;  

        showPosts.innerHTML = templateCardPost;
      });
  })
      
  return container;
}




/*const templateCardPost = `
        <div class="card">
          <p class="date-card">${posts.date}</p}
          <section class="post-infos">
            <p class="write-message">${posts.message}</p>    
            <p class="author">${auth}</p>
            <img class="pokedex-open" src="img/pokedex-open.png" class="heart-button" id="heart-button">
          </section>
        </div>    
        `;*/
