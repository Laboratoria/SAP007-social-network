export function createNewPost() {
  const container = document.createElement("section");
  container.setAttribute("id", "modal-container");
  container.setAttribute("class", "modal-container");
  container.innerHTML = `
    <div class="modal">
      <button id="modal-close" class="modal-close">X</button>
      <section>
        <label for="user-comment">
          <img src="../img/icons/icon-frinds-list.png" alt="Foto do perfil">
          <p>Nome do Usuário</p>
          <textarea class="comment-input" autocomplete="on" minlength="1" maxlength="1000" placeholder="Escreva uma mensagem...">
          </label>
        <textarea type="text"></textarea>
        <button>
          <img src="../img/icons/icon-add-image.png" alt="Ícone de adicionar imagens">
          <p>adicionar imagem</p>
        </button>
      </section>
      <input type="button" value="PUBLICAR"></input>
    </div>
    `;
  return container;
}
