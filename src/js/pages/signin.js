export default function signin() {
  const container = document.createElement("div");

  const template = `
  <div>
    <p>Signin!</p>
    <input type="email" id="email" autocomplete="on" />
    <input type="password" id="password" />
    <button id="buttonSubmit">Enviar</button>
    <button id="logout">Logout</button>
  </div>`;

  container.innerHTML = template;

  return container;
}
