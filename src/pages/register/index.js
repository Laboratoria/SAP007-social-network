export default function register (){
    const container = document.createElement('div');
    const template = `
        <div>
            <p> Register </p>
            <input type="email" id="email">
            <input type="password" id="password">
            <button type="submit" id="btnRegister">Cadastrar</button>
        </div>
    `;
     container.innerHTML = template;
     return container
     // console.log(template);
}

// const btnRegister = document.getElementById('btnRegister');

// btnRegister.addEventListener('click', async (e) => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const createSignIn = await createUser (email,password);
//     console.log(createSignIn);
// })
