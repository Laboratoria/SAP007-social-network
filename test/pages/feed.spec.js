/*
* @jest-environment jsdom
*/
/* eslint-disable */
import feed from '../../src/pages/feed/feed.js';
import * as functionsFirebase from '../../src/lib/exports-firebase.js';
import { newPost } from '../../src/configs/authentication.js';

jest.mock('../../src/lib/exports-firebase.js');

describe('feed', () => {
  it('is a function', () => {
    expect(typeof feed).toBe('function');
  });

  /*it('should create a post', async () => {

  })*/
});

