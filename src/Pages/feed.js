export default () => {
  const register = document.createElement('div');
  const templateRegister = `
 <div class="container-feed">
    <h3>Feed</h3>
    <button id="btnLogout" class="btn-logout">Logout</button>
 </div>
 <div class="container-post">
    <textarea id="editPost" class="inputs"></textarea>
    <button id="btnPost" class="inputs">Postar</button>
    <button id="editButton" class="inputs">Editar</button>
    <button id="deleteButton" class="inputs">Excluir</button>
 </div>`;

  register.innerHTML = templateRegister;
  return register;
};
