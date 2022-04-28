export function createAddPost() {
  const container = document.createElement("section");
  container.setAttribute("data-modal", "container");
  container.setAttribute("class", "modal-container");

  container.innerHTML = `
    <div class="modal">
      <button class="modal-close" data-post="close">X</button>
      <section>
        <img src="../img/icons/icon-frinds-list.png" alt="Foto do perfil">
        <p>Nome do Usuário</p>
        <label for="user-comment">
          <textarea id="message" class="comment-input" autocomplete="on" minlength="1" maxlength="1000" placeholder="Escreva uma mensagem..."></textarea>
        </label>
        <button>
          <img src="../img/icons/icon-add-image.png" alt="Ícone de adicionar imagens">
          <p>adicionar imagem</p>
        </button>
      </section>
      <input id="btn-publicar" type="button" value="PUBLICAR" data-modal="close" />
    </div>
    `;
  return container;
}

