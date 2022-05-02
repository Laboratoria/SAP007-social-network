import newuser from '../../src/pages/newuser/newuser.js';

jest.mock('../../src/lib/exports-firebase.js');

it('test if catch the error message in newuser page', () => {
  newuser.expect.assertions(1);
  return expect(error.errorCode(auth / weak - password)).rejects.toEqual({
    error: 'A senha deve ter no mínimo seis caracteres',
  });
});
