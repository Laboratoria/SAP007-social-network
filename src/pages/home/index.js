export default () => {
  const container = document.createElement('div');

  const template = `
    <h1>FRIENDSOUND</h1>
    <button id="button">Entrar</button>
    `;

  container.innerHTML = template;

  function teste() {
    window.location.href = '#login';
  }

  container.querySelector('#button').addEventListener('click', teste);

  return container;
};
