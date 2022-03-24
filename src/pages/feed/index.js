export default () => {
  const container = document.createElement("div");

  const template = `
    <h1> MEU FEED</h1>
    `;

  container.innerHTML = template;

  return container;
};
