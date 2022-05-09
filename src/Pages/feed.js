import '../firebase/config-firebase.js';
import { logout } from '../firebase/authetication.js';
import {
  createPost,
  getPost,
  getCurrentUser,
  like,
  dislike,
} from '../firebase/firestore.js';

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
  <div class = "container-publish">
  <section class="publish" id="publish">
    <textarea id="post-text" class="post-area-text" placeholder="O que você quer compartilhar?" cols="25" rows="4" ></textarea>
        <p id="alert-notification" class="error"></p>
        <div class= "btn-container">
          <button class="publish-btn" id="publish-btn">Publicar</button>
        </div>
  </section>
  </div>
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
    const elementPost = await getPost();
    const ordanatedPosts = elementPost.sort((a, b) => {
      const dateA = new Date(convertDateObject(a.date)).getTime();
      const dateB = new Date(convertDateObject(b.date)).getTime();
      if (dateA < dateB) return 1;
      return -1;
    });

    ordanatedPosts.forEach((post) => {
      console.log(post);
      document.querySelector('#posts-container').innerHTML += `         
      <div class= "box-posts">
        <ul class="box-posts">
          <li>
          <p>${post.userName}</p> 
          <p>${convertDateObject(post.date)}</p> 
          <p>${post.textPost}</p>
          </li>
        </ul>
        <div class= "line"></div>
        <div class="icon">
        <button type="button" id="like-btn" data-post-id="${post.id}">
          <img src="./img/heart.svg" "id="btn-heart" class="btn-heart" width="20px"/>
        </button>
        <p id="num-likes" class="num-likes">${post.like.length}</p>
        </div>
      </div>  
     `;
    });

    const buttonLike = document.querySelector('#like-btn');

    buttonLike.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.currentTarget.dataset.postId);
      const selectPost = elementPost.find(
        (item) => item.id == e.currentTarget.dataset.postId
      );
      const postLiked = selectPost.like;
      const likesCounter = e.currentTarget.nextElementSibling;
      console.log(getCurrentUser);
      const user = getCurrentUser();
      if (!postLiked.includes(user)) {
        like(selectPost.id, user).then(() => {
          postLiked.push(user);
          const likeNumber = Number(likesCounter.textContent) + 1;
          likesCounter.textContent = likeNumber;
        });
      } else {
        dislike(selectPost.id, user).then(() => {
          postLiked.splice(getCurrentUser);
          const likeNumber = Number(likesCounter.textContent) - 1;
          likesCounter.textContent = likeNumber;
        });
      }
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
