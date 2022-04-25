//import {
//} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

//const db = getFirestore(app);

export default () => {
  const feed = document.createElement('div');
  const templateFeed = `
  <section class="top-nav">
  <div>
    <h1>Logo</h1>
  </div>
  <input id="menu-toggle" type="checkbox" />
  <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
  <ul class="menu">
    <li>PERFIL</li>
    <li>PuBLICAR</li>
    <li>CURTIDAS</li>
    <li>SAIR</li>
  </ul>
</section>`;

  feed.innerHTML = templateFeed;
  return feed;
};
