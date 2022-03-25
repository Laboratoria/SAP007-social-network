export default () => {
  const container = document.createElement("div");
  container.classList.add("container");

  container.innerHTML = `
  <h2>Template do Sobre. Senhor, esse projeto ficará 
  pronto e redondinho até 05/04.</h2>
    `;

  return container;
};
