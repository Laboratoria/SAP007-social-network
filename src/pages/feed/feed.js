import {
  createPost, getAllPosts, authLogOut, getUser, generateIdPost,
} from './controll.js';

export const feed = () => {
  const user = getUser();

  function toggleMenu() {
    const nav = document.getElementById('nav-options');
    nav.classList.toggle('active');
  }

  if (user) {
    const timeline = document.createElement('div');
    timeline.setAttribute('class', 'box-feed flex column');
    timeline.innerHTML = `
    <header class="header-feed flex"> 
      <picture>
        <img src="${user.photoURL}" class="user-perfil-img-feed" alt="user">
      </picture>  
      <picture>
        <img class="logo-img-feed" src="../../img/kfandomKF.svg" alt="Logo">
      </picture>   
      <nav id="nav-options" class="nav-options" aria-expanded="false">
        <button id="btn-mobile" class="btn-mobile flex">
          <span id="hamburguer" class="hamburguer"></span>
        </button>
        <ul id="menu" class="menu ">
          <li><button class="link btn-log-out" id="btn-log-out"</button>Sair</li>
        </ul>
      </nav>
    </header>
    <main class="main-post flex column">
      <section class="section-feed flex column" id="section-feed">
      </section>
      <form action="" method="post">
        <input type="text" id="input-post" placeholder="O que quero compartilhar?" maxlength="500" class="input-post"/> 
        <button id="btn-post">Enviar</button>
      </form>
    </main>   
      `;
    const btnMobile = timeline.querySelector('#btn-mobile');
    const btnPost = timeline.querySelector('#btn-post');
    const btnLogOut = timeline.querySelector('#btn-log-out');

    btnMobile.addEventListener('click', toggleMenu);

    btnLogOut.addEventListener('click', (e) => {
      console.log('entrei');
      e.preventDefault();
      authLogOut().then(() => {
        window.location.hash = '#login';
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
    });

    btnPost.addEventListener('click', (event) => {
      event.preventDefault();
      const text = document.querySelector('#input-post').value;
      const date = new Date();
      const edited = '';
      const uidUser = user.uid;
      const nameProfile = user.displayName;
      const imgProfile = user.photoURL;
      if (text.length !== 0) {
        createPost(text, date, edited, uidUser, nameProfile, imgProfile).then((response) => {
          generateIdPost(response.id)
            .then(() => console.log('Deu certo'))
            .catch((error) => console.error(error));
        }).catch((e) => console.error('Error adding document', e));
      } else {
        // innerHTML = 'Digite algo para compartilhar!';
      }
    });

    const postsElement = timeline.querySelector('#section-feed');

    getAllPosts().then((posts) => posts.docs.forEach((onePost) => {
      const post = onePost.data();
      const date = new Date(post.day.seconds * 1000);
      const timelinePost = document.createElement('div');
      timelinePost.setAttribute('class', 'box-post flex column');
      timelinePost.innerHTML = `
        <div class="informations-user flex">
          <div class="photo-name-post flex">
            <figure class="post-img-user" ><img class="post-img-user" src="${post.imgProfile}" alt="user"></figure>
            <div class="name-modifie-status flex column">
              <p class="post-name-user">${post.name}</p>
              <div class="message-modified-post">
                <p class="post-modified">${post.edit}</p>
              </div>
            </div>
          </div> 
          <nav class="nav-remove-modifie flex">
            <button class="btn-config-post">
              <span id="balls" class="balls"></span>
            </button>
            <ul class="configs-post">
              <li><button data-id="${post.idPost}" class="remove btn-config" id="remove">Remover</button></li>
              <li><button data-id="${post.idPost}" class="modifie btn-config" id="modifie">Editar</button></li>
            </ul>
          </nav>
        </div>
        <div class="post-text-id flex column">
          <p class="post-date">${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p>
          <p class="post-text">${post.message}</p>
        </div>
        <div class="like-comment flex">
          <button class="post-like"><img src="" alt="">Gostei</button>
          <button class="post-comment"><img src="" alt="">Comentar</button>
        </div>`;
      postsElement.prepend(timelinePost);
    })).catch((error) => console.log(error));

    // const removeButton = timeline.querySelector('#remove');
    // const modifieButton = timeline.querySelector('#modifie');

    // removeButton.addEventListener('click',)

    return timeline;
  }
  const messageWithoutLogin = document.createElement('div');
  messageWithoutLogin.setAttribute('class', 'message-without-user flex column');
  messageWithoutLogin.innerHTML = `
    <picture>
      <img class="logo-img-feed-user-message" src="../../img/kfandomKF.svg" alt="Logo">
    </picture>
    <p class="without-user">Tente fazer o login para ver o feed!</p>
    <p class="without-user">
      <a class="link-login" href="#login" />Me redirecione para o login!</a></p>
    `;
  console.log(user);
  return messageWithoutLogin;
};
