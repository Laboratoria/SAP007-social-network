const perfil = {
  createPerfil: function () {
    const container = document.createElement("div");
    container.setAttribute("class", "container-secondary");
    container.innerHTML = `
    <h1>Friends</h1>
    `;
    return container;
  },
};

export default perfil;
