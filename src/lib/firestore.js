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
} from './exports.js';

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
    e('Post não publicado', e);
  }
};

export const getPost = async () => {
  const collectionSortedByDate = query(
    collection(db, 'posts'),
    orderBy('data', 'asc'),
  );
  const arrPost = [];
  const querySnapshot = await getDocs(collectionSortedByDate);
  // eslint-disable-next-line no-shadow
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
    where('uid', '==', uid),
  );
  const arrMyPost = [];
  const querySnapshot = await getDocs(collectionSortedByUid);
  // eslint-disable-next-line no-shadow
  querySnapshot.forEach((doc) => {
    const myPost = doc.data();
    myPost.id = doc.id;
    arrMyPost.push(myPost);
  });
  return arrMyPost;
};

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
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

export const editPost = async (id, title, text) => {
  const post = doc(db, 'posts', id);
  await updateDoc(post, {
    title,
    text,
  });
  return post;
};

// export const addUserName = async (name) => {
//   const colRef = doc(db, 'posts', name);
//   await setDoc(colRef, {
//     name,
//   });
// };
