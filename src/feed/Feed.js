import '../firebase/FireBaseConfig.js';

export default () => {
  const containerFeed = document.createElement('section');
  containerFeed.setAttribute('class', 'section');
  const templateFeed = `
    <nav>
    <ul>
      <li><a href="#friends"></a>Amigos</li>
      <li><a href="#profile"></a>Perfil</li>
      <li><a href="#feed"></a>Feed</li>
    </ul>
  </nav>
 `;
  containerFeed.innerHTML = templateFeed;
  const feed = document.getElementById('section');
  feed.setAttribute('class', 'section-feed');

  const post = `
    <div>
    <input type="text" class="title-feed" placeholder="Escolha um título"></div><input type="text">
    <input type="text" class="title-feed" placeholder="O que está pensando?"></div><input type="text">

</div>
`;
  feed.innerHTML = post;
  containerFeed.appendChild(feed);
  return containerFeed;
};
