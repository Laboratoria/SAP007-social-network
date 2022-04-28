import { registerNewUser } from '../src/config/authentication.js'


describe('TESTE PARA FUNÇÃO registerNewUser', () => {
    test('is delicious', () => {
        expect('registerNewUser').toBe('function');
    });
});

// importar as outras funções do config (-start-firebase) que eu criei (criar pasta dentro de test)
// fazer mocks para as funções do firebase (acerto e erro)