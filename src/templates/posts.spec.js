
/*
* @jest-environment jsdom
*/
import posts from '../../../src/pages/posts.js';
import { publicatedPost } from '../../../src/lib/firestore.js';

jest.mock('../../../src/lib/exports.js');
jest.mock('../../../src/lib/firestore.js');

describe('publicatedPost', () => {
  it('Deverá ser função de postar na timeline', () => {
    publicatedPost.mockResolvedValueOnce();
    const title = 'Jest';
    const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const page = timeline();
    const btn = page.querySelector('.post-button');
    const titleInput = page.querySelector('.title');
    const textInput = page.querySelector('.message');

    titleInput.value = title;
    textInput.value = text;
    btn.dispatchEvent(new Event('click'));

    expect(publicatedPost).toHaveBeenCalledTimes(1);
    expect(publicatedPost).toHaveBeenCalledWith(title, message);
  });
});

describe('card', () => {
  it('Deverá criar um card de post', () => {
    const item = {
      title: 'Teste',
      text: 'Testando',
      user: 'hgsyws2344d',
      id: 'hydxbeychsd12',
        };
    const page = card(item);
    const title = page.querySelector('.published-title');
    const text = page.querySelector('.published-text');
    const user = page.querySelector('.user-name');

    expect(title.textContent).toEqual(item.title);
    expect(text.textContent).toEqual(item.text);
    expect(user.textContent).toEqual(item.user);
  });
});