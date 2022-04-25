import { registerUser } from '../../src/configs/authentication.js';

jest.mock('../src/lib/exports-firebase.js');

describe('registerUser', () => {
  it('is a function', () => {
    expect(typeof registerUser).toBe('function');
  });
});

// it('registerUser should create a user with email; password and displayname', () => {
//   registerUser();
// });
