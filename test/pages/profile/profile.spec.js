/*
* @jest-environment jsdom
 */
import templates from '../../../src/components/templates.js';
import { deletePost, editPost } from '../../../src/lib/firestore.js';

jest.mock('../../../src/lib/exports.js');
jest.mock('../../../src/lib/firestore.js');

describe('deletePost', () => {
  it('Deverá ser função de deletar um post', () => {
    deletePost.mockResolvedValue();
    const title = 'Jest';
    const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const page = templates();
    const titleInput = page.querySelector('.title');
    const textInput = page.querySelector('.text');
    const btn = page.getElementById('yes');

    titleInput.value = title;
    textInput.value = text;
    btn.dispatchEvent(new Event('click'));

    expect(deletePost).toHaveBeenCalledTimes(1);
    expect(deletePost).toHaveBeenCalledWith(id);
  });
});

describe('editPost', () => {
  it('Deverá ser função de editar um post', () => {
    editPost.mockResolvedValue();
    const newTitle = 'Jest';
    const newText = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const page = templates();
    const titleInput = page.getElementById('title');
    const textInput = page.getElementById('text');
    const btn = page.getElementById('update');

    titleInput.value = newTitle;
    textInput.value = newText;
    btn.dispatchEvent(new Event('click'));

    expect(editPost).toHaveBeenCalledTimes(1);
    expect(editPost).toHaveBeenCalledWith(newTitle, newText);
  });
});
