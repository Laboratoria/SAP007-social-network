import '../firebase/config-firebase.js';
import { logout } from '../firebase/authetication.js';
import { createPost } from '../firebase/firestore.js';
import { getPost, getCurrentUser } from '../firebase/firestore.js';
export default function feed() {
  const feed = document.createElement('div');
  const boxFeed = `
  <nav class="top-nav">
      <picture>
          <img class="logo" src="./img/logo-sem fundo.png" alt="logo">
      </picture>
      <picture>
        <a href="#home" id="logout">
            <img  class="button-logout" src="./img/logout.png" alt="Botão Sair">
        </a>
      </picture>
  </nav>
  <div class= "line-header"> </div>
  <section class="publish" id="publish">
    <textarea id="post-text" class="post-area-text" placeholder="O que você quer compartilhar?" cols="35" rows="7"></textarea>
        <p id="alert-notification" class="error"></p>
        <div class= "btn-container">
          <button class="publish-btn" id="publish-btn">Publicar</button>
        </div>
  </section>
  <div id='posts-container' class="posts-container">  
  </div>
  `;

  feed.innerHTML = boxFeed;

  const posts = feed.querySelector('#posts-container');
  const btnPosts = feed.querySelector('#publish-btn');
  const postText = feed.querySelector('#post-text');
  const msgAlert = feed.querySelector('#alert-notification');
  const convertDateObject = (dateObject) => {
    const date = dateObject.toDate();
    return date.toLocaleString('pt-br');
  };

  const convertTime = (timestamp) => {
    const dateObject = new Date(timestamp);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;
  };

  btnPosts.addEventListener('click', async () => {
    const control = posts.innerHTML;
    posts.innerHTML = '';
    if (postText.value === '') {
      msgAlert.innerHTML = 'Digite uma mensagem!';
    } else;
    await createPost(postText.value);
    posts.innerHTML += `
    <div class= "posts w-100" id= "posts" > 
    <p> ${getCurrentUser()}</p>
    <p>${convertTime(Date.now())}</p> 
    <p> ${postText.value} </p> 
    </div>
    `;
    posts.innerHTML += control;
  });

  const getPostsFromDatabase = async () => {
    const posts2 = await getPost();
    const ordanatedPosts = posts2.sort((a, b) => {
      const dateA = new Date(convertDateObject(a.date)).getTime();
      const dateB = new Date(convertDateObject(b.date)).getTime();
      if (dateA < dateB) return 1;
      return -1;
    });

    ordanatedPosts.forEach((post) => {
      document.querySelector('#posts-container').innerHTML += `         
      <div class= "box-posts" id= "posts" >
        <ul class="box-posts" id="posts">
          <li>
          <p>${post.userName}</p> 
          <p>${convertDateObject(post.date)}</p> 
          <p>${post.textPost}</p>
          <div class= "line"></div>
          <div class="icons">
            <button class="button-heart">
              <img class="heart-btn" id="heart-btn" src="./img/heart.svg">
            </button>
          </div>
          <button class="button-edit">
              <img class= "edit-btn" id="edit-btn" src="./img/page-edit.svg">
          </button>
          </li>
        </ul>
      </div>  
      `;
    });
  };

  getPostsFromDatabase();

  const logoutUser = feed.querySelector('#logout');
  logoutUser.addEventListener('click', (e) => {
    e.preventDefault();
    logout().then(() => {
      window.location.hash = '#login';
    });
  });
  return feed;
}
