export default () => {
  const areaSingUp = document.createElement('div');
  const formSingUp = `
    <div id="main-singUp">
      <h2>Criar uma conta:</h2>
      <form>
        <input type="text" placeholder="Nome" id="inputName">
        <br>
        <input type="text" placeholder="Sobrenome" id="inputLastName">
        <br>
        <input type="email" placeholder="Endereço de e-mail" id="inputEmail">
        <br>
        <input type="password" placeholder="Digite uma senha" id="inputPassword">
        <br>
        <input type="password" placeholder="Confirme a senha" id="inputConfirmPassword">
        <br>
        <button type="submit" id="buttonRegister">
          <a href="/#feed">Cadastrar</a>
        </button>
      </form>
    </div>
`;
  areaSingUp.innerHTML = formSingUp;
  return areaSingUp;
};
