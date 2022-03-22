export default () => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const template = `
    <input class= "input-email" placeholder= "e-mail" type= "email"></input>
    <input class= "input-password" placeholder= "senha" minlength= "6"></input>
    <button class= "enter" type= "submit">Entrar</button>
    <div class= "register"><a href="/#register">Cadastre-se</a></div>
    `;

    container.innerHTML = template;

    return container;
}