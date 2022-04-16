/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import { collection, addDoc, onSnapshot, doc, query, where, orderBy, getDocs, updateDoc } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { bd } from '../../configurafirebase/configfirestore.js';
// eslint-disable-next-line
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const auth = getAuth();
export const user = auth.currentUser;

export function authLogOut() {
  return signOut(auth);
}

export function createPost(text, date, userId, nameProfile) {
  // user, uid) {
  const post = addDoc(collection(bd, 'post'), {
    message: text,
    day: date,
    edit: '',
    id: 'att',
    userUid: userId,
    name: nameProfile,
  });
  console.log('Document written with ID: ', post.text);
  return post;
}

export function generateIdPost(id) {
  const docRef = doc(bd, 'post', id);

  const postWithId = updateDoc(docRef, {
    idPost: id,
  });

  return postWithId;
}

export function editPost(idPost, newContent) {
  const docRef = doc(bd, 'post', idPost);

  const editedPost = updateDoc(docRef, {
    edit: 'editado',
    text: newContent,
  });

  return editedPost;
}

export function getAllPosts() {
  const orderFirestore = query(collection(bd, 'post'), orderBy('day'));
  const postsFirestore = getDocs(orderFirestore);
  return postsFirestore;
}
