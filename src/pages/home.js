export default () => {
    const container = document.createElement("form");
        container.setAttribute("class", "container");

    const template = `
        <input class= "input-email" placeholder= "e-mail" type= "email" required></input>
        <span class="error"></span>
        <input class= "input-password" placeholder= "senha" minlength= "6" type= "password" required></input>
        <button class= "enter" type= "submit" onclick="return validator()">Entrar</button>
        <div class= "register"><a href="#register">Cadastre-se</a></div>
    `;

    container.innerHTML = template;

    return container;
}

// function validator() {
//     const email = document.querySelector(".input-email");
//    // const password = formuser.password.value;
//     const error = document.querySelector(".error");

//     if(email == ""){
//         error.innerHTML = "Preencha o campo e-mail";
//         email.focus();
//         return false;
//     }
// }

// validator();