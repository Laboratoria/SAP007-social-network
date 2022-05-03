const textPost = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
`;

export function templateComment (){
  const template = `
    <li class="comment-card">
      <article class="user-comment">
        <a href="/#" class="user-link-photo-comment">
          <img src="../img/icons/icon-profile.png" class="user-photo-comment" alt="Foto do perfil">
        </a>
        <div class="user-comment-text">
          <a href="/#">
            <p class="user-name-comment">Nome do Usuário</p>
          </a>
          <textarea class="comment-text" autocomplete="on" rows="1" cols="70" spellcheck="true" wrap="hard" readonly>${textPost}</textarea>
        </div>
      </article>
    </li>
    `
  return template;
}

export function createComment() {
  const container = document.createElement('section');
  container.setAttribute('class', 'comments-general');
  container.innerHTML = `
    <ul class="list-comments">
      ${templateComment()}
    </ul>
    `;
  return container;
}
