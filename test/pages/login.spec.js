import login from '../../src/pages/login/login.js';
jest.mock('../../src/lib/exports-firebase.js');

describe('login', () => {
  it('is a function', () => {
    expect(typeof login).toBe('function');
  });
});

/* describe('userWithLogin', () => {
  it('is a function', () => {
    expect(typeof userWithLogin()).toBe('function');
  });
}); */
