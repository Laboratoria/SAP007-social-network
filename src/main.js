import './lib/config-firebase.js';
import {createUser, signIn} from './lib/config-auth.js';
// myFunction();


const btnSignIn = document.getElementById('btnSignIn');

btnSignIn.addEventListener('click', async (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const createSignIn = await createUser (email,password);
    console.log(createSignIn);
})

btnSignIn.addEventListener('click', async (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const tryingSignIn = await signIn (email,password);
    // console.log(tryingSignIn);
})

