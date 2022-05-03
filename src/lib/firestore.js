import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  arrayUnion,
  deleteDoc,
  doc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { auth } from '../configs/config.firebase.js';
const db = getFirestore();

export const createPost = async (textPost, userEmail) => {
  const displayNameUser = auth.currentUser.displayName;
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      recipe: textPost,
      author: displayNameUser,
      date: new Date().toLocaleString('pt-br'),
    });
    console.log('Post escrito por id: ', docRef.id);
  } catch (e) {
    alert('Erro ao adicionar post', e);
  }
};

export async function getPosts() {
  const arrPost = [];
  const sortingPosts = query(collection(db, 'posts'), orderBy('date', 'asc'));
  const querySnapshot = await getDocs(sortingPosts);
  querySnapshot.forEach((doc) => {
    const postObj = doc.data();
    postObj.id = doc.id;
    console.log(postObj.date, postObj.title, postObj.author, postObj.recipe);
    arrPost.push(postObj);
  });
  return arrPost;
}

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};

export const likePost = async (postId, user) => {
  const postLiked = doc(db, 'posts', postId);
  try {
    return await updateDoc(postLiked, {
      likes: arrayUnion(user),
    });
  } catch (e) {
    return e;
  }
};

export const editPost = async (id, title, recipe) => {
  const post = doc(db, 'posts', id);
  await updateDoc(post, {
    title,
    recipe,
  });
  return post;
};
