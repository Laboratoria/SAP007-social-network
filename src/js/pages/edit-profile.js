export function createEditProfile() {
  const container = document.createElement('main');
  container.setAttribute('id', 'main-container');
  container.innerHTML = `
    <section class="container-internal">
      <form id="form-profile">
        <div class="linha">
          <div class="foto-perfil"></div>
        </div>
        <figure class="user-container-image">
          <img src="../img/icons/icon-photo.png" class="user-profile-image" alt="Foto do meu perfil">
        </figure>

        <label class="button-icon button-user-add-img">
         <img src="./../img/icons/icon-add-image.png" class="post-icon"/>
         <input type="file" id="file-upload-image" accept="image/png, image/jpeg, image/jpg">
         <p class="post-icon-text">alterar imagem</p>
        </label>

        <label for="profile-description" class="label-profile">
          Nome Social
          <textarea id="profile-description" class="post-text post-text-yellow" autocomplete="on" rows="1" cols="70" minlength="2" spellcheck="true" wrap="hard" placeholder="Como você gostaria de se chamar?"></textarea>
        </label>
  
        <label for="profile-description" class="label-profile">
          Breve descrição sobre você
          <textarea id="profile-description" class="post-text post-text-yellow" autocomplete="on" rows="1" cols="70" minlength="2" spellcheck="true" wrap="hard" placeholder="Escreva sobre você..."></textarea>
        </label>

        <label for="profile-description" class="label-profile">
          Assuntos que você domina
          <textarea id="profile-description" class="post-text post-text-yellow" autocomplete="on" rows="2" cols="70" minlength="2" spellcheck="true" wrap="hard" placeholder="Escreva as linguagens, frameworks e outras tecnologias que você domina"></textarea>
        </label>

        <label for="profile-description" class="label-profile">
          Área de atuação
          <textarea id="profile-description" class="post-text post-text-yellow" autocomplete="on" rows="1" cols="70" minlength="2" spellcheck="true" wrap="hard" placeholder="Escreva o que você faz profissionalmente "></textarea>
        </label>
      </form>

      <button type="submit" form="form-profile" class="user-button button-pink button-edit-profile">
        ATUALIZAR PERFIL
      </button>
    </section>
    `;
  return container;
}
