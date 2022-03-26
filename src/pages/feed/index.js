export default () => {
  const container = document.createElement('div');

  const template = `
    <h1> MEU FEED</h1>
    <button id="button">Entrar</button>
    `;

  container.innerHTML = template;

  function teste() {
    window.location.href = '#';
  }

  container.querySelector('#button').addEventListener('click', teste);

  return container;
};
