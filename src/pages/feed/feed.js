import {
  newPost,
  allPosts,
  getLikesPost
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
          <p id="alert-notification" class="message"></p>
          <button class="btn-publish" id="btn-publish" type="submit"> Publicar </button>
        </form>

        <section class="new-post" id="new-post">
        </section>
        <section class="publications" id="publications">
            <h1 class="last-poems">Últimos poemas:</h1>
        </section>
    </main> 
    `;

  container.innerHTML = templateFeed;

  //template do card do post
  function createCardPost (text, displayName, date, id = "", likes=[]) {
    const containerPost = document.createElement("div");
    const templateCardPost = `
      <div class="card">
        <p class="date-card">Postado em:${date}</p}
        <section class="post-infos">
          <p class="write-message">${text[0].toUpperCase() + text.substr(1)}</p>    
          <p class="author">${displayName}</p>
          <button class="button-heart">
            <input type="hidden" id="post-id" value="${id}">
            <img class="heart-img" src="img/icone-coração.png">
            <span class="button-heart-text" id="number-of-likes">${likes.length}</span>
            <input type="hidden" id="get-likes-value" value="${likes}">
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
        showNewPost.appendChild(createCardPost(addNewPost.value,auth.currentUser.displayName,
        formatDateStyle(date)));
        addNewPost.value = "";
      })
    }
  })
  
  //aparecer todos os posts
  const showAllPosts = async () => {
    const timeline = await allPosts();  
    timeline.forEach((post) => {
      const postElement = createCardPost(post.message, post.displayName,
      formatDateStyle(post.date.toDate()), post.id, post.likes);
      showPosts.appendChild(postElement)
    });
      
    const likeButtons = container.querySelectorAll('.button-heart')
    for(let i = 0; i < likeButtons.length; i++) {
      likeButtons[i].addEventListener("click", checkLikes)
    } 
  }

  function checkLikes(e){
    const postId = e.currentTarget.querySelector('[id=post-id]').value;
    const showNumberOfLikes = e.currentTarget.querySelector('[id=number-of-likes]')
    const getValueOfLikes = e.currentTarget.querySelector('[id=get-likes-value]').value;
    const likes = getValueOfLikes.split(",")
    if (likes.includes(auth.currentUser.uid)) {
      getLikesPost(postId,likes)
      .then(() => {
        const reduceNumLikes = Number(showNumberOfLikes.innerHTML) - 1;
        showNumberOfLikes.innerHTML = reduceNumLikes;
      })
    } else{
      getLikesPost(postId,likes)
      .then(() => {
        const sumNumLikes = Number(showNumberOfLikes.innerHTML) + 1;
        showNumberOfLikes.innerHTML = sumNumLikes;
      })
    } 
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

let buttonHeart1 = container.querySelector(".button-heart");

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

