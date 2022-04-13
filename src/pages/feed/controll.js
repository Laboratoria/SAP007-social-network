/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import { collection, addDoc, onSnapshot, doc, query, where, orderBy, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { bd } from '../../configurafirebase/configfirestore.js';
// eslint-disable-next-line
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const auth = getAuth();
export const user = auth.currentUser;

export function authLogOut() {
  return signOut(auth);
}

export function createPost(text, date) {
  // user, uid) {
  const post = addDoc(collection(bd, 'post'), {
    message: text,
    day: date,
    //   user: ,
    //   uid: ,
  });
  console.log('Document written with ID: ', post.text);
  return post;
}

export function getAllPosts() {
  const orderFirestore = query(collection(bd, 'post'), orderBy('day'));
  const postsFirestore = getDocs(orderFirestore);
  return postsFirestore;
}
