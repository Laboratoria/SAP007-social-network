/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { bd } from '../../configurafirebase/configfirebase.js';

export async function createPost(text, date) {
  // user, uid) {
  const post = await addDoc(collection(bd, 'post'), {
    text: text.value,
    date,
    //   user: ,
    //   uid: ,
  });
  console.log('Document written with ID: ', post.text);
  return post;
}
