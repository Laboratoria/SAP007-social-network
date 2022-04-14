import {
  newPost,
  allPosts,
  //sortPosts
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
      <img class="header-image" src="./img/logo3.png" alt="logo">
      <nav class="header-menu" id="nav">
        <button id="btn-mobile" class="btn-mobile" aria-label="Open menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
          <span id="hamburger"></span>
        </button>

        <ul id="menu" class="menu" role="menu"> 
          <li><a class="header-menu-item" href="#about">Sobre nós</a></li>
          <li><a class="header-menu-item" href="#perfil">Meu Perfil</a></li>
          <li><a class="header-menu-item link-login" href="#login" id="btn-exit">Sair</a></li>
        </ul>  
      </nav>
    </header>
    
    <main class="main">
        <form class="write-post main-form" id="write-post">
          <input class="header-menu-item input-search" type="search" id="input-search" placeholder="Pesquisar poemas...">
          <h1 class="welcome-title">Bem-vindo(a), poeta!</h1>
          <textarea class="input-text" id="textarea" placeholder="Escreva seu poema aqui"></textarea>
          <p id="alert-notification"></p>
          <button class="btn-publish" id="btn-publish" type="submit"> Publicar </button>
        </form>

        <section class="new-post" id="new-post">
        </section>
        <section class="publications" id="publications">
            <h1 class="ultimosPoemas">Últimos poemas:</h1>
        </section>
    </main> 
    `;

  container.innerHTML = templateFeed;

  //template do card do post
  function createCardPost (text, displayName, date) {
    const containerPost = document.createElement("div");
    const templateCardPost = `
      <div class="card">
        <p class="date-card">Postado em:${date}</p}
        <section class="post-infos">
          <p class="write-message">${text[0].toUpperCase() + text.substr(1)}</p>    
          <p class="author">${displayName}</p>
          <button class="button-heart">
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
  const inputSearch = container.querySelector('#input-search');
  let msgAlert = container.querySelector('#alert-notification');

  //const likeButton = container.querySelector('#button-heart')

 

  //função para sair do seu login
  logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logout()
      .then(function () {
        window.location.hash='#login';
      })
  })

  function formatDateStyle (date) {
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
      newPost(addNewPost.value, auth.currentUser.displayName)
      .then(function () {
        let date = new Date()
        showNewPost.appendChild(createCardPost(addNewPost.value,auth.currentUser.displayName, formatDateStyle(date)));
        addNewPost.value = "";
      })
    }
  })
  
  //aparecer todos os posts
  const showAllPosts = async () => {
    const timeline = await allPosts();
    timeline.forEach((post) => {
      const postElement = createCardPost(post.message, post.displayName, formatDateStyle(post.date.toDate()));
      showPosts.appendChild(postElement)

      //a função do like precisará ser chamda aqui
      const likeButton = container.querySelector('.button-heart')
      likeButton.setAttribute('id', post.id)
  
      likeButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(likeButton.getAttribute('id'))
      })
    });
  }

  //função botão menu hamburguer
  const btnMobile = container.querySelector("#btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }     
    const nav = container.querySelector("#nav");
    nav.classList.toggle("active");
    const navActive = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", navActive);
  if (navActive) {
    event.currentTarget.setAttribute("aria-laberl", "Close Menu");
  } else {
    event.currentTarget.setAttribute("aria-laberl", "Open Menu");
  }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

//botão de like

let buttonHeart1 = document.getElementById("button-heart");

function Toggle1(){
  if (buttonHeart1.style.color == "red") {
    buttonHeart1.style.color = "grey"
}
else {
  buttonHeart1.style.color = "red"
}
}

  showAllPosts();    

  return container;
}

