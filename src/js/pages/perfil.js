const perfil = {
  createPerfil: function () {
    const container = document.createElement("div");
    container.setAttribute("id", "container-general");
    container.innerHTML = `
    <h1>Friends</h1>
    `;
    return container;
  },
};

export default perfil;
