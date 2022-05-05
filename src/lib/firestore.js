import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  doc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// import { auth } from '../configs/config.firebase.js';

const db = getFirestore();

export const createPost = async (textPost, userEmail) => {
  // const displayNameUser = auth.currentUser.displayName;
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      recipe: textPost,
      author: userEmail,
      date: new Date().toLocaleString('pt-br'),
      likes: [],
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

export async function likePost(id, userEmail) {
  try {
    const postId = doc(db, "posts", id);
    console.log(postId);
    await updateDoc(postId, {
      likes: arrayUnion(userEmail),
    });
  } catch (e) {
    return e;
    // return console.log("Não deu certo o like", e);
  }
};
export async function dislikePost(id, userEmail) {
  try {
    const postId = doc(db, "posts", id);
    return await updateDoc(postId, {
      likes: arrayRemove(userEmail),
    });
  } catch (e) {
    return e;
    // console.log("Não deu certo o like", e);
  }
}

export const editPost = async (id, title, recipe) => {
  const post = doc(db, 'posts', id);
  await updateDoc(post, {
    title,
    recipe,
  });
  return post;
}



