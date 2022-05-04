/*
* @jest-environment jsdom
 */
import profile from '../../../src/pages/profile.js';
import templates from '../../../src/components/templates.js';
import { postUser, deletePost, editPost } from '../../../src/lib/firestore.js';

jest.mock('../../../src/lib/exports.js');
jest.mock('../../../src/lib/firestore.js');

describe('postUser', () => {
  it('Deverá ser função de postar na página Perfil, apensas seus próprios posts', () => {
  //  postUser.mockResolvedValueOnce();
    const title = 'Jest';
    const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const page = profile();
    // const userName = page.querySelector('.username');
    // const emailRegister = page.querySelector('.email-register');
    // const passwordRegister = page.querySelector('.password-register');

//     userName.value = 'User';
//     emailRegister.value = email;
//     passwordRegister.value = password;
//     page.dispatchEvent(new Event('submit'));

//     expect(userCreate).toHaveBeenCalledTimes(1);
//     expect(userCreate).toHaveBeenCalledWith(email, password);
//   });
// });
