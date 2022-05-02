/*
* @jest-environment jsdom
*/
/* eslint-disable */
import login from '../../src/pages/login/login.js';
<<<<<<< HEAD
=======
import * as functionsFirebase from '../../src/lib/exports-firebase.js';
import { userWithLogin } from '../../src/configs/authentication.js';
>>>>>>> 2440956aee70ef33c75562ce18c2106f9740b92e

jest.mock('../../src/lib/exports-firebase.js');

it ('login should signIn with success', async () => {
  const page = login();
  const buttonEmail = page.querySelector('#input-email');
  const buttonPassword = page.querySelector('#input-password');
  const buttonLogin = page.querySelector('#button-login');
  buttonEmail.value = 'teste@teste.com';
  buttonPassword.value = '123456';  

  buttonLogin.dispatchEvent(new Event('click'));
  
  await userWithLogin('teste@teste.com', '123456')
  expect(functionsFirebase.signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  expect(functionsFirebase.signInWithEmailAndPassword).toHaveBeenCalledWith(functionsFirebase.getAuth, 'teste@teste.com', '123456');
});

describe("page login", () => {
  it("It should return an error", () => {
    const page = login();
    const buttonEmail = page.querySelector('#input-email');
    const buttonPassword = page.querySelector('#input-password');
    const buttonLogin = page.querySelector('#button-login');

    buttonEmail.value = '';
    buttonPassword.value = '123456';
    buttonLogin.dispatchEvent(new Event('click'));

    const msgAlert = page.querySelector('#message');

    expect(msgAlert.innerHTML = "Insira um email válido.").toBe("Insira um email válido.");
  });
});


