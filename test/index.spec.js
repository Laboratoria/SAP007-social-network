/*
* @jest-environment jsdom
 */
import home from '../src/pages/home.js';
import register from '../src/pages/register.js';
import { userLogin, userCreate } from '../src/lib/authentication.js';

jest.mock('../src/lib/exports.js');
jest.mock('../src/lib/authentication.js');

describe('userLogin', () => {
  it.skip('Deverá ser função de logar usuário', () => {
    const email = 'teste@teste.com';
    const password = '123456';
    const page = home();
    const emailLogin = page.querySelector('.input-email');
    const passwordLogin = page.querySelector('.input-password');
    const btnLogin = page.querySelector('container');
    emailLogin.value = email;
    passwordLogin.value = password;
    btnLogin.dispatchEvent(new Event('submit'));
    expect(userLogin).toHaveBeenCalledWith(email, password);
  });
});
describe('userCreate', () => {
  it('Deverá ser função de cadastrar usuário', () => {
    userCreate.mockResolvedValueOnce();
    const email = 'teste@teste.com';
    const password = '123456';
    const page = register();
    const emailRegister = page.querySelector('.email-register');
    const passwordRegister = page.querySelector('.password-register');
    const btnRegister = page.querySelector('.button-enter');
    emailRegister.value = email;
    passwordRegister.value = password;
    btnRegister.dispatchEvent(new Event('click'));
    expect(userCreate).toHaveBeenCalledWith(email, password);
  });
});
