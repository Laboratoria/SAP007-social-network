/*
* @jest-environment jsdom
*/
import { pageLogin } from '../../src/pages/login/login.js';
import { errorHandlingGeneral } from '../../src/components/errorHandling.js';
import { logar, logarGmail } from '../../src/pages/login/authentication.js';
import { recover } from '../../src/pages/recover/recover-password.js';
import { pageAbout } from '../../src/pages/about/about.js';

jest.mock('../../src/configurafirebase/exports.js');
jest.mock('../../src/pages/login/authentication.js');

describe('logar', () => {
  const email = 'teste@teste.com';
  const password = '123456';
  const page = pageLogin();
  const inputEmail = page.querySelector('#email-area');
  const inputPassword = page.querySelector('#password-area');
  const btnLogin = page.querySelector('#btn-sign-in');
  it('Login deve ser chamado com email e password', () => {
    logar.mockResolvedValueOnce();
    inputEmail.value = email;
    inputPassword.value = password;
    btnLogin.dispatchEvent(new Event('click'));
    expect(logar).toHaveBeenCalledWith(email, password);
  });
  const error = { code: 'auth/invalid-email' };
  it('Deve testar se o valor retornado é chamado', () => {
    logar.mockRejectedValue(error);
    inputEmail.value = email;
    inputPassword.value = password;
    btnLogin.dispatchEvent(new Event('click'));
    expect(logar).toHaveBeenCalledWith(email, password);
  });
});

describe('error', () => {
  it('Deve testar se o valor do erro retornará', () => {
    expect(errorHandlingGeneral('auth/invalid-email')).toBe('Campos obrigatórios');
  });
});

describe('logarGmail', () => {
  const page = pageLogin();
  const btnGmail = page.querySelector('#btn-google');
  it('Login deve ser chamado a partir da conta Gmail', () => {
    logarGmail.mockResolvedValueOnce();
    btnGmail.dispatchEvent(new Event('click'));
    expect(logarGmail).toHaveBeenCalled();
  });
  const errorGmail = { code: 'Não foi possivel logar com sua conta Google' };
  it('Deve testar se o valor retornado é chamado', () => {
    logarGmail.mockRejectedValue(errorGmail);
    btnGmail.dispatchEvent(new Event('click'));
    expect(logar).toHaveBeenCalled();
  });
});

describe('pageLogin', () => {
  it('pageLogin() deve ser um Node.ELEMENT_NODE (1)', () => {
    expect(pageLogin().nodeType).toBe(1);
  });
});

describe('recover', () => {
  const page = pageLogin();
  const btnRecover = page.querySelector('.btn-recover-password');
  it('Deve carrega a página recover', () => {
    btnRecover.dispatchEvent(new Event('click'));
    expect(recover().nodeType).toBe(1);
  });
});

describe('pageAbout', () => {
  const page = pageLogin();
  const btnAbout = page.querySelector('.btn-about');
  it('Deve carrega a página about', () => {
    btnAbout.dispatchEvent(new Event('click'));
    expect(pageAbout().nodeType).toBe(1);
  });
});
