import {
  createPost, getAllPosts, authLogOut, getUser, generateIdPost, // consultDB,
} from './controll.js';

import {
  postElement,
} from '../../components/timelinepost.js';

export const feed = () => {
  const user = getUser();

  function toggleMenu() {
    const nav = document.getElementById('nav-options');
    nav.classList.toggle('active');
  }

  if (user) {
    console.log(user);
    const timeline = document.createElement('div');
    timeline.setAttribute('class', 'box-feed flex column');
    timeline.innerHTML = `
    <header class="header-feed flex"> 
      <picture>
        <img src="${user.photoURL}" class="user-perfil-img-feed" alt="user">
        <p>${user.name}</p>
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
        document.location.reload(true);
      }).catch((error) => {
        console.log(error);
      });
    });

    const postsElement = timeline.querySelector('#section-feed');

    btnPost.addEventListener('click', (event) => {
      event.preventDefault();
      const text = document.querySelector('#input-post').value;
      const date = new Date();
      const edited = '';
      const uidUser = user.uid;
      const nameProfile = user.displayName;
      const imgProfile = user.photoURL;
      if (text.length !== 0 && text !== ' ') {
        createPost(text, date, edited, uidUser, nameProfile, imgProfile).then((response) => {
          console.log(response);
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

    // const buttonsPostConfig = {
    //   removeButton() { timeline.querySelector('.remove'); },
    //   modifieButton() { timeline.querySelector('.modifie'); },
    // };

    // modifieButton.addEventListener('click', (e) => {
    //   const { target } = e;
    //   const dataId = target.dataset.id;

    // })

    // removeButton.addEventListener('click', (e) => {
    //   const { target } = e;
    //   const dataId = target.dataset.id;
    //   removePost(dataId).then((a) => console.log(a)).catch((error) => console.log(error));
    // });

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
