import { createPost, controlPost } from './controll.js';

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

  const posts = timeline.querySelector('#section-feed');

  controlPost(posts);

  return timeline;
};
