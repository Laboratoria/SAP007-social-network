import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy, // ordenar por algum parâmetro
  query, // consultar

  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

export const db = getFirestore();

export async function addPosts(message, userEmail) {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      message,
      userEmail,
      date: new Date().toLocaleString('pt-br'),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
