// importar da .LIB a função de autenticação do firebase

export default function signin() {
    const container = document.createElement("section");
  
    const template = `
    <form class="main-content">
      <p>Signin!</p>
      <input type="email" id="email" autocomplete="on" />
      <input type="password" id="password" />
      <button id="buttonSubmit">Enviar</button>
      <button id="logout">Logout</button>
    </form>
    `;
    container.appendChild(header());
  
    container.innerHTML += template;
  
    container.appendChild(footer());
  
    const email = container.querySelector("#email");
    const password = container.querySelector("#password");
    const buttonSubmit = container.querySelector("#buttonSubmit");
  
    buttonSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      userLogin(email.value, password.value)
        .then(function () {
          window.location.hash = "#timeLine";
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert("Deu ruim!");
          return errorMessage;
        });
    });
  
    return container;
  }