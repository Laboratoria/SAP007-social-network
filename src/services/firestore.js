import { collection, getDocs, getDoc, addDoc, query, orderBy, deleteDoc, updateDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { db } from '../dependencies/config-firebase.js';
import { current } from './authentication.js';

//Pegar post pelo id
async function getPostById(idPost) {
  const post = await getDoc(doc(db, 'posts', idPost));
  return post.data();
}

// Criar post
export function createPost(text) {
  addDoc(collection(db, 'posts'), {
    userId: current().uid,
    photo: current().photoURL,
    displayName: current().displayName,
    date: new Date().toLocaleDateString('pt-BR'),
    hour: new Date().toLocaleTimeString([], { timeStyle: 'short' }),
    post: text,
    likes: [],
    comments: []
  })
}

// Pegar todos os posts do banco de dados do firestore
export async function getAllPosts() {
  const postCollection = query(collection(db, 'posts'), orderBy('date', 'desc'), orderBy('hour', 'desc'));
  const postSnapshot = await getDocs(postCollection);
  const listingOfPosts = postSnapshot.docs.map(doc => {
    const id = doc.id;
    const data = doc.data();
    const listingOfPostsWithId = {
      id,
      ...data,
    }
    return listingOfPostsWithId;
  });
  return listingOfPosts;
}

// Deletar post
export const deletePost = async (idPost) => {
  const del = await deleteDoc(doc(db, 'posts', idPost));
  return del;
}

// Função de curtir post
export async function like(idPost, icon) {
  const post = await getPostById(idPost);
  const userLogado = current().uid;
  let likes = post.likes;
  let liked;
  if (post.likes.includes(userLogado)) {
    //Remover like
    liked = false;
    likes = likes.filter((id) => id !== userLogado)
    icon.classList.remove('curtido')
  } else {
    //Adicionar like
    liked = true;
    likes.push(userLogado)
    icon.classList.add('curtido')
  }
  await updateDoc(doc(db, 'posts', idPost), {
    likes: likes
  })
  return {
    liked,
    count: likes.length
  }
}

//Editar post
export async function editedPost(idPost, text) {
  await updateDoc(doc(db, 'posts', idPost), {
    post: text
  })
}
