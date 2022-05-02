/*
* @jest-environment jsdom
*/
/* eslint-disable */
import newuser from '../../src/pages/newuser/newuser.js';
import * as functionsFirebase from '../../src/lib/exports-firebase.js';

jest.mock('../../src/lib/exports-firebase.js');






/* it('registerUser should create a user with email; password and displayname', async () => {
  createUserWithEmailAndPassword.mockResolvedValue({
    user: {},
  });

  await registerUser('beaproscarva@gmail.com', '123456');

  expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
}); */
