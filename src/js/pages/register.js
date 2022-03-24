export default function register() {
  const container = document.createElement("div");

  const template = `
  <div>
    <p>Register!</p>
    <input type="email" id="email" autocomplete="on" />
    <input type="password" id="password" />
    <button id="buttonSubmit">Enviar</button>
    <button id="logout">Logout</button>
  </div>`;

  container.innerHTML = template;

  return container;
}
