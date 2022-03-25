export default () => {
    const container = document.createElement("form");
        container.setAttribute("class", "container");

    const template = `
        <input class= "username" placeholder= "nome de usuário" required></input>
        <input class= "input-email" placeholder= "e-mail" type= "email" required></input>
        <input class= "input-password" placeholder= "senha" minlength= "6" type= "password" required></input>
        <input class= "confirm-password" placeholder= "confirmar senha" minlength= "6" type= "password" required></input>
        <button class= "enter" type= "submit">Cadastrar</button>
        <div class= "register"><a href="#">Já tenho um cadastro</a></div>
    `;

    container.innerHTML = template;

    return container;
}