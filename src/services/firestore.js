import { collection, getDocs, addDoc, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { db } from '../dependencies/config-firebase.js';

// Adicionar documento na função de post
export function enviarPost(mensagemPost) {
  addDoc(collection(db, 'posts'), {
    novoTeste: mensagemPost
  });
}

// Adicionar usuários na collection
// addDoc(collection(db, 'user'), {
//   name: "Quarto teste",
//   email: "cassia@hotmail.com"
// });

// Função de buscar os posts
export async function getDoBanco() {
  const collectionPost = collection(db, 'posts');
  const postSnapshot = await getDocs(collectionPost);
  const listagemPost = postSnapshot.docs.map(doc => doc.data());
  console.log(listagemPost)
  return listagemPost;
}

getDoBanco();
