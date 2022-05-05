/*
* @jest-environment jsdom
 */
import card from '../../../src/components/card.js';
import timeline from '../../../src/pages/timeline.js';
import { auth } from '../../../src/lib/authentication.js';
import { publicatedPost, getPost, like, dislike } from '../../../src/lib/firestore.js';

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

describe('getPost', () => {
  it('Deverá ser função de pegar os documentos no banco de dados e printar no feed', () => {
    getPost.mockResolvedValueOnce();
    const title = 'Jest';
    const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const user = auth.currentUser;
    const page = timeline();
    const btn = page.querySelector('.btn-post');
    const titleInput = page.querySelector('.title');
    const textInput = page.querySelector('.text');

    titleInput.value = title;
    textInput.value = text;
    btn.dispatchEvent(new Event('click'));

    expect(getPost).toHaveBeenCalledTimes(1);
    expect(getPost).toHaveBeenCalledWith(title, text, user);
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