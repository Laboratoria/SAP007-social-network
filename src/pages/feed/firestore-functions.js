/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import { collection, addDoc, onSnapshot, doc, query, where, orderBy, getDocs, updateDoc, deleteDoc, arrayUnion, arrayRemove } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { bd } from '../../configurafirebase/configfirestore.js';
// eslint-disable-next-line
import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const auth = getAuth();

export function getPersistedUser() {
  const authUserKey = Object.keys(window.sessionStorage).find((item) => item.startsWith('firebase:authUser'));
  let user = sessionStorage.getItem(authUserKey);
  user = JSON.parse(user);
  return user;
}

export function authLogOut() {
  return signOut(auth);
}

export function createPost(post) {
  const postObject = addDoc(collection(bd, 'post'), post);
  return postObject;
}

export function generateIdPost(id) {
  const docRef = doc(bd, 'post', id);

  const postWithId = updateDoc(docRef, {
    idPost: id,
  });

  return postWithId;
}

export function likePost(idPost, uidUser) {
  const docRef = doc(bd, 'post', idPost);
  const likedPost = updateDoc(docRef, {
    like: arrayUnion(uidUser),
  });
  return likedPost;
}

export function removeLikePost(idPost, uidUser) {
  const docRef = doc(bd, 'post', idPost);
  const removeLikedPost = updateDoc(docRef, {
    like: arrayRemove(uidUser),
  });
  return removeLikedPost;
}

export function removeCommentPost(idPost, objComment) {
  const docRef = doc(bd, 'post', idPost);
  const removeComment = updateDoc(docRef, {
    comment: arrayRemove(objComment),
  });
  return removeComment;
}

export function createCommentPost(idPost, objComment) {
  const docRef = doc(bd, 'post', idPost);
  const comment = updateDoc(docRef, {
    comment: arrayUnion(objComment),
  });
  return comment;
}

export function editPost(idPost, newContent) {
  const docRef = doc(bd, 'post', idPost);

  const editedPost = updateDoc(docRef, {
    edit: 'Editado',
    message: newContent,
  });
  return editedPost;
}

export function removePost(idPost) {
  const deletePost = deleteDoc(doc(bd, 'post', idPost));
  return deletePost;
}

export function getAllPosts() {
  const orderFirestore = query(collection(bd, 'post'), orderBy('day'));
  const postsFirestore = getDocs(orderFirestore);
  return postsFirestore;
}
