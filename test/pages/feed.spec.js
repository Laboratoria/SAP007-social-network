/*
* @jest-environment jsdom
*/
import { feed } from '../../src/pages/feed/feed.js';
import { createPost, getAllPosts } from '../../src/pages/feed/firestore-functions.js';
import {
  postElement,
} from '../../src/components/timelinepost.js';

jest.mock('../../src/configurafirebase/exports.js');
jest.mock('../../src/pages/feed/firestore-functions.js');

const user = {
  photoURL: '',
  displayName: '',
  uid: '',
};

describe('feed', () => {
  it('feed(user) deve ser um Node.ELEMENT_NODE (1)', () => {
    console.log(getAllPosts);
    getAllPosts.mockResolvedValueOnce();
    expect(feed(user).nodeType).toBe(1);
  });
});

describe('createPost(post)', () => {
  it('createPost(post) deve ter sido chamada pelo menos uma vez, deve ter um objeto na chamada que contenha {message: "testando", ...', () => {
    getAllPosts.mockResolvedValueOnce();
    createPost.mockResolvedValueOnce();

    const timeline = feed(user);
    const input = timeline.querySelector('#input-post');
    const btnPost = timeline.querySelector('#btn-post');
    input.value = 'testando';
    btnPost.dispatchEvent(new Event('click'));

    expect(createPost).toHaveBeenCalled();
    expect(createPost.mock.calls).toMatchObject([[{
      message: 'testando',
      edit: '',
      userUid: user.uid,
      name: user.displayName,
      imgProfile: user.photoURL,
      like: [],
      comment: [],
    }]]);
  });
});

describe('postElement()', () => {
  const oi = {
    message: 'testando',
    edit: '',
    userUid: user.uid,
    name: user.displayName,
    imgProfile: user.photoURL,
    like: [],
    comment: [],
    day: { second: new Date().getTime() / 1000 },
  };

  it('createPost(post) deve ter sido chamada pelo menos uma vez', () => {
    getAllPosts.mockResolvedValueOnce();
    expect(postElement(oi, user, createPost.mockReturnValue({ id: 'oi' })).nodeType).toBe(1);
  });
});
