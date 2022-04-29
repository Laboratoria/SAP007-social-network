import { collection, getDocs, addDoc, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { db } from '../dependencies/config-firebase.js';

export function enviarPost(mensagemPost) {
  addDoc(collection(db, 'posts'), {
    novoTeste: mensagemPost
  });
}

export async function getDoBanco() {
  const collectionPost = collection(db, 'posts');
  const postSnapshot = await getDocs(collectionPost);
  const listagemPost = postSnapshot.docs.map(doc => doc.data());
  console.log(listagemPost)
  return listagemPost;
}

getDoBanco();
