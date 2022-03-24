export default function timeLine() {
  const container = document.createElement("div");

  const template = `
  <div>
    <p>timeLine!</p>
    <input type="email" id="email" autocomplete="on" />
    <input type="password" id="password" />
    <button id="buttonSubmit">Enviar</button>
    <button id="logout">Logout</button>
  </div>`;

  container.innerHTML = template;

  return container;
}

// const buttonSubmit = document.getElementById("buttonSubmit");

// buttonSubmit.window.location();
