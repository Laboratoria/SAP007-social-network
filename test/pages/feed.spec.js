/*
* @jest-environment jsdom
*/
import { feed } from '../../src/pages/feed/feed.js';
import { getAllPosts } from '../../src/pages/feed/firestore-functions.js';

jest.mock('../../src/configurafirebase/exports.js');
jest.mock('../../src/pages/feed/firestore-functions.js');

const user = {
  photoURL: '',
};

describe('feed', () => {
  it('feed(user) deve ser um Node.ELEMENT_NODE (1)', () => {
    getAllPosts.mockResolvedValueOnce();
    expect(feed(user).nodeType).toBe(1);
  });
});
