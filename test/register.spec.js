/*
* @jest-environment jsdom
 */

import register from '../src/pages/register/register.js';
import { userCreate } from '../src/lib/auth-firebase.js';

jest.mock('../src/lib/exports.js');
jest.mock('../src/lib/auth-firebase.js');

describe('userCreate', () => {
  it('criar usuario', () => {
    userCreate.mockResolvedValueOnce();
    const name = 'Maria Joaquina';
    const email = 'teste@teste.com';
    const password = '123456';
    const page = register();
    const nameRegister = page.querySelector('#inputName');
    const emailRegister = page.querySelector('#inputEmail');
    const passwordRegister = page.querySelector('#inputSenha');
    const btnCadastrar = page.querySelector('#btn-Cadastrar');
    nameRegister.value = name;
    emailRegister.value = email;
    passwordRegister.value = password;
    btnCadastrar.dispatchEvent(new Event('click'));
    expect(userCreate).toHaveBeenCalledWith(email, name, password);
  });
});
