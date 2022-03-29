import "../lib/firebase.js";

export default () => {
    const container = document.createElement("form");
    container.setAttribute("class", "container");
  
    const template = `
          <button class="enter" type="submit">Cadastrar</button>
      `;
  
    container.innerHTML = template;

    return container;}