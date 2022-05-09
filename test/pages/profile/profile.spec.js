/*
* @jest-environment jsdom
 */
import card from '../../../src/components/templates.js';
import { deletePost, editPost } from '../../../src/lib/firestore.js';

jest.mock('../../../src/lib/exports.js');
jest.mock('../../../src/lib/firestore.js');

describe('deletePost', () => {
  it('Deverá ser função de deletar um post', () => {
    const item = {
      title: 'Teste',
      text: 'Testando',
      user: 'hgsyws2344d',
      id: 'hydxbeychsd12',
    };

    const page = card(item);
    const deleteAction = page.querySelector('.delete');

    deleteAction.dispatchEvent(new Event('click'));

    expect(deletePost).toHaveBeenCalledTimes(1);
    expect(deletePost).toHaveBeenCalledWith(item.id);
  });
});

describe('editPost', () => {
  it('Deverá ser função de editar um post', () => {
    const item = {
      title: 'Teste',
      text: 'Testando',
      user: 'hgsyws2344d',
      id: 'hydxbeychsd12',
    };
    const page = card(item);
    const title = page.querySelector('.published-title');
    const text = page.querySelector('.published-text');
    const editAction = page.querySelector('.edit');

    editAction.dispatchEvent(new Event('click'));

    expect(editPost).toHaveBeenCalledTimes(1);
    expect(editPost).toHaveBeenCalledWith(item.id, title.value, text.value);
  });
});
