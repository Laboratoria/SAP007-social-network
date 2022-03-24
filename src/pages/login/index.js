export default () => {
  const container = document.createElement("div");

  const template = `
    <h1> DIGITE SEU LOGIN E SENHA<h1>
    `;

  container.innerHTML = template;
  return container;
};
