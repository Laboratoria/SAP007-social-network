import '../firebase/config-firebase.js';
import { logout } from '../firebase/authetication.js';
import { createPost } from '../firebase/firestore.js';
import { getPost } from '../firebase/firestore.js';
export default function feed() {
  getPost();
  const feed = document.createElement('div');
  const templateFeed = `
  <nav class="top-nav">
      <picture>
          <img class="logo" src="./img/logo-sem fundo.png" alt="logo">
      </picture>
      <picture>
        <a href="#home" id="logout">
            <img  class="button-logout" src="./img/botao-voltar.png" alt="Botão Sair">
        </a>
      </picture>
  </nav>
  <div class= "line-header"> </div>
  <section class="publish" id="publish">
    <textarea id="post-text" class="post-area-text" placeholder="O que você quer compartilhar?" cols="33" rows="5"></textarea>
    <div class ="buttons" id='selected-theme'>
      <select id='theme'>
        <option value disabled selected>Assunto</option>
        <option value="Destinos">Destinos</option>
        <option value="Dicas">Dicas</option>
        <option value="Milhas">Milhas</option>
      </select>
    </div>
    <div>
      <button id="publish-btn">Enviar</button>
    </div>
  </section>
  <div id='posts-container' class="posts-container">  
  </div>
  `;

  feed.innerHTML = templateFeed;
  const posts = feed.querySelector('#posts-container');
  const btnPosts = feed.querySelector('#publish-btn');
  const postText = feed.querySelector('#post-text');
  btnPosts.addEventListener('click', async () => {
    const docRef = await createPost(postText.value, "teste@teste.com");    
    posts.innerHTML += `
    <div class= "posts w-100" id= "posts" >  
    <p> ${postText.value} </p>    
    </div>
    `;
  });

  const convertTimestamp = (timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleString('pt-br');
  };

  const getPostsFromDatabase = async () => {
    const posts = await getPost();
    posts.forEach((post) => {
      document.querySelector('#posts-container').innerHTML += `         
      <div class= "posts" id= "posts" >
        <ul class="posts" id="posts">
          <li>
           <p>${post.userEmail}</p> 
           <p>${convertTimestamp(post.date)}</p>           
           <p>${post.textPost}</p>
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
