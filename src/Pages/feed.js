import '../firebase/config-firebase.js';
import { logout } from '../firebase/authetication.js';
import { auth } from '../firebase/config-firebase.js';

export default () => {
  const feed = document.createElement('div');
  const templateFeed = `
  <nav class="top-nav">
  <picture>
      <img class="logo" src="./img/logo-sem fundo.png" alt="logo">
  </picture>
  <picture>
      <a href="#home" id="logout">
          <img class="button-logout" src="./img/botao-voltar.png" alt="Botão Sair">
      </a>
  </picture>
</nav>
<div class="line-header"> </div>
<div class="d-flex col items-center w-100">
  <section class="publish col" id="publish">
      <textarea id="post-text" class="post-area-text" placeholder="O que você quer compartilhar?" cols="33"
          rows="5"></textarea>
      <div class="row ">
          <div class="buttons" id='selected-theme'>
              <select id='theme'>
                  <option value disabled selected>Assunto</option>
                  <option value="Destinos">Destinos</option>
                  <option value="Dicas">Dicas</option>
                  <option value="Milhas">Milhas</option>
              </select>
              <div>
                  <button id="publish-btn">Enviar</button>
              </div>
          </div>
      </div>
  </section>
</div>

<div id="posts" class="col  posts"> </div>
  `;
  feed.innerHTML = templateFeed;

  const newPost = (data) => `
    <div class="post-container col p-2 m-2">
      <div class="row new-post-header w-100 d-flex row justify-between">
          <div>
            <div></div>
            <div>${data.user.displayName}</div>
          </div>
          <div></div>
      </div>
      <div class="row new-post-body">${data.post}</div>
      <div class="row new-post-footer"></div>
    </div>
  `;

  const posts = feed.querySelector('#posts');
  const btnPosts = feed.querySelector('#publish-btn');
  const postText = feed.querySelector('#post-text');
  btnPosts.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user'));

    posts.innerHTML += newPost({
      post: postText.value,
      user,
    });
  });

  const logoutUser = feed.querySelector('#logout');
  logoutUser.addEventListener('click', (e) => {
    e.preventDefault();
    logout().then(() => {
      window.location.hash = '#login';
      console.log(logout);
    });
  });
  return feed;
};

//const textContainer = feed.querySelector(".post-area-text").value

//const objectPost{
//text: textContainer,
//data:  Date.now(),
//}
