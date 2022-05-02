const textPost = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
`;

export function createPost() {
  const template = `
      <section class="post-timeline">
        <header class="post-header">
          <a href="/#" class="user-link-photo">
            <img src="../img/icons/icon-profile.png" class="user-photo-post" alt="Foto do perfil">
          </a>
          <div>
            <a href="/#">
              <p class="user-name">Nome do Usuário</p>
            </a>
            <time class="post-date">01 de abril de 2022</time>
          </div>
        </header>
        <textarea class="post-text" autocomplete="on" rows="1" cols="70" minlength="2" spellcheck="true" wrap="hard" readonly>${textPost}</textarea>
        <footer class="post-footer">
          <button class="button-icon-post button-like">
            <img src="../img/icons/icon-unlike.png" class="post-icon icon-unlike" alt="Ícone de curtir">
            <p class="post-icon-text post-number-like">2</p>
            <p class="post-icon-text">curtidas</p>
          </button>
          <button class="button-icon-post button-comment">
            <img src="../img/icons/icon-comment.png" class="post-icon" alt="Ícone de comentários">
            <p class="post-icon-text post-number-comment">3</p>
            <p class="post-icon-text">comentários</p>
          </button>
        </footer>
      </section>
      `;
  return template;
}
