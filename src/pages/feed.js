import { menu } from "./elements/menu.js";

export default () => {
  const feedHome = document.createElement('div');
  feedHome.classList.add('feedHome');
  feedHome.innerHTML = `
    <header>
      <img src="../img/logo.png" alt="Logo Laboriam">
    </header>
    <div id="main-content">
      <div class="content-post">
        <div id="header-post" class="header-post">
          <img src="../img/icon-google.png" alt="" class="photoUser">
          <div class="header-infos">
            <p class="nameUser">Nome do usuário</p>
            <p class="postDate">11 de mar. às 14:16</p>
          </div>
        </div>
        <div id="text-post" class="post">
          <p class="text-post">Publicação escrita aqui!</p>
        </div>
        <div id="footer-post" class="footer-post">
          <button type="button" id="curtir">curtir</button>
          <button type="button" id="comentar">comentar</button>
          <button type="button" id="editar">editar</button>
          <button type="button" id="deletar">deletar</button>
        </div>
      </div>
    </div>
    <aside id="menu" class="menu"></aside>
  `;

  const menuNavigation = feedHome.querySelector('#menu');
  menuNavigation.innerHTML = menu;

  return feedHome;
};