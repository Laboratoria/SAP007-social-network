import { userLogout } from '../lib/authentication.js';
import { publicatedPost, getPost } from '../lib/firestore.js';
import card from '../components/card.js';

export default () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'section');
  const template = `
    <nav class="nav-section">
      <ul>
        <li><a href="#timeline">Linha do Tempo</a></li>
        <li><a href="#profile">Perfil</a></li>
      </ul>
      <hr>
    </nav>
  `;
  container.innerHTML = template;

  const feed = document.createElement('form');
  feed.setAttribute('class', 'feed-section');

  const mold = `
    <div class="div-logout">
      <button class="logout">Sair</button>
    </div>
    <div class="post">
      <textarea class="title" type="text" placeholder="Título" wrap="hard"></textarea>
      <span class="error-title"></span>
      <textarea class="text" type="text" placeholder="Texto" wrap="hard"></textarea>
      <span class="error-text"></span>
      <button class="btn-post" id="button-post" disabled type="submit">Postar</button>
    </div>
    <div class="feed"><div>
  `;

  feed.innerHTML = mold;
  container.appendChild(feed);

  const userPublications = container.querySelector('.feed');
  const buttonPost = container.querySelector('.btn-post');
  const valueTitle = container.querySelector('.title');
  const valueText = container.querySelector('.text');
  const logout = container.querySelector('.logout');
  const post = container.querySelector('.post');
  const errorTitle = container.querySelector('.error-title');
  const errorText = container.querySelector('.error-text');

  const showAllPosts = async () => {
    const allPosts = await getPost();
    allPosts.forEach((item) => {
      const postElement = card(item);
      userPublications.prepend(postElement);
    });
  };
  showAllPosts();

  post.addEventListener('keyup', () => {
    const title = valueTitle.value;
    const text = valueText.value;
    if (title.length >= 3 && text.length >= 10) {
      errorTitle.innerHTML = '';
      buttonPost.disabled = false;
      errorText.innerHTML = '';
    } else {
      errorTitle.innerHTML = 'Insira um título válido';
      errorText.innerHTML = 'Insira um texto válido';
    }
  });

  buttonPost.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = valueTitle.value;
    const text = valueText.value;
    await publicatedPost(title, text);
    showAllPosts();
    buttonPost.disabled = true;
    valueTitle.value = '';
    valueText.value = '';
  });

  logout.addEventListener('click', (e) => {
    e.preventDefault();
    userLogout().then(() => {
      window.location.hash = '';
    });
  });

  return container;
};
