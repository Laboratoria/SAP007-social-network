/*
* @jest-environment jsdom
*/
/* eslint-disable */
import newuser from '../../src/pages/newuser/newuser.js';
import * as functionsFirebase from '../../src/lib/exports-firebase.js';
import { registerUser } from '../../src/lib/exports-firebase.js';

jest.mock('../../src/lib/exports-firebase.js');

describe('registerUser', () => {
  it('should register correctly', async () => {
      const page = newuser();
      const newUserName = page.querySelector('#input-name');
      const newUserEmail = page.querySelector('#input-email');
      const newUserPassword = page.querySelector('#input-password');
      const buttonRegister = page.querySelector('#button-register');
      newUserName.value = 'Teste';
      newUserEmail.value = 'teste@teste.com';
      newUserPassword.value = '123456';

      buttonRegister.dispatchEvent(new Event('click'));

    await registerUser(undefined, 'teste@teste.com', '123456');
    expect(functionsFirebase.createUserWithEmailAndPassword).toHaveBeenCalledWith(functionsFirebase.getAuth, 'teste@teste.com', '123456');
    expect(functionsFirebase.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
<<<<<<< HEAD
=======

>>>>>>> 2440956aee70ef33c75562ce18c2106f9740b92e
