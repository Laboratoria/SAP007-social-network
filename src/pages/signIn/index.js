import '../../lib/config-firebase.js';
import {signIn} from '../../lib/config-auth.js';

export default function login(){
        const container = document.createElement('div');
        const template = `
            <div>
                <p> Sign In </p>
                <input type="email" id="email">
                <input type="password" id="password">
                <button type="submit" id="btnSignIn">Login</button>
            </div>
        `;
         container.innerHTML = template;
        
    const email = container.querySelector('#email');
    const password = container.querySelector('#password');
    const btnSignIn = container.querySelector('#btnSignIn');
    
    btnSignIn.addEventListener("click", (e) => {
        e.preventDefault();
        signIn (email.value,password.value)
        .then (function () {
            window.location.hash = '#feed';
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;
          });
    });
    return container
}  