const friends = {
  createFriendsList: function () {
    const container = document.createElement("div");
    container.setAttribute("class", "container-secondary");
    container.innerHTML = `
    <main>

      <input type="text" name="search-name" id="search-name" class="user-input" placeholder="Pesquise pelo nome" required>

      <div class="user-container">
        <section>
          <a href="">
            <img src="../img/icons/icon-frinds-list.png" alt="Foto do perfil">
            <p>Nome do Usuário</p>
          </a>
          <p class="language">Javascript, HTML, CSS</p>
          <p class="work">Desenvolvedora Front-End</p>
        </section>
      </div>

    </main>
    `;
    return container;
  },
};

export default friends;
