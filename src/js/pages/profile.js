export function createProfile() {
  const container = document.createElement('main');
  container.setAttribute('id', 'main-container');
  container.innerHTML = `
<section class=""card-user>
  <a href="">
    <img src="../img/icons/icon-frinds-list.png" alt="Foto do perfil">
    <p>Nome do Usuário</p>
  </a>
  <p class="language">Javascript, HTML, CSS</p>
  <p class="work">Desenvolvedora Front-End</p>
  
</section>
    `;
  return container;
}
