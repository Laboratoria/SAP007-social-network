export function header() {
  const container = document.createElement("header");
  container.classList.add("header-container");

  const template = `
    <img src="../../assets/icon/logo.svg" alt="logo" class="logo"/>
    <p class="title">Viajar e Compartilhar</p>
  `;

  container.innerHTML = template;

  return container;
}
