import '../firebase/firebase.js';
import { userLogout } from '../firebase/auth-firebase.js';

export const timeline = () => {
  const feedCreate = document.createElement('div');
  const templateFeed = `
      <main class="home-container">
      <button id="button-getout" class="button">Sair</button>
      <h2> TESTE FEED </h2>
      </main>
    `;

  feedCreate.innerHTML = templateFeed;

  const logout = feedCreate.querySelector('#button-getout');

  logout.addEventListener('click', (e) => {
    e.preventDefault();
    userLogout().then(() => {
      window.location.hash = '';
    });
  });

  return feedCreate;
};
