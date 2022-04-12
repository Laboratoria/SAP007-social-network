import { createPost, getAllPosts } from './controll.js';

export const feed = () => {
  const timeline = document.createElement('div');
  timeline.setAttribute('class', 'box-feed flex');
  timeline.innerHTML = `
    <header class="header-feed flex"> 
      <div>
        <img src="#" class="user-perfil-img-feed" alt="user">
      </div>  
      <div>
        <img class="logo-img-feed" src="../../img/kfandomKF.svg" alt="Logo">
      </div>   
      <nav id="nav-options" class="nav-options" aria-expanded="false">
        <button id="btn-mobile" class="btn-mobile flex">
          <span id="hamburguer" class="hamburguer"></span>
        </button>
        <ul id="menu" class="menu ">
          <li><button class="link btn-log-out"</button></li>
        </ul>
      </nav>
    </header>
    <main class="main-post flex">
      <section class="section-feed flex" id="section-feed">
      </section>
      <form action="" method="post">
        <input type="text" id="input-post" placeholder="O que quero compartilhar?" maxlength="500" class="input-post"/> 
        <button id="btn-post">Enviar</button>
      </form>
    </main>   
      `;
  const btnMobile = timeline.querySelector('#btn-mobile');
  const btnPost = timeline.querySelector('#btn-post');

  function toggleMenu() {
    const nav = document.getElementById('nav-options');
    nav.classList.toggle('active');
  }
  btnMobile.addEventListener('click', toggleMenu);

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    const text = document.querySelector('#input-post').value;
    const date = new Date();
    // const uidUser =
    // const nameProfile =
    // const imgProfile =
    createPost(text, date).then((response) => {
      console.log(response);
    }).catch((e) => console.error('Error adding document', e));
  });

  const postsElement = timeline.querySelector('#section-feed');

  getAllPosts().then((posts) => posts.docs.forEach((onePost) => {
    console.log(onePost.id);
    const post = onePost.data();
    console.log(post.day);
    const date = new Date(post.day.seconds * 1000);
    const timelinePost = document.createElement('div');
    timelinePost.setAttribute('class', 'box-post flex');
    timelinePost.innerHTML = `
        <div class="informations-user flex">
          <div class="photo-name-post flex">
            <figure class="post-img-user" ><img src="" alt=""></figure>
            <div class="name-modifie-status flex">
              <p class="post-name-user">User</p>
              <div class="message-modified-post">
                <p class="post-modified"></p>
              </div>
            </div>
          </div> 
          <nav class="nav-remove-modifie flex">
            <button class="btn-config-post">
              <span id="balls" class="balls"></span>
            </button>
            <ul class="configs-post">
              <li><button data-postid="${onePost.id}" class="remove btn-config"></button></li>
              <li><button data-postid="${onePost.id}" class="modifie btn-config"></button></li>
            </ul>
          </nav>
        </div>
        <div class="post-text-id flex" data-postid="${onePost.id}">
          <p class="post-date">${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p>
          <p class="post-text">${post.message}</p>
        </div>
        <div class="like-comment flex">
          <button class="post-like"><img src="" alt="">Gostei</button>
          <button class="post-comment"><img src="" alt="">Comentar</button>
        </div>`;
    postsElement.prepend(timelinePost);
  })).catch((error) => console.log(error));

  return timeline;
};
