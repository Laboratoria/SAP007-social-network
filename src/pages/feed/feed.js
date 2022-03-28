export const feed = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const timeline = document.createElement('div');
  timeline.setAttribute('class', 'box-feed');
  timeline.innerHTML = `
    <link rel="stylesheet" href="./pages/feed/feed.css"/> 
    <header class="header-feed">    
      <img src="../img/logo.png" alt="Logotype" class="logo-icon">
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
        <input type="text" id="inputPost" placeholder="O que quero compartilhar?" maxlength="500" class="input-post"/> 
        <button>Enviar</button>
      </form>
    </main>   
      `;

  main.appendChild(timeline);

  const btnMobile = document.getElementById('btn-mobile');

  function toggleMenu() {
    const nav = document.getElementById('nav-options');
    nav.classList.toggle('active');
  }

  btnMobile.addEventListener('click', toggleMenu);
};
