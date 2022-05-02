import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();

export const createPost = async (textPost, userEmail) => {
  const displayNameUser = auth.currentUser.displayName;
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      recipe: textPost,
      author: displayNameUser,
      date: new Date().toLocaleString('pt-br'),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};


export async function getPosts() {
  const arrPost = [];
  const sortingPosts = query(collection(db, 'posts'), orderBy('date', 'asc'));
  const querySnapshot = await getDocs(sortingPosts);
  querySnapshot.forEach((doc) => {
    const postObj = doc.data();
    postObj.id = doc.id;
    console.log('Oie', postObj.date, postObj.title, postObj.author, postObj.recipe);
    arrPost.push(postObj);
  });
  return arrPost;
}
console.log(getPosts());


export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};
