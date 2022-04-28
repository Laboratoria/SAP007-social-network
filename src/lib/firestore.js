import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();

export const createPost = async (textPost, userEmail) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      recipe: textPost,
      author: userEmail,
      date: new Date(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export async function getPosts() {
  const arrPost = [];
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    const postObj = doc.data();
    postObj.id = doc.id;
    console.log('Oie', postObj.date, postObj.title, postObj.author, postObj.recipe);
    arrPost.push(postObj);
  });
  return arrPost;
  }
  console.log(getPosts());

// const createPost = async (e) => {
//     e.preventDefault();
//     const uid = auth.currentUser.uid;
//     const ref = firestore.collection('users').doc(uid).collection('posts').doc(slug)

//     export const createPost = async (textPost, userEmail) => {
//         try {
//             const docRef = await addDoc(collection(db, "post"), {
//                 textPost: textPost,
//                 userEmail: userEmail,
//                 date: new Date(),
//             });
//             console.log("Document written with ID: ", docRef.id);
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }
//     }
