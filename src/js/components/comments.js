export function createComment() {
  const template = `
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
    `;

  return template;
}
