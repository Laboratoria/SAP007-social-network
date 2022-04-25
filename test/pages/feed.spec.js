/*
* @jest-environment jsdom
*/
import feed from '../../src/pages/feed/feed.js';

describe('feed', () => {
  it('is a function', () => {
    expect(typeof feed).toBe('function');
  });
});

/* it('formatDateStyle should return the date formated', () => {
  const date = '20 de abril de 2022 00:44:24 UTC-3';
  expect(formatDateStyle(date)).toEqual('20/04/2022 às 00:44:24');
});
describe('createCardPost', () => {
  it('is a function', () => {
    expect(typeof createCardPost).toBe('function');
  });

  it('createCardPost should return an post with informations', () => {
    const post = {
      message: 'Olá, isso é um teste',
      displayName: 'userDisplayName',
      likes: [],
      date: '24/04/2022',
      userId: 'idCreateByFirebase',
      postId: 'aleatoryCode',
    };
    const card = createCardPost(post.message, post.displayName, post.date, post.id, post.likes);
    const paragraphs = card.querySelectorAll('p');
    expect(paragraphs.length).toEqual(3);
  });
}); */
