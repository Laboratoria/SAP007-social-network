import { registerNewUser } from '../src/config/authentication.js';
import { loginLabFriends } from '../src/js/pages/login.js' 

jest.mock('../src/config/export.js');

describe('Teste de tipo de função', () => {
  it('registerNewUser é uma função', () => {
    expect(typeof registerNewUser).toBe('function');
  });
  it('loginLabFriends é uma função ', () => {
    expect(typeof loginLabFriends).toBe('function');
  });
});

describe('registerUser', () => {
  it('Deverá registrar um usuário', () => {
    registerUser.mockResolvedValueOnce();
      const name = 'Raynara Pimenta';
      const email = 'raynarapimenta@gmail.com';
      const password = '123456';
      const page = Register();
      const nameInput = page.querySelector('.name');
      const emailInput = page.querySelector('.email');
      const passwordInput = page.querySelector('.password');
      const btnRegister = page.querySelector('#register-button');
      nameInput.value = name;
      emailInput.value = email;
      passwordInput.value = password;
      btnRegister.dispatchEvent(new Event('click'));
    expect(registerUser).toHaveBeenCalledWith(name, email, password);
    expect(registerUser).toHaveBeenCalledTimes(1);
  });
});

describe('loginLabFriends', () => {
  it('Deverá logar na timeline', () => {
    signIn.mockResolvedValueOnce();
      const email = 'raynarapimenta@gmail.com';
      const password = '123456';
      const page = Login();
      const emailLogin = page.querySelector('.email-login');
      const passwordLogin = page.querySelector('.password-login');
      const btnLogin = page.querySelector('#signin-button');
      emailLogin.value = email;
      passwordLogin.value = password; 
      btnLogin.dispatchEvent(new Event('click'));
    expect(loginLabFriends).toHaveBeenCalledWith(email, password);
    expect(loginLabFriends).toHaveBeenCalledTimes(1);
  });
});
