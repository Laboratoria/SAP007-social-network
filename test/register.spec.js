/*
 * @jest-environment jsdom
 */
/* eslint-disable */
import { userCreate } from '../src/firebase/authentication.js';
import register from '../src/pages/register.js';

jest.mock('../src/firebase/exports.js');
jest.mock('../src/firebase/authentication.js');

describe('userCreate', () => {
  it('It should be a function to register the user', async () => {
    userCreate.mockResolvedValueOnce();
    const page = register();
    const email = page.querySelector('#email');
    const password = page.querySelector('#password');
    const userName = page.querySelector('#name');
    const btnRegister = page.querySelector('#register');

    userName.value = 'User';
    email.value = 'teste@teste.com';
    password.value = '123456';

    btnRegister.dispatchEvent(new Event('click'));

    expect(userCreate).toHaveBeenCalledTimes(1);
  });
});
it('should return an error message if the email is invalid', () => {
  userCreate.mockResolvedValueOnce();
  const page = register();
  const email = page.querySelector('#email');
  const password = page.querySelector('#password');
  const btnLogin = page.querySelector('#register');

  email.value = 'teste@teste.com';
  password.value = '123456';
  btnLogin.dispatchEvent(new Event('click'));

  expect(userCreate).toHaveBeenCalledTimes(1);
});
it('should return an error message if the password is invalid', () => {
  userCreate.mockResolvedValueOnce();
  const page = register();
  const email = page.querySelector('#email');
  const password = page.querySelector('#password');
  const btnLogin = page.querySelector('#register');

  email.value = 'teste@teste.com';
  password.value = '123456';
  btnLogin.dispatchEvent(new Event('click'));

  expect(userCreate).toHaveBeenCalledTimes(1);
});
it('should return the message that the user already uses this email', () => {
  userCreate.mockResolvedValueOnce();
  const page = register();
  const email = page.querySelector('#email');
  const password =  page.querySelector('#password');
  const btnLogin = page.querySelector('#register');

  email.value = 'teste@teste.com';
  password.value = '123456';
  btnLogin.dispatchEvent(new Event('click'));

  expect(userCreate).toHaveBeenCalledTimes(1);
});