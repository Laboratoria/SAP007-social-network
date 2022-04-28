import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  deleteDoc,
  getDocs,
  updateDoc,
  doc,
  where,
  arrayUnion,
  arrayRemove
} from '../lib/exports-firebase.js';

import { auth } from './authentication.js';

export const db = getFirestore();

export async function newPost(msg) {
  const displayNameUser = auth.currentUser.displayName;
  const uid = auth.currentUser.uid;
  try {
    const post = {
      message: msg,
      displayName: displayNameUser,
      likes: [],
      date: new Date().toLocaleString('pt-br'),
      userId: uid,
    };
    const docRef = await addDoc(collection(db, 'posts'), post);
    // console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (e) {
    return e;
  }
}

export const likePost = async (postId, user) => {
  console.log(user);
  const postLiked = doc(db, 'posts', postId);
  try {
    return await updateDoc(postLiked, {
      likes: arrayUnion(user)
    });
  } catch (e) {
    return e;
  }
};

export const dislikePost = async (postId, user) => {
  const postLiked = doc(db, "posts", postId);
  try {
    return await updateDoc(postLiked, {
      likes: arrayRemove(user),
    });
  } catch (e) {
    return e;
  }
}

// cria uma nova coleção - cada user é um documento
export async function collectUsers(email, displayName) {
  try {
    const user = {
      userEmail: email,
      displayName,
    };
    const docRef = await addDoc(collection(db, 'users'), user);
    // console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (e) {
    return e;
  }
}

// para ver todos os documentos de "posts"
export const allPosts = async () => {
  const arrayOfPosts = [];
  const sortingPosts = query(collection(db, 'posts'), orderBy('date', 'desc'));
  const querySnapshot = await getDocs(sortingPosts);
  querySnapshot.forEach((item) => {
    const posts = item.data();
    const postId = item.id;
    posts.id = postId;
    arrayOfPosts.push(posts);
  });
  return arrayOfPosts;
};

export const getUserPosts = async (id) => {
  const arrayOfMyPosts = [];
  const clause = where('userId', '==', id);
  const querySnapshot = query(collection(db, 'posts'), clause);
  const test = await getDocs(querySnapshot);
  test.forEach((item) => {
    const post = item.data();
    const postId = item.id;
    post.id = postId;
    arrayOfMyPosts.push(post);
  });
  return arrayOfMyPosts;
};

export const getFunctionDelet = async (postId) => {
  await deleteDoc(doc(db, "posts", postId))
}

export const editAPost = async (postId, editedMessage) => {
  const postToEdit = doc(db, 'posts', postId)
  return await updateDoc(postToEdit, {
    message: editedMessage,
  });
}
