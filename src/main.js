import { db } from './config-firebase.js';
import { collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

async function getDoBanco() {
  const collectionPost = collection(db, 'posts');
  const postSnapshot = await getDocs(collectionPost);
  const listagemPost = postSnapshot.docs.map(doc => doc.data());
  //console.log(listagemPost)
  return listagemPost;
}

getDoBanco()

addDoc(collection(db, "users"), {
  name: "Cássia",
  email: "cassia@hotmail.com"
});