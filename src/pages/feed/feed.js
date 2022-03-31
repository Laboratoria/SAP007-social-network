import { createPost } from './controll.js';

export const feed = () => {
  const timeline = document.createElement('div');
  timeline.setAttribute('class', 'box-feed');
  timeline.innerHTML = `
    <link rel="stylesheet" href="./pages/feed/feed.css"/> 
    <header class="header-feed">    
      <section class="menu">
        <nav id="nav-options" class="nav-options" aria-expanded="false">
          <button id="btn-mobile" class="btn-mobile">
          </button>
          <ul id="menu" class="menu">
            <li><a href="#" class="link" target="_blank"/></a></li>
          </ul>
        </nav>
      </section>
    </header>
    <main class="main-header">
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
    const post = {
      text: () => document.querySelector('#input-post').value,
      date: () => new Date(),
      // uid: () => ,
      // name: () => ,
    };
    try {
      createPost(post.text(), post.date());
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  });

  // controlPost().forEach((changes) => {
  //   if (changes.type === 'added') {
  //     console.log(changes.doc);
  //   }
  // });

  return timeline;
};
