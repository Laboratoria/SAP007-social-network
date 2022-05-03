import { auth } from '../../config/start-firebase.js';

export function createAddPost() {
  const template = `
    <section class="modal-container-light" data-post="container">
      <div class="modal-add-post">
        <button class="modal-close" data-post="close">X</button>
        <section class="modal-container-itens">
          <header class="modal-header">
            <a href="/#" class="user-link-photo">
              <img src="../img/icons/icon-profile.png" class="user-photo-post" alt="Foto do perfil">
            </a>
            <div class="modal-post-user">
              <a href="/#">
                <p class="user-name">${auth.currentUser.displayName}</p>
              </a>
              <time class="post-date">01 de abril de 2022</time>
            </div>
          </header>
          <textarea class="add-post-input" autocomplete="on" minlength="1" maxlength="1000" placeholder="Escreva uma mensagem..."></textarea>
          <footer>
            <label class="add-post-footer">
              <img src="../img/icons/icon-add-image.png" class="post-icon" alt="Ícone de adicionar imagens">
              <input type="file" id="file-upload-image" accept="image/png, image/jpeg, image/jpg">
              <p class="post-icon-text">adicionar imagem</p>
            </label>
          </footer>
        </section>
        <input id="button-publish" class="user-button button-pink button-add-post" type="button" value="PUBLICAR"/>
      </div>
    </section>
    `;

  return template;
}
