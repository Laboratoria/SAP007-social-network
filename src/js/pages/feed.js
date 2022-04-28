export function createFeed() {
  const container = document.createElement('main');
  container.setAttribute('id', 'main-container');
  container.innerHTML = `
<ul class="cards">
  <li class="post-card">
    <article class="user-post">
      <section class="post-timeline">
        <header class="post-header">
          <a href="#profile" class="user-link-photo">
            <img src="../img/icons/icon-perfil.png " class="user-photo-post" alt="Foto do perfil">
          </a>
          <div>
            <a href="#profile">
              <p class="user-name">Nome do Usuário</p>
            </a>
            <time class="post-date">01 de abril de 2022</time>
          </div>
        </header>
        <main class="group-text">
          <p class="paragraph">Olá, sou aluna da Laboratoria.<br>Sou da turma SAP007.</p>
        </main>
        <footer class="post-footer">
          <button class="button-post">
            <img src="../img/icons/icon-unlike.png" class="post-icon icon-unlike" alt="Ícone de curtir">
            <p class="post-icon-text post-number-like">2</p>
            <p class="post-icon-text">curtidas</p>
          </button>
          <button class="button-post">
            <img src="../img/icons/icon-comment.png" class="post-icon" alt="Ícone de comentários">
            <p class="post-icon-text post-number-comment">3</p>
            <p class="post-icon-text">comentários</p>
          </button>
        </footer>
      </section>
      <section class="container-comments">
        <section class="add-comments">
          <div class="line-post"></div>
          <textarea class="comment-input" autocomplete="on" minlength="1" maxlength="1000" placeholder="Escreva um comentário...">
          </textarea>
        </section>
        <article class="user-comment">
          <a href="/#" class="user-link-photo">
            <img src="../img/icons/icon-perfil.png" class="user-photo-comment" alt="Foto do perfil">
          </a>
          <div>
            <a href="/#">
              <p class="user-name-comment">Nome do Usuário</p>
            </a>
            <div class="group-text-comment">
              <p class="paragraph">Comentário mais logo.<br>Com quebra de linha.</p>
            </div>
          </div>
        </article>
    </article>
  </li>
</ul>
    `;
}
