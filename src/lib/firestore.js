import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

import { app } from './firebase.js';
import { auth } from './authentication.js';

export const db = getFirestore(app);

export const publicatedPost = async (valueTitle, valueText) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      title: valueTitle,
      text: valueText,
      data: new Date(),
      uid: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      likes: [],
    });
    return docRef;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getPost = async () => {
  const collectionSortedByDate = query(
    collection(db, 'posts'),
    orderBy('data', 'asc')
  );
  const arrPost = [];
  const querySnapshot = await getDocs(collectionSortedByDate);
  querySnapshot.forEach((doc) => {
    const timeline = doc.data();
    timeline.id = doc.id;
    arrPost.push(timeline);
  });
  return arrPost;
};

export const postUser = async (uid) => {
  const collectionSortedByUid = query(
    collection(db, 'posts'),
    orderBy('data', 'asc'),
    where('uid', '==', uid)
  );
  let arrMyPost = [];
  const querySnapshot = await getDocs(collectionSortedByUid);
  querySnapshot.forEach((doc) => {
    const myPost = doc.data();
    myPost.id = doc.id;
    arrMyPost.push(myPost);
  });
  return arrMyPost;
};

export const deletePost = async (id) => {
  return await deleteDoc(doc(db, 'posts', id));
};

export async function like(id, user) {
  const post = doc(db, 'posts', id);
  await updateDoc(post, {
    likes: arrayUnion(user),
  });
}

export async function dislike(id, user) {
  const post = doc(db, 'posts', id);
  await updateDoc(post, {
    likes: arrayRemove(user),
  });
}

export const editPost = async (id,title, text) => {
const post = doc(db, 'posts', id);
    await updateDoc(post, {
    title: title,
    text: text
  });
  return post;
}
