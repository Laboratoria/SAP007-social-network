export default () => {
  const container = document.createElement('div');

  const template = `
    <h1> DIGITE SEU LOGIN E SENHA</h1>
    <button id="button">Entrar</button>
    `;

  container.innerHTML = template;

  function teste() {
    window.location.href = '#feed';
  }

  container.querySelector('#button').addEventListener('click', teste);

  return container;
};
