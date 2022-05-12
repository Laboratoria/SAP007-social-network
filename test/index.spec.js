/*
* @jest-environment jsdom
*/
/* eslint-disable */
import { signIn, userCreate } from '../src/firebase/authentication.js';
import home from '../src/pages/home.js';
import register from '../src/pages/register.js';

jest.mock('../src/firebase/exports.js')
jest.mock('../src/firebase/authentication.js');

describe('signIn', () => {
  it('It should be a function for user login', () => {
    signIn.mockResolvedValueOnce();
    const page = home();
    const email = 'teste@teste.com';
    const password = '123456';
    const btnLogin = page.querySelector('#btnEnter');

    email.value = email;
    password.value = password;

    btnLogin.dispatchEvent(new Event('click'));

    expect(signIn).toHaveBeenCalledTimes(1);
    expect(signIn).toHaveBeenCalledWhite('teste@teste.com', '123456');
  });
});

describe('userCreate', () => {
  it('It should be a function to register the user', () => {
    userCreate.mockResolvedValueOnce();
    const page = register();
    const userName = page.querySelector('#name');
    const email = 'teste@teste.com';
    const password = '123456';
    const btnRegister = page.querySelector('#register');

    btnRegister.dispatchEvent(new Event('click'));

    userName.value = 'User';
    email.value = 'teste@teste.com';
    password.value = '123456';

    expect(userCreate).toHaveBeenCalledTimes(1);
    expect(userCreate).toHaveBeenCalledWhite('teste@teste.com', '123456');
  })
})