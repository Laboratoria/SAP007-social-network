import { collection, addDoc } from './export.js';
import { db, auth } from './start-firebase.js';

export function createNewPost(newText) {
  if (newText.length === 0) {
    // colocar mensagem avisando que não tem texto na postagem
    return;
  }

  const postsCollection = collection(db, 'posts');
  const newPost = {
    userId: auth.currentUser.uid,
    text: newText,
    like: 0,
    createdAt: new Date(),
  };

  addDoc(postsCollection, newPost)
    .then(() => {
      window.location.hash = '#feed';
    })
    .catch((error) => {
      return error;
    });

    //chamar função closeModalAutomatically do arquivo modal.js
}
