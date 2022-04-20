import {
  newPost,
  allPosts,
  getLikesPost,
} from "../../configs/firestore.js";
import { auth } from "../../configs/authentication.js";
import header from "../components/header.js";

export default () => {
  const container = document.createElement("div");
  container.classList.add("content-feed")
    
  const templateFeed = `
    <main class="main">
        <form class="write-post main-form" id="write-post">
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

  container.appendChild(header())
  container.innerHTML += templateFeed;

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
            <i class="fa fa-heart like-btn" id="like-button"></i>
            <input type="hidden" id="post-id" value="${id}">
            <span class="button-heart-text" id="number-of-likes" data-number="${likes}">${likes.length}</span>
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
  let msgAlert = container.querySelector('#alert-notification');

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
      event.currentTarget.setAttribute("aria-label", "Close Menu");
    } else {
    event.currentTarget.setAttribute("aria-label", "Open Menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

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
      newPost(addNewPost.value)
      .then(function () {
        let date = new Date()
        console.log(auth.currentUser)
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
     post.date, post.id, post.likes);
      showPosts.appendChild(postElement)

      if ((post.likes.includes(auth.currentUser.uid))) {
        const colorButton = container.querySelectorAll('.like-btn')
        for(let i = 0; i < colorButton.length; i++) {
          colorButton[i].classList.add("liked")
        }
      }  
    });
    
    const likeButtons = container.querySelectorAll('.button-heart')
    for(let i = 0; i < likeButtons.length; i++) {
      likeButtons[i].addEventListener("click", checkLikes)
    } 
  }

  showAllPosts(); 

  async function checkLikes(e) {
    const postId = e.currentTarget.querySelector('[id=post-id]').value;
    const showNumberOfLikes = e.currentTarget.querySelector('[id=number-of-likes]');
    const getValueOfLikes = showNumberOfLikes.dataset.number;
    const likes = getValueOfLikes.split(",");
    const heartButton = e.currentTarget.querySelector('.like-btn');
    const dataLikes = await getLikesPost(postId,likes)

    if (dataLikes.includes(auth.currentUser.uid)) {
      heartButton.classList.remove("liked")
      const reduceNumLikes = Number(showNumberOfLikes.innerHTML) - 1;
      showNumberOfLikes.innerHTML = reduceNumLikes;
    
    } else{
        dataLikes.push(auth.currentUser.uid)
        heartButton.classList.add("liked")
        //heartButton.style.color = "red";
        const sumNumLikes = Number(showNumberOfLikes.innerHTML) + 1;
        showNumberOfLikes.innerHTML = sumNumLikes;
      }
    
  }
   
  return container;
}

