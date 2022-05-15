/*
 * @jest-environment jsdom
 */
/* eslint-disable */
import { signIn, signInWithGoogle } from '../src/firebase/authentication.js';
import home from '../src/pages/home.js';

jest.mock('../src/firebase/exports.js');
jest.mock('../src/firebase/authentication.js');

describe('Its a function', () => {
  it('signIn', () => {
    expect(typeof signIn).toBe('function');
  });
  it('signInWithGoogle', () => {
    expect(typeof signInWithGoogle).toBe('function');
  });
});

describe('signIn', () => {
  it('It should be a function for user login', () => {
    signIn.mockResolvedValueOnce();
    const page = home();
    const email = page.querySelector('#email');
    const password = page.querySelector('#password');
    const btnLogin = page.querySelector('#btnEnter');

    email.value = 'teste@teste.com';
    password.value = '123456';
    btnLogin.dispatchEvent(new Event('click'));

    expect(signIn).oHaveBeenCalledWith(email, password);
  });
});
const error = { code: 'uth/internal-error' };
it('should return an error message if the email or password is invalid', () => {
  signIn.mockResolvedValueOnce(error);
  const page = home();
  const email = page.querySelector('#email');
  const password = page.querySelector('#password');
  const btnLogin = page.querySelector('#btnEnter');

  email.value = 'teste@teste.com';
  password.value = '123456';
  btnLogin.dispatchEvent(new Event('click'));

  expect(signIn).toHaveBeenCalledTimes(1);
});

describe('signInWithGoogle', () => {
  it('if the user is valid, he/she must log in with the Google account', () => {
    signInWithGoogle.mockResolvedValueOnce();
    const page = home();
    const btnGoogle = page.querySelector('.google-link');

    btnGoogle.dispatchEvent(new Event('click'));
    expect(signInWithGoogle).toHaveBeenCalledTimes(1);
  });
});
