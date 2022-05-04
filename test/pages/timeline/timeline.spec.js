/*
* @jest-environment jsdom
 */
import card from '../../../src/components/card.js';
import timeline from '../../../src/pages/timeline.js';
import { publicatedPost, getPost, like, dislike } from '../../../src/lib/firestore.js';;

jest.mock('../src/lib/exports.js');
jest.mock('../src/lib/firestore.js');

describe('publicatedPost', () => {
  it('Deverá ser função de postar na timeline', () => {
  //  publicatedPost.mockResolvedValueOnce();
    const title = 'Jest';
    const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const page = timeline();
    const titleInput = page.querySelector('.title');
    const textInput = page.querySelector('.text');

    titleInput.value = title;
    textInput.value = text;
    page.dispatchEvent(new Event('click'));

    expect(publicatedPost).toHaveBeenCalledTimes(1);
    expect(publicatedPost).toHaveBeenCalledWith(title, text);
  });
});

describe('getPost', () => {
  it('Deverá ser função de pegar os documentos no banco de dados e printar no feed', () => {
    //getPost.mockResolvedValueOnce();
    const title = 'Jest';
    const text = 'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.';
    const page = timeline();

    const titleInput = page.querySelector('.title');
    const textInput = page.querySelector('.text');

    titleInput.value = title;
    textInput.value = text;
    page.dispatchEvent(new Event('click'));

    expect(getPost).toHaveBeenCalledTimes(1);
    expect(getPost).toHaveBeenCalledWith(title, text);
  });
});
