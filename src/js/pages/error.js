const error = {
  createError: function () {
    const template = `
    <section class="page-error">
      <img src="./img/log-labfriends-black.png" id="logo" alt="Logo da LabFriends">
      <h2>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h2>
      <a href="#login" type="submit" class="user-button button-pink">
          VOLTE PARA A PÁGINA INICIAL
      </a>
    </section>
    `;
    return template;
  },
};

export default error;
