// importamos la funcion que vamos a testear
import { signIn } from '../src/lib/index';

describe('signIn', () => {
  it('login user correctly', () => {
    const email = 'teste@teste.com';
    const password = '123456'
    expect(typeof signIn).toBe('function');
  });
});
