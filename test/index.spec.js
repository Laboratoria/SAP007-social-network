import { registerNewUser } from '../src/config/authentication.js';

describe('TESTE PARA FUNÇÃO registerNewUser', () => {
  it('is delicious', () => {
    expect(typeof registerNewUser).toBe('function');
  });
});
