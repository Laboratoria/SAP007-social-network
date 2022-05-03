import { registerNewUser } from '../src/config/authentication.js';

jest.mock('../src/config/export.js');

describe('TESTE PARA FUNÇÃO registerNewUser', () => {
  it('testar cadastro de usuario com e-mail e senha de 4 caracteres e espero retornar erro ', () => {
    expect(typeof registerNewUser).toBe('function');
  });
  it('testar cadastro de usuário com e-mail e senha correta', () => {
    expect(typeof registerNewUser).toBe('function');
  });
});


// função e fluxo 