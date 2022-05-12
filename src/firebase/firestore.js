import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from './exports.js';
import { auth } from './authentication.js';

// import { db } from './config-firebase';
const db = getFirestore();
export const getCurrentUser = () => auth.currentUser.displayName;

// eslint-disable-next-line consistent-return
export const createPost = async (textPost) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      textPost,
      userName: auth.currentUser.displayName,
      date: new Date(),
      like: [],
    });
    return docRef.id;
  } catch (e) {
    // return e
  }
};
export const getPost = async () => {
  const arrPost = [];
  const orderFirestore = query(collection(db, 'post'));
  const querySnapshot = await getDocs(orderFirestore);
  // eslint-disable-next-line no-shadow
  querySnapshot.forEach((doc) => {
    const timeline = doc.data();
    arrPost.push({ ...timeline, id: doc.id });
  });
  return arrPost;
};

export const like = async (idPost, userEmail) => {
  try {
    const docId = doc(db, 'post', idPost);
    return await updateDoc(docId, {
      like: arrayUnion(userEmail),
    });
  // eslint-disable-next-line no-empty
  } catch (e) {
  }
  return arrayUnion;
};

export const dislike = async (idPost, userEmail) => {
  try {
    const docId = doc(db, 'post', idPost);
    return await updateDoc(docId, {
      like: arrayRemove(userEmail),
    });
  // eslint-disable-next-line no-empty
  } catch (e) {
  }
  return arrayRemove;
};

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'post', id));
};

// conectar com o firebase
// encontrar o post certo pelo id (id do post)
// atualizar as informações do post (novo texto)

export const editPost = async (idPost, textPost) => {
  const post = doc(db, 'post', idPost);
  // eslint-disable-next-line no-return-await
  return await updateDoc(post, { textPost });
};
