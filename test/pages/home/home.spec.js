/*
* @jest-environment jsdom
 */
import home from '../../../src/pages/home.js';
import { userLogin } from '../../../src/lib/authentication.js';

jest.mock('../../../src/lib/exports.js');
jest.mock('../../../src/lib/authentication.js');

describe('userLogin', () => {
  it('Deverá ser função de logar usuário', () => {
    userLogin.mockResolvedValueOnce();
    const email = 'teste@teste.com';
    const password = '123456';
    const page = home();
    const emailLogin = page.querySelector('.input-email');
    const passwordLogin = page.querySelector('.input-password');

    emailLogin.value = email;
    passwordLogin.value = password;
    page.dispatchEvent(new Event('submit'));

    expect(userLogin).toHaveBeenCalledTimes(1);
    expect(userLogin).toHaveBeenCalledWith(email, password);
  });
});
