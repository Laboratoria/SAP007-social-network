import '../../lib/config-firebase.js';
import { createUser } from '../../lib/config-auth.js';

export default function register() {
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

    const email = container.querySelector('#email');
    const password = container.querySelector('#password');
    const btnRegister = container.querySelector('#btnRegister');

    btnRegister.addEventListener('click', (e) => {
        e.preventDefault();
        createUser(email.value, password.value)
        .then ( function () {
            window.location.hash = '#feed';
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;
        });
               
    });
    return container;

}