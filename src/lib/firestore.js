import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();
// const colRef= collection(db, 'posts')


// const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     titulo: addBookForm.title.value,
//     author: addBookForm.author.value,
//   })
//   .then(() => {
//     addBookForm.reset()
//   })
// })

// export function createPost () {
//   addDoc(collection(db, 'posts'), {
//     
//   });
// }


// export const createPost = async (textPost) => {
//   try {
//       const docRef = await addDoc(collection(db, "posts"), {
//           textPost: textPost,
//       });
//       console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//       console.error("Error adding document: ", e);
//   }
// }


export const createPost = async (textPost, userEmail) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      textPost,
      userEmail,
      date: new Date(),
    });
    console.log('Post escrito pelo ID: ', docRef.id);
  } catch (e) {
    console.error('Erro ao adicionar post: ', e);
  }
};
