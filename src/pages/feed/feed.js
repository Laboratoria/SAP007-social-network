import {
  createPost, getAllPosts, authLogOut, generateIdPost, // consultDB,
} from './firestore-functions.js';

import {
  postElement,
} from '../../components/timelinepost.js';

export const feed = (user) => {
  console.log(user);
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
          <li class="link"><button class="btn-log-out" id="btn-log-out"></button>Sair</li>
        </ul>
      </nav>
    </header>
    <main class="main-post flex column">
      <section class="section-feed flex column" id="section-feed">
      </section>
      <section class="section-input-post" id="section-input-post">
        <button class="btn-post-input-apear" id="btn-post-input-apear">+
        </button>
        <form action="" method="post" class="form-post-apear flex">
          <textarea type="text" id="input-post" required placeholder="O que quero compartilhar?" maxlength="500" class="input-post"/></textarea>
          <button id="btn-post" class="btn-post">Postar</button>
        </form>
      </section>
    </main>   
      `;
  const btnMobile = timeline.querySelector('#btn-mobile');
  const btnPost = timeline.querySelector('#btn-post');
  const btnLogOut = timeline.querySelector('#btn-log-out');
  const btnInputPost = timeline.querySelector('#btn-post-input-apear');
  const sectionInput = timeline.querySelector('#section-input-post');
  const nav = timeline.querySelector('#nav-options');

  function toggleMenu() {
    nav.classList.toggle('active');
  }

  btnMobile.addEventListener('click', toggleMenu);

  btnLogOut.addEventListener('click', (e) => {
    e.preventDefault();
    authLogOut().then(() => {
      // limpar session storage
      window.location.hash = '#login';
      document.location.reload(true);
    }).catch((error) => {
      console.log(error);
    });
  });

  function toggleInput() {
    sectionInput.classList.toggle('apear');
    // const classes = sectionInput.className;
    // if (classes.indexOf('active') !== -1) {
    //   toggleMenu();
    // }
  }

  btnInputPost.addEventListener('click', toggleInput);

  const postsElement = timeline.querySelector('#section-feed');

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    const text = document.querySelector('#input-post').value;
    const date = new Date();
    const edited = '';
    const uidUser = user.uid;
    const nameProfile = user.displayName;
    const imgProfile = user.photoURL;
    if (text.trim().length !== 0 && text !== ' ' && text !== null && text !== false) {
      toggleInput();
      createPost(text, date, edited, uidUser, nameProfile, imgProfile).then((response) => {
        const objeto = {
          message: text,
          day: {
            seconds: date.getTime() / 1000,
          },
          edit: edited,
          idPost: response.id,
          userUid: uidUser,
          name: nameProfile,
          imgProfile,
        };
        const newPostElement = postElement(objeto, uidUser);
        postsElement.prepend(newPostElement);
        generateIdPost(response.id)
          .then(() => {
            console.log('Deu certo');
          })
          .catch((error) => console.error(error));
      }).catch((e) => console.error('Error adding document', e));
      document.querySelector('#input-post').value = '';
      // mandar mensagem pro usuário pois a postagem não foi no firestore
    } else {
      // innerHTML = 'Digite algo para compartilhar!';
    }
  });

  getAllPosts().then((posts) => {
    posts.docs.forEach((onePost) => {
      const post = onePost.data();
      const timelinePost = postElement(post, user.uid);
      postsElement.prepend(timelinePost);
    });
  }).catch((error) => console.log(error));

  // modifieButton.addEventListener('click', (e) => {

  return timeline;
};
