const resetPassword = {
  createUser: function () {
    const container = document.createElement("form");
    container.setAttribute("id", "user-form");
    const template = `
      <h1>Olá</h1>
    `;
    container.innerHTML = template;
    return container;
  },
};

export default resetPassword;
