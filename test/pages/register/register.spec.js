/*
* @jest-environment jsdom
 */
import register from '../../../src/pages/register.js';
import { userCreate } from '../../../src/lib/authentication.js';

jest.mock('../src/lib/exports.js');
jest.mock('../src/lib/authentication.js');

describe('userCreate', () => {
  it('Deverá ser função de cadastrar usuário', () => {
    userCreate.mockResolvedValueOnce();
    const email = 'teste@teste.com';
    const password = '123456';
    const page = register();
    const userName = page.querySelector('.username');
    const emailRegister = page.querySelector('.email-register');
    const passwordRegister = page.querySelector('.password-register');

    userName.value = 'User';
    emailRegister.value = email;
    passwordRegister.value = password;
    page.dispatchEvent(new Event('submit'));

    expect(userCreate).toHaveBeenCalledTimes(1);
    expect(userCreate).toHaveBeenCalledWith(email, password);
  });
});
