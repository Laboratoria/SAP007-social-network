/*
* @jest-environment jsdom
*/
import card from '../../../src/components/card.js';
import timeline from '../../../src/pages/timeline.js';
import { publicatedPost, like, dislike } from '../../../src/lib/firestore.js';
import { getAuth } from '../../../src/lib/exports.js';

jest.mock('../../../src/lib/exports.js');
jest.mock('../../../src/lib/firestore.js');

describe('publicatedPost', () => {
  it('Deverá ser função de postar na timeline', () => {
    publicatedPost.mockResolvedValueOnce();
    const title = 'Jest';
    const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const page = timeline();
    const btn = page.querySelector('.btn-post');
    const titleInput = page.querySelector('.title');
    const textInput = page.querySelector('.text');

    titleInput.value = title;
    textInput.value = text;
    btn.dispatchEvent(new Event('click'));

    expect(publicatedPost).toHaveBeenCalledTimes(1);
    expect(publicatedPost).toHaveBeenCalledWith(title, text);
  });
});

describe('card', () => {
  it('Deverá criar um card de post', () => {
    const item = {
      title: 'Teste',
      text: 'Testando',
      user: 'hgsyws2344d',
      id: 'hydxbeychsd12',
      likes: [],
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

describe('like', () => {
  it('Deverá curtir um post', () => {
    like.mockResolvedValueOnce();
    // const title = 'Jest';
    // const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    // const user = auth.currentUser;
    const page = card();
    // const btn = page.querySelector('.btn-post');
    // const titleInput = page.querySelector('.title');
    // const textInput = page.querySelector('.text');

    // titleInput.value = title;
    // textInput.value = text;
    // btn.dispatchEvent(new Event('click'));

    // expect(like).toHaveBeenCalledTimes(1);
    // expect(like).toHaveBeenCalledWith();
  });
});

describe('dislike', () => {
  it('Deverá desm post', () => {
    dislike.mockResolvedValueOnce();
    // const title = 'Jest';
    // const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    // const user = auth.currentUser;
    const page = card();
    // const btn = page.querySelector('.btn-post');
    // const titleInput = page.querySelector('.title');
    // const textInput = page.querySelector('.text');

    // titleInput.value = title;
    // textInput.value = text;
    // btn.dispatchEvent(new Event('click'));

    // expect(dislike).toHaveBeenCalledTimes(1);
    // expect(dislike).toHaveBeenCalledWith();
  });
});