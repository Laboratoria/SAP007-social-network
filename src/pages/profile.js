import { auth, userLogout } from '../lib/authentication.js';
import { postUser } from '../lib/firestore.js';
import card from '../components/templates.js';

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
    <div class="div-logout">
      <button class="logout">Sair</button>
    </div>
    <div class="feed"></div>
  `;
  container.innerHTML = template;

  const post = container.querySelector('.feed');
  const logout = container.querySelector('.logout');

  const showMyPosts = async () => {
    const uid = auth.currentUser.uid;
    const feedProfile = await postUser(uid);
    feedProfile.forEach((item) => {
      const postCard = card(item);
      post.prepend(postCard);
    });
  };
  showMyPosts();

  logout.addEventListener('click', (e) => {
    e.preventDefault();
    userLogout().then(() => {
      window.location.hash = '';
    });
  });

  return container;
};
