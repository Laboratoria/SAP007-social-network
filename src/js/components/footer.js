export function footer() {
  const container = document.createElement("header");
  // container.classList.add("header-container");

  const template = `
  <div>
    <img src="../../assets/icon/logo.svg" alt="logo"/>
    <p>Viajar e Compartilhar</p>
  </div>

  `;

  container.innerHTML = template;
  console.log(header, ";;;;;;");
  return container;
}
